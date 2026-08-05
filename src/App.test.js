import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders navigation, homepage hero, and footer', () => {
    render(<App />);

    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();

    // Name appears in both nav and hero kicker
    expect(screen.getAllByText('Precious Ajayi').length).toBeGreaterThan(0);
  });

  test('renders navigation links', () => {
    render(<App />);

    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
    ['Work', 'Writing', 'Products', 'About', 'Connect'].forEach((label) => {
      expect(screen.getByRole('button', { name: label })).toBeInTheDocument();
    });
  });
});
