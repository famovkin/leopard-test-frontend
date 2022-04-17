import styled from 'styled-components';

export const StyledCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
  widht: 100%;
  min-height: 200px;
  background-color: #fff;
  padding: 15px;
  font-size: 13px;
  border-bottom: 1px solid #cecece;

  &:first-child {
    padding-top: 30px;
    border-radius: 30px 30px 0 0;
  }

  @media (max-width: 768px) {
    & {
      flex-direction: column;
    }
  }
`;

export const StyledFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  @media (max-width: 768px) {
    & {
      align-self: end;
    }
  }
`;

export const StyledCardImage = styled.img`
  width: 10%;

  @media (max-width: 768px) {
    & {
      width: 100%;
    }
  }
`;
