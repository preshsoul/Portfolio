import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navigation from './Navigation';

const renderWithRouter = (path = '/') =>
  render(
    <MemoryRouter initialEntries={[path]} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Navigation />
    </MemoryRouter>
  );

describe('Navigation Component', () => {
  test('renders navigation landmark', () => {
    renderWithRouter();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  test('renders brand name', () => {
    renderWithRouter();
    expect(screen.getByRole('link', { name: 'Precious Ajayi' })).toBeInTheDocument();
  });

  test('renders all nav links', () => {
    renderWithRouter();
    ['Work', 'Research', 'Writing', 'Products', 'About', 'Connect'].forEach((label) => {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument();
    });
  });
});
