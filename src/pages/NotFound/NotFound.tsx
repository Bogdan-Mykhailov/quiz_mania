import {FC, useEffect} from 'react';
import './NotFound.scss';
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router";
import {PATH} from "../../routes";

export const NotFound: FC = () => {
  const {t} = useTranslation();
  const navigate = useNavigate();

  const firstPage = '1'
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(`/${PATH.QUIZ}/${firstPage}`);
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className='notFound'>
      <h2 className='notFound__title'>{t('not-found.oops')}</h2>
      <span className='notFound__icon'>🕵️</span>
      <h3 className='notFound__subtitle'>404</h3>
    </div>
  );
};
