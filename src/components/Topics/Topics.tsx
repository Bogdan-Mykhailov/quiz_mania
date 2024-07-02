import { FC, useEffect, useState } from 'react';
import { ButtonType, Data } from "../../types";
import { Button } from "../Button";
import { useParams } from "react-router";
import {useTranslation} from "react-i18next";
import './Topics.scss';
import {getButtonType} from "../../utils";

interface Props {
  data: Data;
  onNext: () => void;
}

export const Topics: FC<Props> = ({ data, onNext }) => {
  const { id } = useParams<{ id: string | undefined }>();
  const {t} = useTranslation();
  const [selectedBubble, setSelectedBubble] = useState<string[]>([]);
  const {
    title,
    type,
    images,
    params
  } = data;

  useEffect(() => {
    localStorage.setItem(
      id!,
      JSON.stringify({
        order: id,
        title,
        type,
        answer: selectedBubble,
      })
    );
  }, [selectedBubble]);

  const handleSelectBubble = (option: string) => {
    setSelectedBubble((prevSelectedBubble) =>
      prevSelectedBubble.includes(option)
        ? prevSelectedBubble.filter((bubble) => bubble !== option)
        : [...prevSelectedBubble, option]
    );
  };

  const handleButtonClick = () => {
    if (!isNextButtonDisabled) {
      onNext();
    }
  };

  const isNextButtonDisabled = selectedBubble.length < 3;
  const buttonType = getButtonType(isNextButtonDisabled);

  return (
    <div className='topics'>
      <div className='topics__wrapper'>
        {params.map((option, i) => (
          <Button
            key={i}
            isActive={selectedBubble.includes(option)}
            type={ButtonType.SECONDARY_ROUNDED}
            title={option}
            callBack={() => handleSelectBubble(option)}
            icon={images![i]}
          />
        ))}
      </div>

        <Button
          title={t('button.next')}
          type={buttonType}
          callBack={handleButtonClick}
          disabled={isNextButtonDisabled}
        />
    </div>
  );
};
