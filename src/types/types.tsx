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

export type NavBarProps = {
  isAuth: boolean;
};
