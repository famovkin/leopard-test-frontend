import { makeAutoObservable } from 'mobx';

import { api } from '../utils/api';

class CardsListStore {
  cardList = [];

  constructor() {
    makeAutoObservable(this);
  }

  addCard(formData, token) {
    api
      .addKeyboard(formData, token)
      .then(addedCard => this.cardList.push(addedCard));
  }

  removeCard(cardId, token) {
    api
      .removeKeyboard(cardId, token)
      .then(() => this.cardList = this.cardList.filter(card => card._id !== cardId));
  }

  editCard(cardId, editedData, token) {
    const editedIndexCard = this.cardList.findIndex(card => card._id === cardId);
    api
      .editKeyboard(cardId, editedData, token)
      .then(() => {
        this.cardList[editedIndexCard] = {...editedData}
        console.log('Done');
      });
      
  }

  fetchCards(token) {
    api.getKeyboards(token).then(data => this.cardList = data);
  }
}

export default new CardsListStore();
