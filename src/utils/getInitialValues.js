const getInitialValues = ({showName, showPassword, showEmail, showAmount}) => {
  const initialValues = {};

  if (showName) {
    initialValues['name'] = '';
    // initialValues.name = '';
  }

  if (showPassword) {
    initialValues['password'] = '';
    // initialValues.password = '';
  }

  if (showEmail) {
    initialValues['email'] = '';
    // initialValues.email = '';
  }

  if (showAmount) {
    initialValues['amount'] = '';
    // initialValues.amount = 0;
  }

  return initialValues;
};

export default getInitialValues;
