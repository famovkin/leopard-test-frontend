import { FC } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import authStore from '../store/auth';
import { NavBarProps } from "../types/types";

const NavBar: FC<NavBarProps> = ({ isAuth }) => {
  const history = useHistory();

  const signOut = (): void => {
    authStore.logout();
    localStorage.removeItem('token');
    history.push('/signin');
  };

  return (
    <>
      {!isAuth && (
        <>
          <nav>
            <NavLink to='/signup'>Регистрация</NavLink>
            <NavLink to='/signin'>Логин</NavLink>
          </nav>
        </>
      )}
      {isAuth && <button onClick={signOut}>Выход</button>}
    </>
  );
};

export default NavBar;
