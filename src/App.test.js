import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders navigation, homepage hero, and footer', () => {
    render(<App />);

    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();

    // Name appears in nav
    expect(screen.getByRole('button', { name: 'Precious Ajayi' })).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    render(<App />);

    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
    ['Work', 'Research', 'Writing', 'About'].forEach((label) => {
      expect(screen.getByRole('button', { name: label })).toBeInTheDocument();
    });
  });
});
