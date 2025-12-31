import { render, screen } from '@testing-library/react';
import AboutSection from './AboutSection';

describe('AboutSection Component', () => {
  test('renders about section with proper heading', () => {
    render(<AboutSection />);

    const heading = screen.getByRole('heading', { name: 'About Me' });
    expect(heading).toBeInTheDocument();
  });

  test('renders about content', () => {
    render(<AboutSection />);

    expect(screen.getByText(/I'm a brand strategist and content consultant/)).toBeInTheDocument();
    expect(screen.getByText(/I work at the intersection of brand strategy/)).toBeInTheDocument();
    expect(screen.getByText(/I specialize in working with funded startups/)).toBeInTheDocument();
  });

  test('renders achievement statistics with proper accessibility', () => {
    render(<AboutSection />);

    const statsRegion = screen.getByRole('region', { name: /key achievements and statistics/i });
    expect(statsRegion).toBeInTheDocument();

    // Check each stat has proper aria-label and content
    expect(screen.getByRole('article', { name: /achieved 200 percent brand visibility growth/i })).toBeInTheDocument();
    expect(screen.getByRole('article', { name: /secured over 30 thousand dollars in grant funding/i })).toBeInTheDocument();
    expect(screen.getByRole('article', { name: /delivered over 180 content assets/i })).toBeInTheDocument();
  });

  test('renders correct statistic values', () => {
    render(<AboutSection />);

    expect(screen.getByText('200%')).toBeInTheDocument();
    expect(screen.getByText('Brand Visibility Growth')).toBeInTheDocument();

    expect(screen.getByText('$30K+')).toBeInTheDocument();
    expect(screen.getByText('Grant Funding Secured')).toBeInTheDocument();

    expect(screen.getByText('180+')).toBeInTheDocument();
    expect(screen.getByText('Content Assets Delivered')).toBeInTheDocument();
  });

  test('renders icons with aria-hidden', () => {
    render(<AboutSection />);

    const icons = screen.getAllByTestId('lucide-icon');
    expect(icons).toHaveLength(3);

    icons.forEach(icon => {
      expect(icon).toHaveAttribute('aria-hidden', 'true');
    });
  });

  test('section has proper semantic structure', () => {
    render(<AboutSection />);

    const section = screen.getByRole('heading', { name: 'About Me' }).closest('section');
    expect(section).toHaveAttribute('id', 'about');
  });
});