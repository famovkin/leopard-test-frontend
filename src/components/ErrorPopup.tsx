import { FC } from 'react';

import { StyledErrorPopup } from '../components/styled/ErrorPopup';
import { ErrorPopupProps } from "../types/types";

const ErrorPopup: FC<ErrorPopupProps> = ({ isError = false }) => {
  return (
    <StyledErrorPopup isError={isError}>
      <p>Что-то пошло не так...</p>
    </StyledErrorPopup>
  );
};

export default ErrorPopup;
