import { useEffect, FC } from 'react';
import { observer } from 'mobx-react-lite';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom';

import GlobalStyles from './styled/Global';
import { StyledContainer } from './styled/Container';
import UnauthPage from './UnauthPage';
import CardPage from './CardPage';
import Header from './Header';
import CardsList from './CardsList';
import Preloader from './Preloader';
import ErrorPopup from "./ErrorPopup";
import * as auth from '../utils/auth';
import authStore from '../store/auth';
import cardsListStore from '../store/cardsList';

const App: FC = observer(() => {
  const history = useHistory();
  const token: string | null = localStorage.getItem('token');
  const loginStatus = authStore.isLoggedIn;
  const loadingStatus = authStore.isLoading || cardsListStore.isLoading;
  const errorStatus = authStore.error || cardsListStore.error;

  const login = async (email: string, password: string) => {
    await authStore.login(email, password);
    history.push('/keyboards');
  };

  const register = (email: string, password: string) => {
    cardsListStore.startLoading();
    auth
      .register(email, password)
      .then(() => history.push('/signin'))
      .catch(e => console.log(e))
      .finally(() => cardsListStore.finishLoading());
  };

  useEffect(() => {
    if (token) {
      authStore.loginWithToken();
      history.push('/keyboards');
    }
  }, [token, history]);

  return (
    <StyledContainer>
      {loadingStatus && <Preloader />}
      <GlobalStyles />
      <Header isAuth={loginStatus} />
      <ErrorPopup isError={errorStatus}/>
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
    </StyledContainer>
  );
});

export default App;
