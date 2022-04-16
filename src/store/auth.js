import { makeAutoObservable } from 'mobx';

import * as auth from '../utils/auth';

class Auth {
  isLoggedIn = false;

  constructor() {
    makeAutoObservable(this);
  }

  login(email, password) {
    auth
      .authorize(email, password)
      .then((data) => {
        if (data.token) {
          this.isLoggedIn = true;
        }
        console.log('from store', this.isLoggedIn);
      })
      .catch((e) => console.log(e));
  }

  loginWithToken() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }
}

export default new Auth();
