import {FC, useEffect, useState} from 'react';
import {Data} from "../../types";
import './Book.scss';
import {useNavigate, useParams} from "react-router";
import {Button} from "../Button";
import {PATH} from "../../routes";
import {useTranslation} from "react-i18next";
import {getButtonType} from "../../utils";

interface Props {
  data: Data
}

export const Book: FC<Props> = ({data}) => {
  const {id} = useParams<{ id: string | undefined }>();
  const {t} = useTranslation();
  const navigate = useNavigate();
  const [selectedBooks, setSelectedBooks] = useState<string[]>([]);
  const {
    title,
    type,
    params
  } = data;

  useEffect(() => {
    localStorage.setItem(
      id!,
      JSON.stringify({
        order: id,
        title,
        type,
        answer: selectedBooks,
      })
    );
  }, [selectedBooks]);

  const handleCheckboxChange = (option: string) => {
    setSelectedBooks((prevSelectedBooks) =>
      prevSelectedBooks.includes(option)
        ? prevSelectedBooks.filter((book) => book !== option)
        : [...prevSelectedBooks, option]
    );
  };

  const nextStep = +id! + 1;
  const isNextButtonDisabled = !selectedBooks.length;
  const buttonType = getButtonType(isNextButtonDisabled);

  const handleButtonClick = () => {
    !isNextButtonDisabled && navigate(`/${PATH.QUIZ}/${nextStep}`)
  }

  return (
    <div className='book'>
      {params.map((option, i) => (
        <div
          key={i}
          onClick={() => handleCheckboxChange(option)}
          className={`book__wrapper ${selectedBooks.includes(option)
            ? 'book__wrapper--selected'
            : ''}`}
        >
          <p className='book__title'>{option}</p>
          <label className="container">
            <input
              className='container__input input'
              type="checkbox"
              onChange={() => handleCheckboxChange(option)}
              checked={selectedBooks.includes(option)}
            />
            <div className="container__checkmark checkmark"></div>
          </label>
        </div>
      ))}

      <Button
        title={t('button.next')}
        type={buttonType}
        callBack={handleButtonClick}
        disabled={isNextButtonDisabled}
      />
    </div>
  );
};
