import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  test('renders footer with proper semantic role', () => {
    render(<Footer />);

    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });

  test('renders brand name', () => {
    render(<Footer />);

    expect(screen.getByText('Precious')).toBeInTheDocument();
    expect(screen.getByText('Ajayi')).toBeInTheDocument();
  });

  test('renders tagline', () => {
    render(<Footer />);

    expect(screen.getByText('Brand Strategist & Content Lead')).toBeInTheDocument();
  });

  test('renders all social media links', () => {
    render(<Footer />);

    const emailLink = screen.getByRole('link', { name: /send email to precious ajayi/i });
    expect(emailLink).toHaveAttribute('href', 'mailto:ajayithewriter@gmail.com');

    const linkedinLink = screen.getByRole('link', { name: /visit precious ajayi\'s linkedin profile/i });
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/precious-ajayi-soul');
    expect(linkedinLink).toHaveAttribute('target', '_blank');
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');

    const phoneLink = screen.getByRole('link', { name: /call precious ajayi/i });
    expect(phoneLink).toHaveAttribute('href', 'tel:+2349131623617');
  });

  test('social links are in a proper navigation list', () => {
    render(<Footer />);

    const nav = screen.getByRole('navigation', { name: /social media links/i });
    expect(nav).toBeInTheDocument();

    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3); // email, linkedin, phone
  });

  test('renders copyright notice', () => {
    render(<Footer />);

    expect(screen.getByText('© 2025 Precious Ajayi. All rights reserved.')).toBeInTheDocument();
  });

  test('links have proper focus states', () => {
    render(<Footer />);

    const links = screen.getAllByRole('link');

    links.forEach(link => {
      expect(link).toHaveClass('focus:outline-none', 'focus:ring-2', 'focus:ring-emerald-400');
      expect(link).toHaveClass('focus:ring-offset-2', 'focus:ring-offset-gray-900');
    });
  });

  test('footer has proper layout structure', () => {
    render(<Footer />);

    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveClass('bg-gray-900', 'text-white', 'py-12', 'px-6');
  });
});