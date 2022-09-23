import { useContext, useEffect, useState } from 'react';
import UserContext from '../contexts/UserContext';
import BankForm from './Form/BankForm';
import intToCurrency from '../utils/intToCurrency';
import BankModal from './BankModal';
import getCurrentUser from '../utils/getCurrentUser';
import { decrementUserBalance, setActiveNavLink } from '../utils/util';

function Withdraw() {

  useEffect(() => {
    setActiveNavLink('nav-withdraw')
  },[])

  const [modalVisible, setModalVisible] = useState(false);
  // set to lower case to avoid Unknown Prop Warning
  const [modalmessage, setModalMessage] = useState({
    title: '',
    header: '',
    body: '',
  });
  const context = useContext(UserContext);
  const handler = () => {
    const target = document.getElementById('amount');
    const withdrawAmount = target.value;

    const currentUser = getCurrentUser(context);

    if (currentUser.balance >= withdrawAmount) {
      decrementUserBalance(context, withdrawAmount);
      setModalMessage((modalmessage) => {
        return {
          ...modalmessage,
          title: 'Success!',
          header: `${intToCurrency(withdrawAmount)} withdrawn`,
          body: `${intToCurrency(
            withdrawAmount
          )} has been withdrawn from your account. Your remaining balance is ${intToCurrency(
            currentUser.balance
          )}.`,
        };
      });
      setModalVisible(() => true);
    } else {
      setModalMessage((modalmessage) => {
        return {
          ...modalmessage,
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
      <h1 className="content-header">Withdraw</h1>
      <BankForm showAmount showname handler={handler} transferType="Withdraw" />
      <BankModal
        show={modalVisible}
        modalmessage={modalmessage}
        onHide={() => setModalVisible(false)}
      />
    </div>
  );
}

export default Withdraw;
