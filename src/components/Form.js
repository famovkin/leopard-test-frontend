import { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import { StyledForm, StyledLabel } from './styled/Form';
import { StyledTextArea } from './styled/TextArea';
import useGetInputsValues from '../hooks/useGetInputsValues';
import Button from './Button';
import Input from './Input';
import cardsListStore from '../store/cardsList';

const Form = ({ initialValues, editedCardId }) => {
  const [previewSource, setPreviewSource] = useState('');
  const [resetFlag, setResetFlag] = useState(false);
  const { values, setValues, handleChange, resetFormValues } =
    useGetInputsValues();
  const token = localStorage.getItem('token');
  const history = useHistory();
  const imageInput = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    const cardData = {
      image: previewSource,
      ...values,
    };
    if (!previewSource) return;
    cardsListStore.addCard(cardData, token).then(() => {
      resetForm();
    });
  };

  const handleEdit = async e => {
    e.preventDefault();
    const cardData = {
      ...values,
      image: previewSource,
    };
    if (!previewSource) delete cardData.image;
    cardsListStore.editCard(editedCardId, cardData, token).then(() => {
      resetFormValues();
      history.push('/');
    });
  };

  const onFileChange = e => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const previewFile = file => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => setPreviewSource(reader.result);
    reader.onerror = (e) => console.log(e);
  };

  const resetForm = () => {
    resetFormValues();
    imageInput.current.value = '';
    setPreviewSource('');
    setResetFlag(true);
  };

  useEffect(() => initialValues && setValues(initialValues),[initialValues, setValues]);

  return (
    <StyledForm
      style={{ 'display': 'flex', 'flexDirection': 'column' }}
      onSubmit={editedCardId ? handleEdit : handleSubmit}
    >
      <Input
        name='date'
        type='date'
        value={values['date'] || ''}
        onChange={handleChange}
        required
      />

      <Input
        name='model'
        value={values['model'] || ''}
        onChange={handleChange}
        minLength={5}
        maxLength={50}
        required
        placeholder='Название модели'
      />

      <StyledTextArea
        type='text'
        name='description'
        value={values['description'] || ''}
        onChange={handleChange}
        required
        placeholder='Описание'
      />

      <select
        name='switchType'
        value={values['switchType'] || ''}
        onChange={handleChange}
        required
      >
        <option value=''>Выберите тип свичей</option>
        <option>Red Switch</option>
        <option>Blue Switch</option>
        <option>Brown Switch</option>
        <option>Black Switch</option>
      </select>

      <Input
        name='price'
        value={values['price'] || ''}
        onChange={handleChange}
        type='number'
        required
        margin='0 0 10px'
        min={1000}
        placeholder='Цена'
      />

      {previewSource
        ? <img src={previewSource} alt='Превью картинки' />
        : initialValues && !resetFlag && setPreviewSource(initialValues?.image)}

        <StyledLabel htmlFor='file-upload'>Выберите файл</StyledLabel>
        <input
          id='file-upload'
          name='keyboardImage'
          type='file'
          onChange={onFileChange}
          ref={imageInput}
          margin='0 0 20px'
          required={editedCardId ? false : true}
        />

      <Button
        text={editedCardId ? 'Сохранить' : 'Добавить'}
        margin='0 0 5px'
        fontSize='16px'
        padding='8px'
      />
      <Button
        text='Сбросить'
        onClick={resetForm}
        type='button'
        margin='0 0 5px'
        fontSize='16px'
        padding='8px'
      />
    </StyledForm>
  );
};

export default Form;
