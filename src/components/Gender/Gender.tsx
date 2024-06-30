import {FC} from 'react';
import {ButtonType, Data} from "../../types";
import {useNavigate, useParams} from "react-router";
import {PATH} from "../../routes";
import {Button} from "../Button";
import './Gender.scss';

interface Props {
  data: Data
}

export const Gender: FC<Props> = ({data}) => {
  const {params, title, type, images} = data;
  const navigate = useNavigate()
  const {id} = useParams<{ id: string | undefined }>();
  const nextStep = +id! + 1;
  const handleButtonClick = (selectedOption: string) => {
    localStorage.setItem(id!, JSON.stringify({
        order: id,
        title,
        type,
        answer: selectedOption,
      })
    );
    navigate(`/${PATH.QUIZ}/${nextStep}`, {replace: true})
  }

  return (
    <div className='gender'>
      {params.map((option, i) => (
        <Button
          title={option}
          type={ButtonType.SECONDARY_ICON}
          icon={images![i]}
          key={i}
          callBack={() => handleButtonClick(option)}
        />
      ))}
    </div>
  );
};
