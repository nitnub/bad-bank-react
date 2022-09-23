import React from 'react';
import { render, screen } from '@testing-library/react';
import Deposit from './Deposit';
import '@testing-library/jest-dom';

const depositTestData = {

}

test('Renders page title correctly', () => {
  render(<Deposit />);
  console.log(screen.getByRole('heading'))
  expect(screen.getByRole('heading')).toHaveTextContent('Deposita');
})