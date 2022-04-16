import { useState, FormEvent, FC } from 'react';

import { UnauthPageProps } from "../types/types";

const UnauthPage: FC<UnauthPageProps> = ({ submitHandler, title, buttonText }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    submitHandler(email, password);
  };

  return (
    <>
      <h1>{title}</h1>
      <form onSubmit={onSubmit}>
        <input
          value={email || ''}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
          placeholder='Почта'
        />
        <input
          value={password || ''}
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          placeholder='Пароль'
        />
        <button>{buttonText}</button>
      </form>
    </>
  );
};

export default UnauthPage;
