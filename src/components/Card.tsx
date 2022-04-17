import React, { FC, memo } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import { StyledCard, StyledFlex } from './styled/Card';
import Button from './Button';
import Paragraph from './Paragraph';
import CardImage from './CardImage';
import { CardProps } from '../types/types';

const Card: FC<CardProps> = ({ card, onDelete }) => {
  let { path } = useRouteMatch();
  const deleteHandler = (e: React.MouseEvent): void => onDelete(card._id);

  return (
    <StyledCard>
      <CardImage src={card.image} alt={card.model} />
      <Paragraph width='10%' fontWeight={700}>{card.model}</Paragraph>
      <Paragraph width='10%'>{card.date}</Paragraph>
      <Paragraph width='50%'>{card.description}</Paragraph>
      <Paragraph width='10%'>{card.switchType}</Paragraph>
      <Paragraph width='10%' fontWeight={700}>{card.price}р.</Paragraph>
      <StyledFlex>
        <Button clickHandler={deleteHandler} fontSize='10px' text='Удалить' />
        <Link to={`${path}/${card._id}`}>
          <Button fontSize='10px' text='Редактировать' />
        </Link>
      </StyledFlex>
    </StyledCard>
  );
};

export default memo(Card);
