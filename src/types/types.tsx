export type ICard = {
  _id: string;
  model: string;
  image: string;
  description: string;
  switchType: string;
  price: number;
  date: string;
  onDelete: (id: string | undefined, token: string | undefined) => void;
  onEdit: (id: string) => void;
};

export type CardProps = {
  card: ICard;
  onDelete: (params: string | undefined) => void;
};

export type UnauthPageProps = {
  submitHandler: (email: string, password: string) => void;
  title: string;
  buttonText: string;
};

export type RouterParams = {
  id: string;
};

export type HeaderProps = {
  isAuth: boolean;
};

export type ButtonProps = {
  clickHandler?: (e: any) => void;
  text: string;
  fontSize?: string;
  padding?: string;
  margin?: string;
};

export type TitleProps = {
  text: string;
};

export type InputProps = {
  value: string | '';
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  placeholder: string;
  margin?: string;
};

export type ErrorPopupProps = {
  isError?: boolean;
};

export type CardImageProps = {
  src: string;
alt: string;
};

export type ParagraphProps = {
  children: React.ReactNode
  width?: string;
  fontWeight?: number;
};
