import { FC } from 'react';

import { StyledInput } from './styled/Input';
import { InputProps } from '../types/types';

const Input: FC<InputProps> = ({ ...props }) => {
  return <StyledInput {...props} />;
};

export default Input;
