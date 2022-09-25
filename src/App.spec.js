import { render, screen } from '@testing-library/react';
import App from './App';

describe('renders home screen', () => {

  test('renders nav bar', () => {
    render(<App />);
    // const homeButton = screen.getByText('Bad Bank');
    const navBar = screen.getByRole('navigation')
    expect(navBar).toBeInTheDocument();
  });

})

