import { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import cardsListStore from '../store/cardsList';
import Form from "./Form";
import Card from './Card';

const CardsList: FC = observer(() => {
  const token: string | null = localStorage.getItem('token');
  
  useEffect(() => cardsListStore.fetchCards(token), [token]);

  const deleteHandler = (cardId: string | undefined): void =>
    cardsListStore.removeCard(cardId, token);

  return (
    <div>
      <Form initialValues={null} editedCardId={null}/>
      {cardsListStore.cardList.map((card) => (
        <Card key={card._id} onDelete={deleteHandler} card={card} />
      ))}
    </div>
  );
});

export default CardsList;
