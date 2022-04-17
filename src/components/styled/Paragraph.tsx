import styled from 'styled-components';

type Props = {
  width?: string;
  fontWeight?: number;
};

export const StyledParagraph = styled.p<Props>`
  width: ${({ width }) => width || '100%'};
  font-weight: ${({ fontWeight }) => fontWeight || '400'};

  @media (max-width: 768px) {
    & {
      width: 100%;
    }
  }
`;
