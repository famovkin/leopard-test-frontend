import { useState, useEffect, FC } from 'react';
import { useParams } from 'react-router-dom';

import Form from './Form';
import Preloader from './Preloader';
import { api } from '../utils/api';
import { ICard, RouterParams } from '../types/types';

const CardPage: FC = () => {
  const token: string | null = localStorage.getItem('token');
  const [card, setCard] = useState<ICard | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams<RouterParams>();

  useEffect(() => {
    setIsLoading(true);
    api
      .getKeyboard(id, token)
      .then(c => setCard(c))
      .finally(() => setIsLoading(false));
  }, [id, token]);

  return (
    <>
      {isLoading && <Preloader />}
      <Form initialValues={card} editedCardId={id} />
    </>
  );
};

export default CardPage;
