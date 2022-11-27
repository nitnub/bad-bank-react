import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';
import '@testing-library/jest-dom';

test('Renders Home page title correctly', () => {
  render(<Home />);
  expect(screen.getByRole('heading')).toHaveTextContent('Home');
});
