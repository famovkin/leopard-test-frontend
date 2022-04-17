import { useState, useCallback } from 'react';

export const useGetInputsValues = () => {
  const [values, setValues] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const resetFormValues = useCallback(
    (newValues = {}) => setValues(newValues), [setValues]);

  return {
    values,
    setValues,
    handleChange,
    resetFormValues,
  };
};

export default useGetInputsValues;
