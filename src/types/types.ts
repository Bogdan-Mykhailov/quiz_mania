export interface Data {
  title: string;
  description?: string;
  params: string[];
  type: string;
  images?: string[];
  terms?: string;
  placeholder?: string;
}

export enum ButtonType {
  PRIMARY = 'primary',
  PRIMARY__DISABLED = 'primary__disabled',
  SECONDARY = 'secondary',
  SECONDARY_LARGE = 'secondary__large',
  SECONDARY_ICON = 'secondary__icon',
  SECONDARY_ROUNDED = 'secondary__rounded',
}

export interface TableData {
  order: number;
  title: string;
  type: string;
  answer: string;
}
