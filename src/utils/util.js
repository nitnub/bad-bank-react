import { useContext } from 'react';
import UserContext from '../contexts/UserContext';



export const testMode = (initialState) => {
  if (initialState) {

    console.log('Starting test mode...');
    initialState.currentUser = 4;
    for (let i = 0; i < 10; i++) {
      initialState.users.push({
        id: i,
        name: 'John Smith',
        email: 'jsmith@abcd.com',
        password: 'myPass123',
        balance: 1000,
      });
    }
  // }
  }
  return initialState;
 }


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
};

export const decrementUserBalance = (context, amount) => {
  updateUserBalance(context, -amount);
};

export const updateUserBalance = (context, amount) => {
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

export const setActiveNavLink = (navId) => {
  const headerIdList = [
    'nav-home',
    'nav-create-account',
    'nav-withdraw',
    'nav-deposit',
    'nav-all-data',
  ];
  const elements = headerIdList.map((id) => {
    return document.getElementById(id);
  });

  elements.forEach((element) => {
    element.id === navId
      ? element.classList.add('active')
      : element.classList.remove('active');
  });
};

export const setHeaderHeight = () => {
  let targetHeight =
      document.getElementsByClassName('content-header')[0].clientHeight;

    const headerSpan = document.getElementById('header-span');
    headerSpan.style.height = `${targetHeight}px`;
}