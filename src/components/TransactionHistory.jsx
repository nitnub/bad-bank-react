import { useContext, useEffect } from 'react';
import UserContext from '../contexts/UserContext';
import intToCurrency from '../utils/intToCurrency';
import { setActiveNavLink, getUserHistory} from '../utils/util';
function TransactionHistory() {
  console.log('accessing Transaction History...');
  

  useEffect(() => {
    setActiveNavLink('nav-transaction-history');
  }, []);

  const context = useContext(UserContext);
  console.log(getUserHistory(context));
  return (
    <div className="main-content">
      <h1 className="content-header">Transaction History</h1>

      <div className="card">
        <table className="table">
          <thead className="header">
            <tr style={{textAlign: 'center'}}>
              <th scope="col">ID</th>
              <th scope="col">Transaction Date</th>
              <th scope="col">Deposits</th>
              <th scope="col">Withdrawals</th>
              <th scope="col">Balance</th>
            </tr>
          </thead>
          <tbody>
            {getUserHistory(context).map((transaction, index) => {
              return (
                <tr key={transaction.id} style={{textAlign: 'right'}}>
                  <td key={transaction.id} >{1000 + index}</td>
                  <td key={transaction.id} >{transaction.dateTime}</td>
                  <td key={transaction.id} >{transaction.deposit > 0 ? intToCurrency(transaction.deposit) : '-'}</td>
                  <td key={transaction.id} >{transaction.withdrawal > 0 ? intToCurrency(transaction.withdrawal) : '-'}</td>
                  <td key={transaction.id} >{intToCurrency(transaction.balance)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TransactionHistory;
