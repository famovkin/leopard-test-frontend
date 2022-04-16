import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

import useGetInputsValues from '../hooks/useGetInputsValues';
import cardsListStore from '../store/cardsList';

const Form = ({ initialValues, editedCardId }) => {
  const [previewSource, setPreviewSource] = useState('');
  const { values, setValues, handleChange, resetForm } = useGetInputsValues();
  const token = localStorage.getItem('token');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const cardData = {
      image: previewSource,
      ...values,
    };
    if (!previewSource) return;
    cardsListStore.addCard(cardData, token);
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    const cardData = {
      ...values,
      image: previewSource,
    };
    if (!previewSource) delete cardData.image;
    cardsListStore.editCard(editedCardId, cardData, token);
    // history.push('/keyboards');
  };

  const onFileChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => setPreviewSource(reader.result);
  };

  useEffect(
    () => initialValues && setValues(initialValues),
    [initialValues, setValues]
  );

  return (
    <form
      style={{ 'display': 'flex', 'flexDirection': 'column' }}
      onSubmit={editedCardId ? handleEdit : handleSubmit}
    >
      <label htmlFor='date'>Дата</label>
      <input
        name='date'
        type='date'
        value={values['date'] || ''}
        onChange={handleChange}
        required
      />

      <label htmlFor='model'>Название</label>
      <input
        name='model'
        value={values['model'] || ''}
        onChange={handleChange}
        minLength={5}
        required
      />

      <label htmlFor='description'>Описание</label>
      <textarea
        name='description'
        value={values['description'] || ''}
        onChange={handleChange}
        minLength={10}
        required
      ></textarea>

      <label htmlFor='keyboardImage'>Картинка</label>
      <input name='keyboardImage' type='file' onChange={onFileChange} />
      {previewSource && <img src={previewSource} alt='Превью' />}

      <label htmlFor='switch'>Свичи</label>
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

      <label htmlFor='price'>Цена</label>
      <input
        name='price'
        value={values['price'] || ''}
        onChange={handleChange}
        type='number'
        required
      />

      <button>{editedCardId ? 'Сохранить' : 'Добавить'}</button>
      <button onClick={resetForm} type='button'>
        Сбросить
      </button>
    </form>
  );
};

export default Form;
