import React from 'react';
import { render, screen } from '@testing-library/react';
import Deposit from './Deposit';
import UserContext from '../contexts/UserContext';
import '@testing-library/jest-dom';
// import { setActiveNavLink } from '../utils/util';

// const depositTestData = {

// };

let initialState = {
  currentUser: 1,
  users: [{ id: 1, name: 'John Smith', balance: 1000 }],
};


test('Renders Deposit page title correctly', () => {
  render(
    <UserContext.Provider value={initialState}>
      <Deposit />
    </UserContext.Provider>
  );
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Deposit');
  });

test('Deposit updates balance amount ', () => {
  render(
    <UserContext.Provider value={initialState}>
      <Deposit />
    </UserContext.Provider>
  );
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Deposit');
  });
