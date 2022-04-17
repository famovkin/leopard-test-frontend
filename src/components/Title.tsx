import { FC, memo } from 'react';

import { StyledTitle } from './styled/Title';
import { TitleProps } from '../types/types';

const Title: FC<TitleProps> = ({ text }) => {
  return <StyledTitle>{text}</StyledTitle>;
};

export default memo(Title);
