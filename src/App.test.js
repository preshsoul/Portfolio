import { render, screen, within } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders navigation, homepage hero, and footer', () => {
    render(<App />);

    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();

    // Name appears in nav
    expect(screen.getByRole('link', { name: 'Precious Ajayi' })).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    render(<App />);

    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
    ['Work', 'Research', 'Writing', 'Products', 'About', 'Connect'].forEach((label) => {
      expect(within(nav).getByRole('link', { name: label })).toBeInTheDocument();
    });
  });
});
