import { useContext, useEffect } from 'react';
import UserContext from '../contexts/UserContext';
import getCurrentUser from '../utils/getCurrentUser';
import intToCurrency from '../utils/intToCurrency';
import { setActiveNavLink, getUserHistory} from '../utils/util';
function TransactionHistory() {
  const context = useContext(UserContext);

  useEffect(() => {
    setActiveNavLink('nav-transaction-history');
  }, []);

  return (
    <div className="main-content">
      <h1 className="content-header">Statement for {getCurrentUser(context).name}</h1>

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
                <tr key={index} style={{textAlign: 'right'}}>
                  <td>{1000 + index}</td>
                  <td>{transaction.dateTime}</td>
                  <td>{transaction.deposit > 0 ? intToCurrency(transaction.deposit) : '-'}</td>
                  <td>{transaction.withdrawal > 0 ? intToCurrency(transaction.withdrawal) : '-'}</td>
                  <td>{intToCurrency(transaction.balance)}</td>
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
