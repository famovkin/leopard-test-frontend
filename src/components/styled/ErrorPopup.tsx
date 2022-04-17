import styled from 'styled-components';

type Props = {
    isError: boolean;
}

export const StyledErrorPopup = styled.div<Props>`
  max-width: 300px;
  position: fixed;
  top: 25px;
  left: 25px;
  z-index: 2;
  padding: 20px 10px;
  background-color: #fff;
  color: #fff;
  box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  transform: translateX(-250%);
  transform: ${({isError}) => isError && 'translateX(0%)'};
  transition: all 0.4s ease-in-out;

  p {
    margin: 0 auto;
    font-size: 16px;
    font-weight: 400;

    @media (max-width: 500px) {
      & {
        font-size: 13px;
      }
    }
  }
`;
