import {FC} from 'react';
import './Email.scss';
import {Data, FormInput} from "../../types";
import {useTranslation} from "react-i18next";
import {SubmitHandler, useForm} from "react-hook-form";
import {useNavigate} from "react-router";
import {PATH} from "../../routes";
import {Button} from "../../components";
import {
  getButtonType,
  orderSix,
  validationErrorMessage,
  validationRegEx
} from "../../utils";

const renderTerms = (terms: string) => {
  const highlightWord = (word: string, text: string) => {
    const parts = text.split(word);
    return (
      <>
        {parts[0]}<a
        href='https://en.wikipedia.org/wiki/Privacy_policy'
        target='_blank'
        className='highlight'
      >
        {word}
      </a>{parts.slice(1).join(word)}
      </>
    );
  };

  if (terms.includes('Privacy policy') && terms.includes('Terms of use.')) {
    const parts = terms.split('Privacy policy');
    return (
      <span>
        {highlightWord('Privacy policy', parts[0])}
        {highlightWord('Terms of use.', parts[1])}
      </span>
    );
  }
  if (terms.includes('Política de privacidad') && terms.includes('Términos de uso.')) {
    const parts = terms.split('Política de privacidad');
    return (
      <span>
        {highlightWord('Política de privacidad', parts[0])}
        {highlightWord('Términos de uso.', parts[1])}
      </span>
    );
  }
  if (terms.includes('Politique de confidentialité') && terms.includes('Conditions d\'utilisation.')) {
    const parts = terms.split('Politique de confidentialité');
    return (
      <span>
        {highlightWord('Politique de confidentialité', parts[0])}
        {highlightWord('Conditions d\'utilisation.', parts[1])}
      </span>
    );
  }
  if (terms.includes('Datenschutzrichtlinie') && terms.includes('Nutzungsbedingungen zu.')) {
    const parts = terms.split('Datenschutzrichtlinie');
    return (
      <span>
        {highlightWord('Datenschutzrichtlinie', parts[0])}
        {highlightWord('Nutzungsbedingungen zu.', parts[1])}
      </span>
    );
  }

  return terms;
};

export const Email: FC = () => {
  const {t} = useTranslation();
  const params = t('email', {returnObjects: true}) as Data;
  const navigate = useNavigate();
  const {
    title,
    description,
    terms,
    type,
    placeholder
  } = params;
  const {
    register,
    reset,
    handleSubmit,
    formState: {errors, isValid}
  } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = (data: FormInput) => {
    localStorage.setItem(
      orderSix,
      JSON.stringify({
        order: orderSix,
        title,
        type,
        answer: data.email,
      })
    );
    reset();
    navigate(`/${PATH.GREETING}`);
  };

  const isNextButtonDisabled = !isValid;
  const buttonType = getButtonType(isNextButtonDisabled);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='email'>
        <h2 className='email__title'>{title}</h2>
        <h3 className='email__subtitle'>{description}</h3>
        <div className='email__content'>
          <input
            autoComplete='off'
            className={`email__input ${isValid && 'valid'} ${errors.email ? 'error' : ''}`}
            placeholder={placeholder}
            {...register(
              "email",
              {
                required: true,
                pattern: {
                  value: validationRegEx,
                  message: validationErrorMessage
                }
              }
            )} />
          {errors.email
            && <p className='email__error'>{errors.email.message}</p>}
        </div>
        <p className='email__terms'>{renderTerms(terms!)}</p>
        <Button
          submit
          title={t('button.next')}
          type={buttonType}
          isActive
        />
      </div>
    </form>
  );
};
