import styled from 'styled-components';

type Props = {
  fontSize?: string;
  padding?: string;
  margin?: string;
};

export const StyledButton = styled.button<Props>`
  background-color: #000;
  color: #fff;
  cursor: pointer;
  font-size: ${({ fontSize }) => fontSize || '14px'};
  padding: ${({ padding }) => padding || '5px 10px'};
  margin: ${({ margin }) => margin || 0};
  border: none;
  border-radius: 10px;
  transition: transform 100ms ease-in;

  &:hover {
    transform: scale(1.01);
  }
`;
