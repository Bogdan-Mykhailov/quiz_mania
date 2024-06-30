import {FC} from 'react';
import {ButtonType} from "../../types";
import './Button.scss';

interface Props {
  type: ButtonType;
  title: string;
  icon?: string;
  callBack: () => void;
  disabled?: boolean
}

export const Button: FC<Props> = ({
                                    title,
                                    icon,
                                    type,
                                    callBack,
                                    disabled
                                  }) => {
  return (
    <button
      disabled={disabled}
      className={`${type}`}
      onClick={callBack}
    >
      {icon && <span className='icon'>{icon}</span>}
      <p className='button-text'>{title}</p>
    </button>
  );
};
