import BankForm from './Form/BankForm';
import BankModal from './BankModal';
import { useContext, useEffect, useState } from 'react';

import UserContext from '../contexts/UserContext';
import { setActiveNavLink, userVerified } from '../utils/util';
function SignIn() {
  const context = useContext(UserContext);
  const [initialAccount, setInitialAccount] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalmessage, setModalMessage] = useState({
    title: '',
    header: '',
    body: '',
  });

  useEffect(() => {
    setActiveNavLink('nav-create-account');
  }, []);

  console.log('accessing CreateAccount...');
  console.log('Context: ', context);

  const addUser = (args) => {
    const id = context.users.length;
    // const { name }
    // const email = args['email-address']
    const newUser = { id, ...args, balance: 0 };

    context.users.push(newUser);
  };
  const handler = ({ email, password }) => {


    // console.log('args', args);
    console.log('context', context);

    console.log('Logging from Sign In...');

    if (userVerified(email, password, context)) {
      setModalMessage((modalmessage) => {
        return {
          ...modalmessage,
          title: 'Success!',
          header: `User ${email} created`,
          body: ``,
        };
      });

      // console.log(args);

      console.log('Context: ', context);
      setInitialAccount(() => false);
      setModalVisible(() => true);
    } else {
      setModalMessage((modalmessage) => {
        return {
          ...modalmessage,
          title: 'Unable to Log In',
          header: `HEADER User ${email} created`,
          body: `Please try again`,
        };
      });

      // console.log(args);

      console.log('Context: ', context);
      setInitialAccount(() => false);
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
