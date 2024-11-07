import { useState } from "react";

const useForm = (initialValues, validate, onSubmit) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const validateForm = () => {
    if (validate) {
      const validationErrors = validate(values);
      setErrors(validationErrors);
      return validationErrors;
    }
    return {};
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsSubmitting(true);

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      onSubmit(values);
    }

    setIsSubmitting(false);
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    resetForm,
    isSubmitting,
  };
};

export default useForm;
