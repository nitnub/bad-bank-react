import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
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
  expect(screen.getByRole('heading', { level: 1 }).textContent).toBe(
    'Withdraw'
  );
});

test('Withdraw updates balance amount', async () => {
  renderDeposit();
  userEvent.type(screen.getByRole('textbox'), '100');
  userEvent.click(screen.getByRole('button'));

  await waitFor(() => {
    expect(screen.getByRole('heading', { level: 3 }).textContent).toBe('$900');
  });
});

test('Confirmation modal displays the Success banner', async () => {
  renderDeposit();
  userEvent.type(screen.getByRole('textbox'), '1');
  userEvent.click(screen.getByRole('button'));

  await waitFor(() => {
    expect(screen.getByText('Success!')).toBeInTheDocument();
  });
});

test('Confirmation modal displays with the correct withdrawal amount', async () => {
  renderDeposit();
  userEvent.type(screen.getByRole('textbox'), '1');
  userEvent.click(screen.getByRole('button'));

  await waitFor(() => {
    expect(screen.getByRole('heading', { level: 4 }).textContent).toBe(
      '$1 withdrawn'
    );
  });
});

test('Confirmation modal displays with the correct withdrawal message', async () => {
  renderDeposit();
  userEvent.type(screen.getByRole('textbox'), '1');
  userEvent.click(screen.getByRole('button'));

  await waitFor(() => {
    expect(
      screen.getByText(
        '$1 has been withdrawn from your account. Your remaining balance is $999.'
      )
    ).toBeInTheDocument();
  });
});

// // Validation tests
describe('Withdraw validation', () => {
  test('fires when $0 is entered', async () => {
    renderDeposit();
    userEvent.type(screen.getByRole('textbox'), '0');
    userEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(
        screen.getByText('Amount must be greater than zero')
      ).toBeInTheDocument();
    });
  });

  test('fires when a negative number is entered', async () => {
    renderDeposit();
    userEvent.type(screen.getByRole('textbox'), '-1');
    userEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(
        screen.getByText('Amount must be greater than zero')
      ).toBeInTheDocument();
    });
  });

  test('fires when a non-numeric value is entered', async () => {
    renderDeposit();
    userEvent.type(screen.getByRole('textbox'), 'abc');
    userEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(
        screen.getByText('Please enter a non-negative numeric value')
      ).toBeInTheDocument();
    });
  });


});
