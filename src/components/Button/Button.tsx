import {FC} from 'react';
import {ButtonType} from "../../types";
import './Button.scss';

interface Props {
  type: ButtonType;
  title: string;
  icon?: string;
  callBack?: () => void;
  disabled?: boolean;
  isActive?: boolean;
  submit?: boolean;
}

export const Button: FC<Props> = ({
                                    title,
                                    icon,
                                    type,
                                    callBack,
                                    disabled,
                                    isActive,
                                    submit,
                                  }) => {
  return (
    <button
      type={submit ? 'submit' : 'button'}
      disabled={disabled}
      className={`${type} ${isActive ? 'border' : ''}`}
      onClick={callBack}
    >
      {icon && <span className='icon'>{icon}</span>}
      <p className='button-text'>{title}</p>
    </button>
  );
};
