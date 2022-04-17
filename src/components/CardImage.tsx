import { FC } from 'react';

import { StyledCardImage } from './styled/Card';
import { CardImageProps } from '../types/types';

const CardImage: FC<CardImageProps> = ({ ...props }) => {
  return <StyledCardImage {...props} />;
};

export default CardImage;
