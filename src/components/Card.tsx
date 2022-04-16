import React, { FC } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import { CardProps } from '../types/types';

const Card: FC<CardProps> = ({ card, onDelete }) => {
  let { path } = useRouteMatch();
  const deleteHandler = (e: React.MouseEvent): void => {
    onDelete(card._id);
  };

  return (
    <div style={{ 'display': 'flex' }}>
      <h1>{card.model}</h1>
      <p>{card.date}</p>
      <img style={{ 'width': 500 }} src={card.image} alt='Картинка'></img>
      <p>{card.description}</p>
      <p>{card.switchType}</p>
      <p>{card.price}</p>
      <button onClick={deleteHandler}>Удалить</button>
      <Link to={`${path}/${card._id}`}>
        <button>Редактировать</button>
      </Link>
    </div>
  );
};

export default Card;
