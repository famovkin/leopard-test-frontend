import styled from 'styled-components';

type Props = {
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  gap?: number;
};

export const StyledFlex = styled.div<Props>`
  display: flex;
  align-items: ${(props) => props.alignItems || 'center'}};
  justify-content: ${(props) => props.justifyContent || 'stretch'}};
  flex-direction: ${(props) => props.flexDirection || 'stretch'}};
  gap: ${({ gap }) => gap + 'px'}};
`;
