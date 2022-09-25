import { render, screen } from '@testing-library/react';
import App from './App';

describe('renders nav bar', () => {

  test('renders Bad Bank (home) button', () => {
    render(<App />);
    const homeButton = screen.getByText('Bad Bank');
    expect(homeButton).toBeInTheDocument();
  });

})

