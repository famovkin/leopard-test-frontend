import { useState, useEffect, FC } from 'react';
import { useParams } from 'react-router-dom';

import Form from './Form';
import { api } from '../utils/api';
import { ICard, RouterParams } from '../types/types';


const CardPage: FC = () => {
  const token: string | null = localStorage.getItem('token');
  const [card, setCard] = useState<ICard | undefined>(undefined);
  const { id } = useParams<RouterParams>();

  useEffect(() => {
    api.getKeyboard(id, token).then((c) => setCard(c));
  }, [id]);

  return (
    <>
      <Form initialValues={card} editedCardId={id} />
    </>
  );
};

export default CardPage;
