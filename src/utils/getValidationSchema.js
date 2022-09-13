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
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        `Password must have one each of: 
                Upper case
                Lower case
                Number (0-9)
                Special Character (#?!@$%^&*-)
                Must be at least 8 characters long`
      ); //https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
  }

  if (showEmail) {
    schema.email = Yup.string()
      .required()
      .email('Please enter a valid email address');
  }

  if (showAmount) {
    schema.amount = Yup.number()
      .required('Please enter an amount')
      .positive('Amount must be greater than zero')
      .integer('Amount must be greater than zero');
  }
  return schema;
};

export default getValidationSchema;
