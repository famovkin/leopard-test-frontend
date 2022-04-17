import { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { StyledFlex } from './styled/Flex';
import { StyledHeader, StyledTitle, StyledLink } from './styled/Header';
import Button from "./Button";
import authStore from '../store/auth';
import { HeaderProps } from '../types/types';

const Header: FC<HeaderProps> = ({ isAuth }) => {
  const history = useHistory();

  const signOut = (): void => {
    authStore.logout();
    localStorage.removeItem('token');
    history.push('/signin');
  };

  return (
    <StyledHeader>
      <StyledFlex justifyContent='space-between' gap={10}>
        <StyledTitle>Reactboards</StyledTitle>
        {!isAuth && (
          <StyledFlex gap={5} flexDirection='column'>
            <StyledLink to='/signin'>Логин</StyledLink>
            <StyledLink to='/signup'>Регистрация</StyledLink>
          </StyledFlex>
        )}
        {isAuth && <Button clickHandler={signOut} text='Выход' />}
      </StyledFlex>
    </StyledHeader>
  );
};

export default Header;
