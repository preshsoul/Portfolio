import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders main portfolio sections', () => {
    render(<App />);

    // Check that main sections are rendered
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();

    // Check for key headings
    expect(screen.getByText('Precious Ajayi')).toBeInTheDocument();
    expect(screen.getByText('About Me')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Latest Insights')).toBeInTheDocument();
    expect(screen.getByText("Let's Work Together")).toBeInTheDocument();
  });

  test('renders navigation with proper accessibility', () => {
    render(<App />);

    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
    expect(nav).toHaveAttribute('aria-label', 'Main navigation');
  });

  test('renders chat widget button', () => {
    render(<App />);

    const chatButton = screen.getByRole('button', { name: /open chat assistant/i });
    expect(chatButton).toBeInTheDocument();
  });
});
