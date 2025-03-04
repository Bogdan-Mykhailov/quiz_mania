import {FC, useEffect, useState} from 'react';
import './Quiz.scss';
import {useTranslation} from "react-i18next";
import {Data} from "../../types";
import {
  Age,
  Book,
  CircularProgressBar,
  Gender,
  Language,
  MultiStepProgressBar,
  Topics
} from "../../components";
import {useNavigate, useParams} from "react-router";
import {PATH} from "../../routes";
import {pageFour} from "../../utils";

export const Quiz: FC = () => {
  const {t} = useTranslation();
  const {id} = useParams<{ id: string | undefined }>();
  const navigate = useNavigate();
  const [isProgressBarActive, setIsProgressBarActive] = useState<boolean>(false);

  const params = t(id!, {returnObjects: true}) as Data;

  const {title, description} = params;

  let StepComponent;
  const idNum = Number(id);
  switch (idNum) {
    case 1:
      StepComponent = <Language data={params}/>;
      break;
    case 2:
      StepComponent = <Gender data={params}/>;
      break;
    case 3:
      StepComponent = <Age data={params}/>;
      break;
    case 4:
      StepComponent = <Book data={params}/>;
      break;
    case 5:
      StepComponent = <Topics data={params} onNext={() => setIsProgressBarActive(true)}/>;
      break;
  }

  const renderTitle = (title: string) => {
    const highlightWord = (word: string, text: string) => {
      const parts = text.split(word);
      return (
        <>
          {parts[0]}<span className='quiz__highlight'>{word}</span>{parts[1]}
        </>
      );
    };

    if (id === pageFour) {
      if (title.includes('hate')) return highlightWord('hate', title);
      if (title.includes('hassen')) return highlightWord('hassen', title);
      if (title.includes('détestez')) return highlightWord('détestez', title);
      if (title.includes('odias')) return highlightWord('odias', title);
    }

    return title;
  };

  useEffect(() => {
    if (isProgressBarActive) {
      const timer = setTimeout(() => {
        navigate(`/${PATH.EMAIL}`);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isProgressBarActive, navigate]);

  return (
    <div className='quiz'>
      {isProgressBarActive ? (
        <div className='quiz__progress-wrapper'>
          <CircularProgressBar duration={5}/>
        </div>
      ) : (
        <>
          <MultiStepProgressBar totalSteps={5} currentStep={id!}/>
          <p className='quiz__title'>{renderTitle(title)}</p>
          <p className='quiz__subtitle'>{description}</p>
          {StepComponent}
        </>
      )}
    </div>
  );
};
