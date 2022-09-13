import { useContext, useState } from 'react';
import UserContext from '../contexts/UserContext';
import BankForm from './Form/BankForm';
import intToCurrency from '../utils/intToCurrency';
import BankModal from './BankModal';
import getCurrentUser from '../utils/getCurrentUser';
import { updateCurrentUserBalance, getCurrentUserBalance } from '../utils/util';

function Deposit() {
  const [modalVisible, setModalVisible] = useState(false);
  // set to lower case to avoid Unknown Prop Warning
  const [modalmessage, setModalMessage] = useState({
    title: '',
    header: '',
    body: '',
  });
  const context = useContext(UserContext);

  const handler = () => {
    const entry = document.getElementById('amount');
    const depositAmount = entry.value;

    updateCurrentUserBalance(context, depositAmount);

    setModalMessage((modalmessage) => {
      return {
        ...modalmessage,
        title: 'Success!',
        header: `${intToCurrency(depositAmount)} deposited`,
        body: `${intToCurrency(
          depositAmount
        )} has been deposited into your account. Your new balance is ${intToCurrency(
          getCurrentUserBalance(context)
        )}`,
      };
    });
    setModalVisible(() => true);
  };

  return (
    <div className="main-content">
      <h1 className="content-header">Deposit</h1>
      <BankForm showAmount showname handler={handler} transferType="Deposit" />
      <BankModal
        show={modalVisible}
        modalmessage={modalmessage}
        onHide={() => setModalVisible(false)}
      />
    </div>
  );
}

export default Deposit;
