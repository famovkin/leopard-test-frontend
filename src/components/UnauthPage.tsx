import { useState, FormEvent, FC } from 'react';

import { StyledUnauthPageContainer } from './styled/UnauthPageContainer';
import Button from './Button';
import Input from './Input';
import Title from './Title';
import { UnauthPageProps } from '../types/types';

const UnauthPage: FC<UnauthPageProps> = ({
  submitHandler,
  title,
  buttonText,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    submitHandler(email, password);
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setEmail(e.target.value);
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setPassword(e.target.value);

  return (
    <StyledUnauthPageContainer>
      <Title text={title} />
      <form
        style={{ 'display': 'flex', 'flexDirection': 'column' }}
        onSubmit={onSubmit}
      >
        <Input
          value={email || ''}
          onChange={onChangeEmail}
          type='email'
          placeholder='Почта'
          margin='0 0 22px'
          required
        />
        <Input
          value={password || ''}
          onChange={onChangePassword}
          type='password'
          placeholder='Пароль'
          margin='0 0 22px'
          required
        />
        <Button text={buttonText} padding='10px' fontSize='16px' />
      </form>
    </StyledUnauthPageContainer>
  );
};

export default UnauthPage;
