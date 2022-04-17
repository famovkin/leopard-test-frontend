import styled from 'styled-components';

type Props = {
  margin?: string;
};

export const StyledInput = styled.input<Props>`
  margin: ${({ margin }) => margin || 0};
  outline: none;
  font-size: 16px;
  border: none;
  padding: 5px;
  font-family: 'Nunito', sans-serif;
  border-bottom: 1px solid #000;
`;