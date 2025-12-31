import { render, screen, fireEvent } from '@testing-library/react';
import ServicesSection from './ServicesSection';

const mockScrollToSection = jest.fn();

describe('ServicesSection Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders services section with proper heading', () => {
    render(<ServicesSection scrollToSection={mockScrollToSection} />);

    const heading = screen.getByRole('heading', { name: 'Services' });
    expect(heading).toBeInTheDocument();

    expect(screen.getByText('Strategic positioning and content execution for growing businesses')).toBeInTheDocument();
  });

  test('renders all three services', () => {
    render(<ServicesSection scrollToSection={mockScrollToSection} />);

    expect(screen.getByRole('heading', { name: 'Strategic Content Partnerships' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Brand Strategy Intensives' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Grant Writing' })).toBeInTheDocument();
  });

  test('renders service pricing correctly', () => {
    render(<ServicesSection scrollToSection={mockScrollToSection} />);

    expect(screen.getByText('₦75K')).toBeInTheDocument();
    expect(screen.getByText('/month')).toBeInTheDocument();

    expect(screen.getByText('₦180K')).toBeInTheDocument();
    expect(screen.getByText('one-time')).toBeInTheDocument();

    expect(screen.getByText('₦60K')).toBeInTheDocument();
    expect(screen.getByText('per proposal')).toBeInTheDocument();
  });

  test('marks popular service correctly', () => {
    render(<ServicesSection scrollToSection={mockScrollToSection} />);

    const popularBadge = screen.getByRole('status');
    expect(popularBadge).toHaveTextContent('POPULAR');

    // Check that the popular service has the border
    const popularService = screen.getByRole('article', { name: /brand strategy intensives/i });
    expect(popularService).toHaveClass('border-emerald-600');
  });

  test('renders service features as lists', () => {
    render(<ServicesSection scrollToSection={mockScrollToSection} />);

    const lists = screen.getAllByRole('list');
    expect(lists).toHaveLength(3); // One for each service

    // Check that each service has features
    const strategicFeatures = screen.getByRole('article', { name: /strategic content partnerships/i });
    const strategicList = strategicFeatures.querySelector('[role="list"]');
    expect(strategicList).toBeInTheDocument();
  });

  test('renders get started buttons for each service', () => {
    render(<ServicesSection scrollToSection={mockScrollToSection} />);

    const buttons = screen.getAllByRole('button', { name: /get started/i });
    expect(buttons).toHaveLength(3);
  });

  test('calls scrollToSection when get started button is clicked', () => {
    render(<ServicesSection scrollToSection={mockScrollToSection} />);

    const strategicButton = screen.getByRole('button', { name: /get started with strategic content partnerships/i });
    fireEvent.click(strategicButton);

    expect(mockScrollToSection).toHaveBeenCalledWith('contact');
  });

  test('buttons have proper focus states', () => {
    render(<ServicesSection scrollToSection={mockScrollToSection} />);

    const buttons = screen.getAllByRole('button', { name: /get started/i });

    buttons.forEach(button => {
      expect(button).toHaveClass('focus:outline-none', 'focus:ring-2', 'focus:ring-emerald-500');
    });
  });

  test('services are in articles with proper headings', () => {
    render(<ServicesSection scrollToSection={mockScrollToSection} />);

    const articles = screen.getAllByRole('article');
    expect(articles).toHaveLength(3);

    articles.forEach(article => {
      const heading = article.querySelector('h3');
      expect(heading).toBeInTheDocument();
    });
  });

  test('section has proper semantic structure', () => {
    render(<ServicesSection scrollToSection={mockScrollToSection} />);

    const section = screen.getByRole('heading', { name: 'Services' }).closest('section');
    expect(section).toHaveAttribute('id', 'services');

    const region = screen.getByRole('region', { name: /available services/i });
    expect(region).toBeInTheDocument();
  });
});