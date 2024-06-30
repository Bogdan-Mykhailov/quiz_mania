import {FC} from 'react';
import {Data} from "../../types/types.ts";
import {useNavigate, useParams} from "react-router";
import {PATH} from "../../routes";

interface Props {
  data: Data
}

export const Gender: FC<Props> = ({data}) => {
  const { params, title, type, images } = data;
  const navigate = useNavigate()
  const { id } = useParams<{ id: string | undefined }>();
  const nextStep = +id! + 1;
  const handleButtonClick = (selectedOption: string) => {
    localStorage.setItem(id, JSON.stringify({
        order: id,
        title,
        type,
        answer: selectedOption,
      })
    );
    navigate(`/${PATH.QUIZ}/${nextStep}`, { replace: true })
  }

  return (
    <div>
      {params.map((option, i) => (
        <div>
          <span>{images[i]}</span>
          <button key={i} onClick={() => handleButtonClick(option)}>{option}</button>
        </div>
      ))}
    </div>
  );
};
