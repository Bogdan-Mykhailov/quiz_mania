import {FC} from 'react';
import './Greeting.scss';
import {Button, SaveDataButton} from "../../components";
import {useTranslation} from "react-i18next";
import downloadIcon from '../../assets/download.png'
import okIcon from '../../assets/ok.png'
import {ButtonType} from "../../types";
import {useNavigate} from "react-router";
import {PATH} from "../../routes";

export const Greeting: FC = () => {
  const {t} = useTranslation();
  const navigate = useNavigate();

  const handleRetakeQuiz = () => {
    localStorage.clear();
    navigate(`/${PATH.QUIZ}/1`);
  };

  return (
    <div className='greetings'>
      <h2 className='greetings__title'>{t('greetings.title')}</h2>
      <p className='greetings__subtitle'>{t('greetings.subtitle')}</p>
      <div className='greetings__ok'>
        <img className='greetings__icon' src={okIcon} alt="Ok icon"/>
      </div>

      <SaveDataButton icon={downloadIcon} title={t('greetings.download')}/>
      <Button title={t('button.retake-quiz')} type={ButtonType.PRIMARY} callBack={handleRetakeQuiz} />
    </div>
  );
};
