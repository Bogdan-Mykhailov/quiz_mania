import {FC} from 'react';
import './MultiStepProgressBar.scss';
import {useNavigate, useParams} from "react-router";
import {PATH} from "../../routes";

interface Props {
  totalSteps: number;
  currentStep: string;
}

export const MultiStepProgressBar: FC<Props> = ({ currentStep, totalSteps}) => {
  const navigate = useNavigate()
  const {id} = useParams<{ id: string }>()
  const progressPercentage = (+currentStep / totalSteps) * 100;
  const prevStep = +id - 1;
  const handleBackButtonClick = () => {
    navigate(`/${PATH.QUIZ}/${prevStep}`, { replace: true })
  }

  const isShowBackButton = +id >= 2;

  return (
    <div className="progress-bar-container">
      {isShowBackButton && <div className="back-button" onClick={handleBackButtonClick}>{"<"}</div>}
      <div className="progress-info">
        <span className="current-step">{currentStep}</span>/<span className="total-steps">{totalSteps}</span>
      </div>

      <div className="progress-bar">
        <div className="progress-bar-filled" style={{width: `${progressPercentage}%`}}></div>
      </div>
    </div>
  );
};
