import { useEffect, FC } from 'react';
import { observer } from 'mobx-react-lite';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom';

import UnauthPage from './UnauthPage';
import CardsList from './CardsList';
import CardPage from './CardPage';
import NavBar from './NavBar';
import * as auth from '../utils/auth';
import authStore from '../store/auth';

const App: FC = observer(() => {
  const history = useHistory();
  const token: string | null = localStorage.getItem('token');
  const loginStatus = authStore.isLoggedIn;

  const login = async (email: string, password: string) => {
    await authStore.login(email, password);
    history.push('/keyboards');
  };

  const register = (email: string, password: string) => {
    auth
      .register(email, password)
      .then(() => history.push('/signin'))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    if (token) {
      authStore.loginWithToken();
      history.push('/keyboards');
    }
  });

  return (
    <div>
      <NavBar isAuth={loginStatus} />
      <Switch>
        <Route path='/signin'>
          <UnauthPage submitHandler={login} title='Вход' buttonText='Войти' />
        </Route>
        <Route path='/signup'>
          <UnauthPage
            submitHandler={register}
            title='Регистрация'
            buttonText='Зарегистрироваться'
          />
        </Route>
        <Route exact path='/keyboards'>
          {loginStatus ? <CardsList /> : <Redirect to='/signin' />}
        </Route>
        <Route path='/keyboards/:id'>
          {loginStatus ? <CardPage /> : <Redirect to='/signin' />}
        </Route>
      </Switch>
    </div>
  );
});

export default App;
