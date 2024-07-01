import {FC, useEffect, useState} from 'react';
import {ButtonType, Data} from "../../types";
import './Book.scss';
import {useNavigate, useParams} from "react-router";
import {Button} from "../Button";
import {PATH} from "../../routes";

interface Props {
  data: Data
}

export const Book: FC<Props> = ({data}) => {
  const {id} = useParams<{ id: string | undefined}>();
  const navigate = useNavigate();
  const {title, type, params} = data;
  const [selectedBooks, setSelectedBooks] = useState<string[]>([]);

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

  const handleButtonClick = () => {
    !isNextButtonDisabled && navigate(`/${PATH.QUIZ}/${nextStep}`)
  }

  const correctButtonType = isNextButtonDisabled
    ? ButtonType.PRIMARY__DISABLED
    : ButtonType.PRIMARY

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
        title='Next'
        type={correctButtonType}
        callBack={handleButtonClick}
        disabled={isNextButtonDisabled}
      />
    </div>
  );
};
