import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from './Footer';

const renderWithRouter = () =>
  render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  );

describe('Footer Component', () => {
  test('renders footer with proper semantic role', () => {
    renderWithRouter();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  test('renders brand name', () => {
    renderWithRouter();
    expect(screen.getByText('Precious Ajayi')).toBeInTheDocument();
  });

  test('renders external social links', () => {
    renderWithRouter();

    const substack = screen.getByRole('link', { name: 'Substack' });
    expect(substack).toHaveAttribute('href', 'https://thermopresh.substack.com');

    const linkedin = screen.getByRole('link', { name: 'LinkedIn' });
    expect(linkedin).toHaveAttribute('href', 'https://www.linkedin.com/in/precious-ajayi-soul');
  });
});
