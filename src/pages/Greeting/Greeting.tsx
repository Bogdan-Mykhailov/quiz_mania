import {FC} from 'react';
import './Greeting.scss';
import {SaveDataButton} from "../../components";
import {useTranslation} from "react-i18next";
import downloadIcon from '../../assets/download.png'
import okIcon from '../../assets/ok.png'
import {Button} from "../../components/Button";
import {ButtonType} from "../../types";

export const Greeting: FC = () => {
  const {t} = useTranslation();

  return (
    <div className='greetings'>
      <h2 className='greetings__title'>{t('greetings.title')}</h2>
      <p className='greetings__subtitle'>{t('greetings.subtitle')}</p>
      <div className='greetings__ok'>
        <img className='greetings__icon' src={okIcon} alt="Ok icon"/>
      </div>

      <SaveDataButton icon={downloadIcon} title={t('greetings.download')}/>
      <Button title={t('button.retake-quiz')} type={ButtonType.PRIMARY} callBack={() => {}} />
    </div>
  );
};
