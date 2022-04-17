import { makeAutoObservable } from 'mobx';

import { api } from '../utils/api';

class CardsListStore {
  cardList = [];
  isLoading = false;
  error = false;

  constructor() {
    makeAutoObservable(this);
  }

  addCard(formData, token) {
    this.isLoading = true;
    return api
      .addKeyboard(formData, token)
      .then(addedCard => this.cardList.push(addedCard))
      .catch(e => {
        console.log(e);
        this.error = true;
      })
      .finally(() => {
        this.isLoading = false
        setTimeout(() => this.error = false, 2000);
      });
  }

  removeCard(cardId, token) {
    this.isLoading = true;
    api
      .removeKeyboard(cardId, token)
      .then(
        () =>
          (this.cardList = this.cardList.filter(card => card._id !== cardId))
      )
      .catch(e => {
        console.log(e);
        this.error = true;
      })
      .finally(() => {
        this.isLoading = false
        setTimeout(() => this.error = false, 2000);
      });
  }

  editCard(cardId, editedData, token) {
    this.isLoading = true;
    const editedIndexCard = this.cardList.findIndex(
      card => card._id === cardId
    );
    return api
      .editKeyboard(cardId, editedData, token)
      .then(() => this.cardList[editedIndexCard] = { ...editedData })
      .catch(e => {
        console.log(e);
        this.error = true;
      })
      .finally(() => {
        this.isLoading = false
        setTimeout(() => this.error = false, 2000);
      });
  }

  fetchCards(token) {
    this.isLoading = true;
    api
      .getKeyboards(token)
      .then(data => this.cardList = data)
      .catch(e => {
        console.log(e);
        this.error = true;
      })
      .finally(() => {
        this.isLoading = false
        setTimeout(() => this.error = false, 2000);
      });
  }
  
  startLoading() {
    this.isLoading = true;
  }

  finishLoading() {
    this.isLoading = false;
  }
}

export default new CardsListStore();
