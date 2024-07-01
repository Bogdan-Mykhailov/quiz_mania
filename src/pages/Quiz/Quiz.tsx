import { FC } from 'react';
import './Quiz.scss';
import { useTranslation } from "react-i18next";
import { Data } from "../../types";
import {Age, Book, Gender, Language, MultiStepProgressBar} from "../../components";
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
      case 4:
      StepComponent = <Book data={params} />;
      break;
    default:
      StepComponent = <div>Unknown step</div>;
  }

  const renderTitle = (title: string) => {
    if (id === '4' && title.includes('hate')) {
      const parts = title.split('hate');
      return (
        <>
          {parts[0]}<span className='quiz__highlight'>hate</span>{parts[1]}
        </>
      );
    }
    return title;
  };

  return (
    <div className='quiz'>
      <MultiStepProgressBar totalSteps={5} currentStep={id!} />
      <p className='quiz__title'>{renderTitle(title)}</p>
      <p className='quiz__subtitle'>{description}</p>
      {StepComponent}
    </div>
  );
};
