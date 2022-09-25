export const testModeState = () => {
  console.log("Starting 'test mode' with 5 starter customers...");
  
  let initialState = {
    currentUser: 0,
    users: [],
  };

  initialState.currentUser = 0;
  for (let i = 0; i < 5; i++) {
    const balance = Math.floor(Math.random() * 10000);
    const dateTime = getTimeStamp();
    initialState.users.push({
      id: i,
      name: `John ${String.fromCharCode(i + 65)}. Smith`,
      email: `jsmith${i}@abcd.com`,
      password: `AAbb!!${i}${i}`,
      balance,
      history: [{ dateTime, balance }],
    });
  }
  return initialState;
};

export const getCurrentUser = (context) => {
  const [currentUser] = context.users.filter(
    (user) => user.id === context.currentUser
  );
  return currentUser;
};

export const setCurrentUser = (context, int) => {
  context.currentUser = int;
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

export const getUserHistory = (context) => {
  return getCurrentUser(context).history;
};

export const intToCurrency = (int) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return formatter.format(int);
};

export const setActiveNavLink = (navId) => {
  const headerIdList = [
    'nav-home',
    'nav-create-account',
    'nav-withdraw',
    'nav-deposit',
    'nav-transaction-history',
    'nav-all-data',
  ];
  const elements = headerIdList.map((id) => {
    return document.getElementById(id);
  });

  elements.forEach((element) => {
    element?.id === navId
      ? element?.classList.add('active')
      : element?.classList.remove('active');
  });
};

export const userVerified = (userEmail, userPassword, context) => {
  let matchingUser = false;
  context.users.forEach((customer) => {
    if (customer.email === userEmail && customer.password === userPassword) {
      matchingUser = true;
      context.currentUser = customer.id;
    }
  });
  return matchingUser;
};

export const setHeaderHeight = () => {
  let targetHeight =
    document.getElementsByClassName('content-header')[0].clientHeight;

  const headerSpan = document.getElementById('header-span');
  headerSpan.style.height = `${targetHeight}px`;
};

export const getTimeStamp = () => {
  let date = new Date();
  return date.toLocaleString();
};

export const updateUserHistory = (transferType, amount, context) => {
  const contextCopy = context;
  const tempUser = getCurrentUser(context);
  const index = tempUser.id;
  const newEntry = {
    dateTime: getTimeStamp(),
    [transferType]: amount,
    balance: tempUser.balance,
  };
  tempUser.history.push(newEntry);
  contextCopy.users.splice(index, 1, tempUser);
  context = contextCopy;
};
