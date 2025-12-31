import { render, screen, fireEvent } from '@testing-library/react';
import Navigation from './Navigation';

const mockScrollToSection = jest.fn();

const defaultProps = {
  isMenuOpen: false,
  setIsMenuOpen: jest.fn(),
  activeSection: 'home',
  scrollToSection: mockScrollToSection,
};

describe('Navigation Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders navigation with proper accessibility', () => {
    render(<Navigation {...defaultProps} />);

    const nav = screen.getByRole('navigation', { name: /main navigation/i });
    expect(nav).toBeInTheDocument();
  });

  test('renders brand name', () => {
    render(<Navigation {...defaultProps} />);

    expect(screen.getByText('Precious')).toBeInTheDocument();
    expect(screen.getByText('Ajayi')).toBeInTheDocument();
  });

  test('renders navigation links on desktop', () => {
    render(<Navigation {...defaultProps} />);

    const navLinks = ['home', 'about', 'services', 'blog', 'contact'];
    navLinks.forEach(link => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });
  });

  test('highlights active section', () => {
    render(<Navigation {...defaultProps} activeSection="about" />);

    const aboutLink = screen.getByText('about');
    expect(aboutLink).toHaveAttribute('aria-current', 'page');
  });

  test('calls scrollToSection when navigation link is clicked', () => {
    render(<Navigation {...defaultProps} />);

    const aboutLink = screen.getByText('about');
    fireEvent.click(aboutLink);

    expect(mockScrollToSection).toHaveBeenCalledWith('about');
  });

  test('toggles mobile menu', () => {
    const mockSetIsMenuOpen = jest.fn();
    render(<Navigation {...defaultProps} setIsMenuOpen={mockSetIsMenuOpen} />);

    const menuButton = screen.getByRole('button', { name: /open menu/i });
    fireEvent.click(menuButton);

    expect(mockSetIsMenuOpen).toHaveBeenCalledWith(true);
  });

  test('shows mobile menu when open', () => {
    render(<Navigation {...defaultProps} isMenuOpen={true} />);

    const menu = screen.getByRole('menu');
    expect(menu).toBeInTheDocument();

    const menuItems = screen.getAllByRole('menuitem');
    expect(menuItems).toHaveLength(5); // home, about, services, blog, contact
  });

  test('closes menu when mobile link is clicked', () => {
    const mockSetIsMenuOpen = jest.fn();
    render(
      <Navigation
        {...defaultProps}
        isMenuOpen={true}
        setIsMenuOpen={mockSetIsMenuOpen}
      />
    );

    const aboutLink = screen.getByRole('menuitem', { name: 'about' });
    fireEvent.click(aboutLink);

    expect(mockScrollToSection).toHaveBeenCalledWith('about');
    expect(mockSetIsMenuOpen).toHaveBeenCalledWith(false);
  });
});