import { useContext } from 'react';
import UserContext from '../contexts/UserContext';

// class Helper {
//   constructor() {
//     this.context = useContext(UserContext);
//   }
// }

const getCurrentUser = (context) => {
  const [currentUser] = context.users.filter(
    (user) => user.id === context.currentUser
  );
  return currentUser;
};

const getCurrentUserBalance = (context) => {
  const [currentUser] = context.users.filter(
    (user) => user.id === context.currentUser
  );
  return currentUser.balance;
};


const updateCurrentUserBalance = (context, amount) => {
  // const context = useContext(UserContext);
  const currentUser = getCurrentUser(context);
  const { id } = currentUser;
  context.users[id].balance += Number(amount);
};


export { getCurrentUser, getCurrentUserBalance, updateCurrentUserBalance }