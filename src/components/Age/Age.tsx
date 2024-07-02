import {FC} from 'react';
import {ButtonType, Data} from "../../types";
import {useNavigate, useParams} from "react-router";
import {PATH} from "../../routes";
import {Button} from "../Button";
import './Age.scss';

interface Props {
  data: Data
}

export const Age: FC<Props> = ({ data }) => {
  const {
    params,
    title,
    type
  } = data;
  const { id } = useParams<{ id: string | undefined }>()
  const navigate = useNavigate()

  const nextStep = +id! + 1

  const handleButtonClick = (selectedAge: string) => {
    localStorage.setItem(id!, JSON.stringify({
      order: id,
      title,
      type,
      answer: selectedAge
    }))
    navigate(`/${PATH.QUIZ}/${nextStep}`)
  }

  return (
    <div className='age'>
      {params.map((option, i) => (
        <Button
          type={ButtonType.SECONDARY_LARGE}
          title={option}
          key={i}
          callBack={() => handleButtonClick(option)}
        />
      ))}
    </div>
  );
};
