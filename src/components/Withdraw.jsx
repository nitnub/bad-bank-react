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


    if (currentUser.balance >= amount) {
      console.log(context.users[context.currentUser].balance);
      context.users[context.currentUser].balance -= amount;
      alert(`You've withdrawn ${intToCurrency(amount)} from your account. Your remaining balance is ${intToCurrency(currentUser.balance)}`)
    } else {
      alert(
        `Transaction failed due to insufficient funds. Please enter an amount that is less than or equal to your remaining balance of ${intToCurrency(
          currentUser.balance
        )}`
      );
    }

  };


  return (
    <div className="main-content">
      <h1 className="content-header">Withdraw</h1>
      <BankForm 
        showAmount
        showname
        handler={handler}
      />
    </div>
  );
}

export default Withdraw;
