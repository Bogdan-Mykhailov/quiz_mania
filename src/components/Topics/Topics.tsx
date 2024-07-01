import { FC, useEffect, useState } from 'react';
import { ButtonType, Data } from "../../types";
import { Button } from "../Button";
import { useParams } from "react-router";

import './Topics.scss';

interface Props {
  data: Data;
  onNext: () => void;
}

export const Topics: FC<Props> = ({ data, onNext }) => {
  const { id } = useParams<{ id: string | undefined }>();
  const { title, type, images, params } = data;
  const [selectedBubble, setSelectedBubble] = useState<string[]>([]);

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

  const isNextButtonDisabled = !selectedBubble.length;
  const correctButtonType = isNextButtonDisabled
    ? ButtonType.PRIMARY__DISABLED
    : ButtonType.PRIMARY;

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
          title='Next'
          type={correctButtonType}
          callBack={handleButtonClick}
          disabled={isNextButtonDisabled}
        />
    </div>
  );
};
