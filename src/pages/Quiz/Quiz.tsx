import { FC } from 'react';
import './Quiz.scss';
import { useTranslation } from "react-i18next";
import { Data } from "../../types";
import {Age, Gender, Language, MultiStepProgressBar} from "../../components";
import {useParams} from "react-router";

export const Quiz: FC = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string | undefined }>();

  const params = t(id!, { returnObjects: true }) as Data;
  const { title, description} = params;

  let StepComponent;
  switch (+id!) {
    case 1:
      StepComponent = <Language data={params} />;
      break;
    case 2:
      StepComponent = <Gender data={params} />;
      break;
      case 3:
      StepComponent = <Age data={params} />;
      break;
    default:
      StepComponent = <div>Unknown step</div>;
  }

  return (
    <div className='quiz'>
      <MultiStepProgressBar totalSteps={5} currentStep={id!} />
      <p className='quiz__title'>{title}</p>
      <p className='quiz__subtitle'>{description}</p>
      {StepComponent}
    </div>
  );
};
