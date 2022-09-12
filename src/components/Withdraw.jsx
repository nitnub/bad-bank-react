import { useContext, useState } from 'react';
import UserContext from '../contexts/UserContext';
import BankForm from './BankForm';
import intToCurrency from '../utils/intToCurrency';
import BankModal from './BankModal';
function Withdraw() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState({
    title: '',
    header: '',
    body: '',
  });
  const context = useContext(UserContext);

  const handler = () => {
    const entry = document.getElementById('amount');
    const amount = entry.value;
    const [currentUser] = context.users.filter(
      (user) => user.id === context.currentUser
    );

    if (currentUser.balance >= amount) {
      context.users[context.currentUser].balance -= amount;
      setModalMessage((modalMessage) => {
        return {
          ...modalMessage,
          title: 'Success!',
          header: `${intToCurrency(amount)} withdrawn`,
          body: `You've withdrawn ${intToCurrency(
            amount
          )} from your account. Your remaining balance is ${intToCurrency(
            currentUser.balance
          )}`,
        };
      });
      setModalVisible(() => true);
    } else {
      setModalMessage((modalMessage) => {
        return {
          ...modalMessage,
          title: 'Error!',
          header: `No funds withdrawn`,
          body: `Transaction failed due to insufficient funds. Please enter an amount that is less than or equal to your remaining balance of ${intToCurrency(
            currentUser.balance
          )}`,
        };
      });
      setModalVisible(() => true);
    }
  };

  return (
    <div className="main-content">
      <BankModal
        show={modalVisible}
        modalMessage={modalMessage}
        onHide={() => setModalVisible(false)}
      />

      <h1 className="content-header">Withdraw</h1>
      <BankForm showAmount showname handler={handler} />
    </div>
  );
}

export default Withdraw;
