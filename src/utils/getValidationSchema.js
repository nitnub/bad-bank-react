import * as Yup from 'yup';

const getValidationSchema = ({
  showName,
  showPassword,
  showEmail,
  showAmount,
}) => {
  let schema = {};

  if (showName) {
    schema.name = Yup.string()
      .required('Please enter a Name')
      .min(3, 'Name must be at least 3 characters long');
  }

  if (showPassword) {
    schema.password = Yup.string()
      .required()
      .matches(/^.{8,}$/, `Password must be at least 8 characters long`);
  }

  if (showEmail) {
    schema.email = Yup.string()
      .required()
      .email('Please enter a valid email address');
  }

  if (showAmount) {
    schema.amount = Yup.number()
      .typeError('Please enter a non-negative numeric value')
      .required('Please enter an amount')
      .positive('Amount must be greater than zero')
      .integer('Amount must be a whole number greater than zero');
  }
  return schema;
};

export default getValidationSchema;
