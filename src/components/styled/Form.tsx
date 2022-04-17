import styled from 'styled-components';

export const StyledForm = styled.form`
  background-color: #fff;
  padding: 20px;
  max-width: 500px;
  margin: 0 auto 30px;
  font-size: 16px;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  position: relative;

  input[type='file'] {
    position: absolute;
    bottom: 28%;
    left: 50%;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
  }

  img {
    margin-bottom: 10px;
  }

  select {
    outline: none;
    border: none;
    font-size: 16px;
    cursor: pointer;
  }

  textarea,
  select {
    border-bottom: 1px solid #000;
  }
`;

export const StyledLabel = styled.label`
  border-radius: 10px;
  background-color: #000;
  color: #fff;
  padding: 8px;
  text-align: center;
  margin-bottom: 5px;
  cursor: pointer;
  transition: transform 100ms ease-in;

  &:hover {
    transform: scale(1.01);
  }
`;
