import BankForm from './BankForm';
import BankModal from './BankModal';
import { useContext, useState } from 'react';
import UserContext from '../contexts/UserContext';
function CreateAccount() {
  const context = useContext(UserContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState({
    title: '',
    header: '',
    body: '',
  });
  console.log('accessing CreateAccount...');
  console.log('Context: ', context);

  const addUser = (args) => {
    const id = context.users.length;
    // const { name }
    // const email = args['email-address']
    const newUser = { id, ...args, balance: 0 };

    context.users.push(newUser);
  };
  const handler = (args) => {
    addUser(args);
    console.log('Logging from CreateAccount...');
    setModalMessage((modalMessage) => {
      return {
        ...modalMessage,
        title: 'Success!',
        header: `User ${args['email-address']} created`,
        body: ``,
      };
    });

    console.log(args);

    console.log('Context: ', context);
    setModalVisible(() => true);
  };

  return (
    <div className="main-content">
      <h1 className="content-header">Create Account</h1>
      <BankForm showName showEmail showPassword handler={handler} />
      <BankModal
        show={modalVisible}
        modalMessage={modalMessage}
        onHide={() => setModalVisible(false)}
      />
    </div>
  );
}

export default CreateAccount;
