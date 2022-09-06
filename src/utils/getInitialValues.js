const getInitialValues = ({showName, showPassword, showEmail, showAmount}) => {
  const initialValues = {};

  if (showName) {
    initialValues['name'] = ' ';
  }

  if (showPassword) {
    initialValues['password'] = ' ';
  }

  if (showEmail) {
    initialValues['email'] = ' ';
  }

  if (showAmount) {
    initialValues['amount'] = ' ';
  }

  return initialValues;
};

export default getInitialValues;
