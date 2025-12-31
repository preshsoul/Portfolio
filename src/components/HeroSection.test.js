import { render, screen, fireEvent } from '@testing-library/react';
import HeroSection from './HeroSection';

const mockScrollToSection = jest.fn();

describe('HeroSection Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders hero section with proper accessibility', () => {
    render(<HeroSection scrollToSection={mockScrollToSection} />);

    const section = screen.getByRole('region', { name: /professional headshot/i });
    expect(section).toBeInTheDocument();

    const heading = screen.getByRole('heading', { name: /turning strategic thinking into market positioning/i });
    expect(heading).toBeInTheDocument();
  });

  test('renders main heading and description', () => {
    render(<HeroSection scrollToSection={mockScrollToSection} />);

    expect(screen.getByText('Turning Strategic Thinking Into Market Positioning')).toBeInTheDocument();
    expect(screen.getByText(/I help growing businesses think different/)).toBeInTheDocument();
  });

  test('renders badge with proper role', () => {
    render(<HeroSection scrollToSection={mockScrollToSection} />);

    const badge = screen.getByRole('status');
    expect(badge).toHaveTextContent('Brand Strategist & Content Lead');
  });

  test('renders call-to-action buttons', () => {
    render(<HeroSection scrollToSection={mockScrollToSection} />);

    const discoveryButton = screen.getByRole('button', { name: /book a discovery call/i });
    const servicesButton = screen.getByRole('button', { name: /view services/i });

    expect(discoveryButton).toBeInTheDocument();
    expect(servicesButton).toBeInTheDocument();
  });

  test('calls scrollToSection when discovery call button is clicked', () => {
    render(<HeroSection scrollToSection={mockScrollToSection} />);

    const discoveryButton = screen.getByRole('button', { name: /book a discovery call/i });
    fireEvent.click(discoveryButton);

    expect(mockScrollToSection).toHaveBeenCalledWith('contact');
  });

  test('calls scrollToSection when services button is clicked', () => {
    render(<HeroSection scrollToSection={mockScrollToSection} />);

    const servicesButton = screen.getByRole('button', { name: /view services/i });
    fireEvent.click(servicesButton);

    expect(mockScrollToSection).toHaveBeenCalledWith('services');
  });

  test('renders image placeholder with alt text', () => {
    render(<HeroSection scrollToSection={mockScrollToSection} />);

    const imageContainer = screen.getByRole('img', { name: /professional headshot/i });
    expect(imageContainer).toBeInTheDocument();

    expect(screen.getByText(/your emerald green suit photo goes here/i)).toBeInTheDocument();
  });

  test('renders achievement statistic', () => {
    render(<HeroSection scrollToSection={mockScrollToSection} />);

    const statRegion = screen.getByRole('region', { name: /key achievement statistic/i });
    expect(statRegion).toBeInTheDocument();

    expect(screen.getByText('98%')).toBeInTheDocument();
    expect(screen.getByText('First-Review Approval')).toBeInTheDocument();
  });

  test('buttons have proper focus states', () => {
    render(<HeroSection scrollToSection={mockScrollToSection} />);

    const discoveryButton = screen.getByRole('button', { name: /book a discovery call/i });
    const servicesButton = screen.getByRole('button', { name: /view services/i });

    expect(discoveryButton).toHaveClass('focus:outline-none', 'focus:ring-2', 'focus:ring-emerald-500');
    expect(servicesButton).toHaveClass('focus:outline-none', 'focus:ring-2', 'focus:ring-white');
  });
});