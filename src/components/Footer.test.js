import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from './Footer';

const renderWithRouter = () =>
  render(
    <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Footer />
    </MemoryRouter>
  );

describe('Footer Component', () => {
  test('renders footer with proper semantic role', () => {
    renderWithRouter();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  test('renders copyright with name and location', () => {
    renderWithRouter();
    expect(screen.getByText(/Precious Ajayi/)).toBeInTheDocument();
    expect(screen.getByText(/Lagos, Nigeria/)).toBeInTheDocument();
  });

  test('renders typeset credit', () => {
    renderWithRouter();
    expect(screen.getByText(/Researcher, strategist and writer based in Lagos/)).toBeInTheDocument();
    expect(screen.getByText(/Newsreader and Plus Jakarta Sans/)).toBeInTheDocument();
  });
});
