import { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import Form from './Form';
import Card from './Card';
import cardsListStore from '../store/cardsList';

const CardsList: FC = observer(() => {
  const token: string | null = localStorage.getItem('token');

  useEffect(() => cardsListStore.fetchCards(token), [token]);

  const deleteHandler = (cardId: string | undefined): void =>
    cardsListStore.removeCard(cardId, token);

  return (
    <>
      <Form initialValues={null} editedCardId={null} />
      <div>
        {cardsListStore.cardList.map((card) => (
          <Card key={card._id} onDelete={deleteHandler} card={card} />
        ))}
      </div>
    </>
  );
});

export default CardsList;
