import { useContext, useEffect, useState } from 'react';
import UserContext from '../contexts/UserContext';
import BankForm from './Form/BankForm';
import BankModal from './BankModal';
import axios from 'axios';

import {
  getUserBalance,
  incrementUserBalance,
  intToCurrency,
  setActiveNavLink,
  updateUserHistory,
} from '../utils/util';

function Deposit() {
  useEffect(() => {
    setActiveNavLink('nav-deposit');
  }, []);

  const [modalVisible, setModalVisible] = useState(false);
  // set to lower case to avoid Unknown Prop Warning
  const [modalmessage, setModalMessage] = useState({
    title: '',
    header: '',
    body: '',
  });
  const context = useContext(UserContext);

  const handler = async () => {
    const target = document.getElementById('amount');
    const depositAmount = target.value;
    incrementUserBalance(context, depositAmount);

    const URL = 'http://localhost:4000/api/deposit';
    const email = 'jsmith1@gmail.com';
  
    const request = {
      email,
      amount: depositAmount,
    };
    axios
      .post(URL, request)
      .then((res) => {
      const updatedBalance = res.data.data.balance 
        // console.log();

        setModalMessage((modalmessage) => {
          return {
            ...modalmessage,
            title: 'Success!',
            header: `${intToCurrency(depositAmount)} deposited`,
            body: `${intToCurrency(
              depositAmount
            )} has been deposited into your account. Your new balance is ${intToCurrency(
              updatedBalance
            )}.`,
          };
        });
        setModalVisible(() => true);
        updateUserHistory('deposit', depositAmount, context);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div id="main-content" className="main-content">
      <h1 className="content-header">Deposit</h1>

      <BankForm
        showAmount
        showname
        buttonText={'Deposit'}
        handler={handler}
        transferType="Deposit"
      />
      <BankModal
        show={modalVisible}
        modalmessage={modalmessage}
        onHide={() => setModalVisible(false)}
      />
    </div>
  );
}

export default Deposit;
