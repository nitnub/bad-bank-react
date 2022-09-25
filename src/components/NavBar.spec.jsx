import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import NavBar from './NavBar';

describe('renders nav bar', () => {
  test('renders all nav bar buttons', () => {
    render(<NavBar />);

    const badBank = screen.getByText('Bad Bank');
    const createAccount = screen.getByText('Create Account');
    const withdraw = screen.getByText('Withdraw');
    const deposit = screen.getByText('Deposit');
    const transactionHistory = screen.getByText('Transaction History');
    const allData = screen.getByText('All Data');
    const changeUser = screen.getByText('Change User');

    expect(badBank).toBeInTheDocument();
    expect(createAccount).toBeInTheDocument();
    expect(withdraw).toBeInTheDocument();
    expect(deposit).toBeInTheDocument();
    expect(transactionHistory).toBeInTheDocument();
    expect(allData).toBeInTheDocument();
    expect(changeUser).toBeInTheDocument();
  });
});

describe('displays nav bar tooltips', () => {
  test('renders Bad Bank nav tooltip', async () => {
    render(<NavBar />);
    const badBank = screen.getByText('Bad Bank');

    userEvent.hover(badBank);
    await waitFor(() => {
      expect(screen.getByText('Return to home screen')).toBeInTheDocument();
    });
  });

  test('renders Create Account nav tooltip', async () => {
    render(<NavBar />);
    const createAccount = screen.getByText('Create Account');

    userEvent.hover(createAccount);
    await waitFor(() => {
      expect(screen.getByText('Create a new account')).toBeInTheDocument();
    });
  });

  test('renders Withdraw nav tooltip', async () => {
    render(<NavBar />);
    const withdraw = screen.getByText('Withdraw');

    userEvent.hover(withdraw);
    await waitFor(() => {
      expect(
        screen.getByText('Withdraw money from my account')
      ).toBeInTheDocument();
    });
  });

  test('renders Deposit nav tooltip', async () => {
    render(<NavBar />);
    const deposit = screen.getByText('Deposit');

    userEvent.hover(deposit);
    await waitFor(() => {
      expect(screen.getByText('Add money to my account')).toBeInTheDocument();
    });
  });

  test('renders Transition History nav tooltip', async () => {
    render(<NavBar />);
    const transactionHistory = screen.getByText('Transaction History');

    userEvent.hover(transactionHistory);
    await waitFor(() => {
      expect(
        screen.getByText('Check my transaction history')
      ).toBeInTheDocument();
    });
  });

  test('renders All Data nav tooltip', async () => {
    render(<NavBar />);
    const allData = screen.getByText('All Data');

    userEvent.hover(allData);
    await waitFor(() => {
      expect(screen.getByText('View all customer data')).toBeInTheDocument();
    });
  });
});