export const BASE_URL = "https://leopard-test-api.herokuapp.com/api";

const checkServerResponse = res => {
  if (res.ok) return res.json();
  
  return Promise.reject(res);
};

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  }).then(res => checkServerResponse(res));
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then(res => checkServerResponse(res))
    .then(data => {
      if (data.token) {
        localStorage.setItem("token", data.token);
        return data;
      }
    });
};
