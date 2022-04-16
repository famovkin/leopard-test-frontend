class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkServerResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(res);
  }

  getKeyboards(token) {
    return fetch(`${this._baseUrl}/keyboards`, {
      headers: { ...this._headers, Authorization: `Bearer ${token}` },
    }).then((res) => this._checkServerResponse(res));
  }

  getKeyboard(id, token) {
    return fetch(`${this._baseUrl}/keyboards/${id}`, {
      headers: { ...this._headers, Authorization: `Bearer ${token}` },
    }).then((res) => this._checkServerResponse(res));
  }

  addKeyboard(data, token) {
    return fetch(`${this._baseUrl}/keyboards`, {
      method: 'POST',
      headers: { ...this._headers, Authorization: `Bearer ${token}` },
      body: JSON.stringify(data),
    }).then((res) => this._checkServerResponse(res));
  }

  removeKeyboard(cardId, token) {
    return fetch(`${this._baseUrl}/keyboards/${cardId}`, {
      method: 'DELETE',
      headers: { ...this._headers, Authorization: `Bearer ${token}` },
    }).then((res) => this._checkServerResponse(res));
  }

  editKeyboard(id, data, token) {
    return fetch(`${this._baseUrl}/keyboards/${id}`, {
      method: 'PATCH',
      headers: { ...this._headers, Authorization: `Bearer ${token}` },
      body: JSON.stringify(data),
    }).then((res) => this._checkServerResponse(res));
  }
}

export const api = new Api({
  baseUrl: 'https://leopard-test-api.herokuapp.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});
