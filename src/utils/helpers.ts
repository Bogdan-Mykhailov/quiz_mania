import {ButtonType} from "../types";

export const getButtonType = (isDisabled: boolean): ButtonType => {
  return isDisabled ? ButtonType.PRIMARY__DISABLED : ButtonType.PRIMARY;
};
