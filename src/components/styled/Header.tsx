import styled from 'styled-components';
import { Link } from "react-router-dom";

export const StyledHeader = styled.header`
  background-color: #fff;
  padding: 20px 20px 25px;
  border-radius: 0 0 30px 30px;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  margin-bottom: 30px;
`;

export const StyledTitle = styled.h1`
  font-size: 35px;

  @media (max-width: 758px) {
    & {
      font-size: 27px;
    }
  }

  @media (max-width: 425px) {
    & {
      font-size: 21px;
    }
  }
`;

export const StyledLink = styled(Link)`
  @media (max-width: 768px) {
    & {
      font-size: 14 px;  
    }
  }
`