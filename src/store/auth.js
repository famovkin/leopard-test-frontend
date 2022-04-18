import { makeAutoObservable } from 'mobx';

import * as auth from '../utils/auth';

class Auth {
  isLoggedIn = false;
  isLoading = false;
  error = false;

  constructor() {
    makeAutoObservable(this);
  }

  login(email, password) {
    this.isLoading = true;
    auth
      .authorize(email, password)
      .then((data) => {
        if (data.token) {
          this.isLoggedIn = true;
          this.error = false;
        }
      })
      .catch(e => {
        console.log(e);
        this.error = true;
      })
      .finally(() => {
        this.isLoading = false
        setTimeout(() => this.error = false, 2000);
      });
  }

  loginWithToken() {
    this.isLoggedIn = true;
  }

  createError() {
    this.error = true;
  }

  logout() {
    this.isLoggedIn = false;
  }
}

export default new Auth();
