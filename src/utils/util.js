import { useContext } from 'react';
import UserContext from '../contexts/UserContext';

// class Helper {
//   constructor() {
//     this.context = useContext(UserContext);
//   }
// }

export const getCurrentUser = (context) => {
  const [currentUser] = context.users.filter(
    (user) => user.id === context.currentUser
  );
  return currentUser;
};

export const getUserBalance = (context) => {
  const [currentUser] = context.users.filter(
    (user) => user.id === context.currentUser
  );
  return currentUser.balance;
};


export const incrementUserBalance = (context, amount) => {
  updateUserBalance(context, amount);
}

export const decrementUserBalance = (context, amount) => {
  updateUserBalance(context, -amount);
}




export const updateUserBalance = (context, amount) => {
  // const context = useContext(UserContext);
  const currentUser = getCurrentUser(context);
  const { id } = currentUser;
  context.users[id].balance += Number(amount);
};

export const intToCurrency = (int) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumSignificantDigits: 10,
  });
  return formatter.format(int);
};

// export { getCurrentUser, getCurrentUserBalance, updateCurrentUserBalance }
