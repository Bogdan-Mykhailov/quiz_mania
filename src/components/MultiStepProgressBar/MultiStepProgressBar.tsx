import {FC} from 'react';
import './MultiStepProgressBar.scss';
import {useNavigate, useParams} from "react-router";
import {PATH} from "../../routes";
import back from '../../assets/angleLeft.svg'

interface Props {
  totalSteps: number;
  currentStep: string;
}

export const MultiStepProgressBar: FC<Props> = ({currentStep, totalSteps}) => {
  const navigate = useNavigate()
  const {id} = useParams<{ id: string | undefined }>()
  const progressPercentage = (+currentStep / totalSteps) * 100;
  const prevStep = +id! - 1;
  const handleBackButtonClick = () => {
    navigate(`/${PATH.QUIZ}/${prevStep}`)
  }

  const isShowBackButton = +id! >= 2;

  return (
    <div className="progressbar">
      <div className='progressbar__wrapper'>
        {
          isShowBackButton && <img
            className="progressbar__back-icon"
            onClick={handleBackButtonClick}
            src={back}
            alt="Arrow left"
          />
        }
        <div className="progressbar__info info">
          <span className="info__current-step">{currentStep}</span> / <span
          className="info__total-steps">{totalSteps}</span>
        </div>
      </div>

      <div className="progressbar__line">
        <div
          className="progressbar__line--filled"
          style={{width: `${progressPercentage}%`}}
        ></div>
      </div>
    </div>
  );
};
