import { useContext, useEffect } from 'react';
import UserContext from '../contexts/UserContext';
import intToCurrency from '../utils/intToCurrency';
import { setActiveNavLink } from '../utils/util';
function AllData() {
  const context = useContext(UserContext);

  useEffect(() => {
    setActiveNavLink('nav-all-data');
  }, []);

  return (
    <div className="main-content">
      <h1 className="content-header">All Data</h1>
      <div className="card">
        <table className="table">
          <thead className="header">
            <tr style={{ textAlign: 'center' }}>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Balance</th>
              <th scope="col">Password</th>
            </tr>
          </thead>
          <tbody>
            {context.users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{intToCurrency(user.balance)}</td>
                  <td>{user.password}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllData;
