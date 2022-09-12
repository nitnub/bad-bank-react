import { useContext } from 'react';
import UserContext from '../contexts/UserContext';
import BankForm from './BankForm';
import intToCurrency from '../utils/intToCurrency';
function Withdraw() {
 
  const context = useContext(UserContext);
  const handler = () => {
    const entry = document.getElementById('amount');
  
    const amount = entry.value;
    const [currentUser] = context.users.filter(
      (user) => user.id === context.currentUser
    );


    context.users[context.currentUser].balance += Number(amount);

    alert(
      `Transaction complete. ${intToCurrency(
        // currentUser.balance
        amount
      )} has been deposited into your account.`
    );
  };



  return (
    <div className="main-content">
          <h1 className="content-header">Deposit</h1>
      <BankForm 
        showAmount
        showname
        handler={handler}
        transferType="deposit"
      />
    </div>
  );
}

export default Withdraw;
