import BankForm from './Form/BankForm';
import BankModal from './BankModal';
import { useContext, useEffect, useState } from 'react';

import UserContext from '../contexts/UserContext';
import { getCurrentUser, setActiveNavLink, userVerified } from '../utils/util';
function SignIn() {
  const context = useContext(UserContext);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalmessage, setModalMessage] = useState({
    title: '',
    header: '',
    body: '',
  });

  useEffect(() => {
    setActiveNavLink(''); // deactivate all
  }, []);

  const handler = ({ email, password }) => {
    const name = getCurrentUser(context).name;

    if (userVerified(email, password, context)) {
      setModalMessage((modalmessage) => {
        return {
          ...modalmessage,
          title: 'Success!',
          header: `Logged in as ${name}.`,
          body: ``,
        };
      });
      setModalVisible(() => true);
    } else {
      setModalMessage((modalmessage) => {
        return {
          ...modalmessage,
          title: 'Unable to Log In',
          header: '',
          body: `Please try again.`,
        };
      });
      setModalVisible(() => true);
    }
  };

  return (
    <div className="main-content">
      <h1 className="content-header">Sign In</h1>
      <BankForm
        showEmail
        showPassword
        buttonText={'Sign In'}
        handler={handler}
      />

      <BankModal
        show={modalVisible}
        modalmessage={{ ...modalmessage }}
        onHide={() => setModalVisible(false)}
      />
    </div>
  );
}

export default SignIn;
