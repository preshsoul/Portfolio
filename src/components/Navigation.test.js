import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navigation from './Navigation';

const renderWithRouter = (path = '/') =>
  render(
    <MemoryRouter initialEntries={[path]}>
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
    expect(screen.getByRole('button', { name: 'Precious Ajayi' })).toBeInTheDocument();
  });

  test('renders all nav links', () => {
    renderWithRouter();
    ['Work', 'Research', 'Writing', 'About'].forEach((label) => {
      expect(screen.getByRole('button', { name: label })).toBeInTheDocument();
    });
  });
});
