import React from 'react';
import {
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import Withdraw from './Withdraw';
import UserContext from '../contexts/UserContext';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

const renderDeposit = () => {
  const initialState = {
    currentUser: 1,
    users: [
      { id: 0, name: 'John Smith0', balance: 0 },
      { id: 1, name: 'John Smith1', balance: 1000 },
      { id: 2, name: 'John Smith2', balance: 1002 },
      { id: 3, name: 'John Smith3', balance: 1003 },
      { id: 4, name: 'John Smith4', balance: 1004 },
    ],
  };

  render(
    <UserContext.Provider value={initialState}>
      <Withdraw />
    </UserContext.Provider>
  );
};

test('Renders Withdraw page title correctly', () => {
  renderDeposit();
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
    'Withdraw'
  );
});

test('Withdraw updates balance amount', async () => {
  renderDeposit();
  userEvent.type(screen.getByRole('spinbutton'), '100');
  userEvent.click(screen.getByRole('button'));

  await waitFor(() => {
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
      '$900'
    );
  });
});

// test('Confirmation modal displays the Success banner', async () => {
//   renderDeposit();
//   userEvent.type(screen.getByRole('spinbutton'), '1');
//   userEvent.click(screen.getByRole('button'));

//   await waitFor(() => {
//     expect(screen.getByText('Success!!')).toBeInTheDocument();
//   });
// });

// test('Confirmation modal displays with the correct withdrawal amount', async () => {
//   renderDeposit();
//   userEvent.type(screen.getByRole('spinbutton'), '1');
//   userEvent.click(screen.getByRole('button'));

//   await waitFor(() => {
//     expect(screen.getByRole('heading', { level: 4 })).toHaveTextContent(
//       '$1 deposited'
//     );
//   });
// });

// test('Confirmation modal displays with the correct withdrawal message', async () => {
//   renderDeposit();
//   userEvent.type(screen.getByRole('spinbutton'), '1');
//   userEvent.click(screen.getByRole('button'));

//   await waitFor(() => {
//     expect(
//       screen.getByText(
//         '$1 has been deposited into your account. Your new balance is $1,001.'
//       )
//     ).toBeInTheDocument();
//   });
// });


// // Validation failure tests

// test('Validation check fails when $0 is entered', async () => {
//   renderDeposit();
//   userEvent.type(screen.getByRole('spinbutton'), '0');
//   userEvent.click(screen.getByRole('button'));


//   await waitFor(() => {
//     expect(
//       screen.getByText(
//         'Amount must be greater than zeroa'
//       )
//     ).toBeInTheDocument();
//   });
// });

// test('Validation check fails when a negative number is entered', async () => {
//   renderDeposit();
//   userEvent.type(screen.getByRole('spinbutton'), '-1');
//   userEvent.click(screen.getByRole('button'));


//   await waitFor(() => {
//     expect(
//       screen.getByText(
//         'Amount must be greater than zer'
//       )
//     ).toBeInTheDocument();
//   });
// });