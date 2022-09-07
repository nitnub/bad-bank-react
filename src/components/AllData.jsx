import { useContext } from 'react';
import UserContext from '../contexts/UserContext';
import intToCurrency from '../utils/intToCurrency';
function AllData() {
  console.log('accessing AllData...');
  // return (
  //   <div className="main-content">
  //     <h1 className="content-header">All Data</h1>

  const ctx = useContext(UserContext);
  console.log(ctx.users);
  return (
    <div className="main-content">
      <div className="table-container table-responsive-md">
        <div className="card">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Balance</th>
                <th scope="col">Password</th>
              </tr>
            </thead>
            <tbody>
              {ctx.users.map((user) => {
                return (
                  <tr>
                    {/* <th scope="row">1</th> */}
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
    </div>
    // );

    //  </div>
  );
}

export default AllData;
