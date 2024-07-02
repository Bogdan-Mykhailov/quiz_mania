import {FC, useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";
import {LOCALE, LocaleText} from "../../i18n/languiges.ts";
import {ButtonType, Data} from "../../types";
import {useNavigate, useParams} from "react-router";
import {PATH} from "../../routes";
import {Button} from "../Button";
import './Language.scss';

interface Props {
  data: Data;
}

export const Language: FC<Props> = ({data}) => {
  const {id} = useParams<{ id: string | undefined }>();
  const langs = Object.values(LOCALE);
  const {i18n} = useTranslation();
  const {title, type, params} = data;
  const navigate = useNavigate()
  const [selectedLang, setSelectedLang] = useState<LOCALE | null>(null);


  const handleClick = (lang: LOCALE) => {
    i18n.changeLanguage(lang);
    setSelectedLang(lang)
  };

  const nextStep = +id! + 1;

  useEffect(() => {
    if (selectedLang) {
      const newData = {
        order: id,
        title,
        type,
        answer: LocaleText[selectedLang]
      }
      localStorage.setItem(id!, JSON.stringify(newData));
      navigate(`/${PATH.QUIZ}/${nextStep}`, {replace: true});
    }
  }, [selectedLang]);

  return (
    <div className='language'>
      {params.map((option, i) => (
        <Button
          type={ButtonType.SECONDARY}
          title={option}
          key={i}
          callBack={() => handleClick(langs[i])}
        />
      ))}
    </div>
  );
};
