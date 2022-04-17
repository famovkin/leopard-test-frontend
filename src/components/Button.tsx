import { FC, memo } from 'react';

import { StyledButton } from './styled/Button';
import { ButtonProps } from '../types/types';

const Button: FC<ButtonProps> = ({ text, clickHandler, ...props }) => {
  return (
    <StyledButton onClick={clickHandler} {...props}>
      {text}
    </StyledButton>
  );
};

export default memo(Button);
