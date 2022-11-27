import BankForm from './Form/BankForm';
import BankModal from './BankModal';
import { useContext, useEffect, useState } from 'react';

import UserContext from '../contexts/UserContext';
import { setActiveNavLink } from '../utils/util';
function CreateAccount() {
  const context = useContext(UserContext);
  const [initialAccount, setInitialAccount] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalmessage, setModalMessage] = useState({
    title: '',
    header: '',
    body: '',
  });

  useEffect(() => {
    setActiveNavLink('nav-create-account')
  },[])
  
  const addUserToContext = (args) => {
    const id = context.users.length;
    const newUser = { id, ...args, balance: 0 };
    context.users.push(newUser);
  };

  const handler = (args) => {
    addUserToContext(args);
    setModalMessage((modalmessage) => {
      return {
        ...modalmessage,
        title: 'Success!',
        header: `User ${args.email} created`,
        body: ``,
      };
    });

    setInitialAccount(() => false);
    setModalVisible(() => true);
  };



  return (
    <div className="main-content">
      <h1 className="content-header">Create Account</h1>
      <BankForm
        showName
        showEmail
        showPassword
        buttonText={initialAccount ? 'Create Account' : 'Add Another Account'}
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

export default CreateAccount;
