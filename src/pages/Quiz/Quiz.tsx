import { FC } from 'react';
import './Quiz.scss';
import { useTranslation } from "react-i18next";
import { Data } from "../../types/types";
import {Gender, Language} from "../../components";
import {useParams} from "react-router";
import {MultiStepProgressBar} from "../../components/MultiStepProgressBar/MultiStepProgressBar.tsx";

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
    default:
      StepComponent = <div>Unknown step</div>;
  }

  return (
    <div>
      <MultiStepProgressBar totalSteps={5} currentStep={id!} />
      <p>{title}</p>
      <p>{description}</p>
      {StepComponent}
    </div>
  );
};
