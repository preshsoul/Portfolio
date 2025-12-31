import { render, screen } from '@testing-library/react';
import ContactSection from './ContactSection';

describe('ContactSection Component', () => {
  test('renders contact section with proper heading', () => {
    render(<ContactSection />);

    const heading = screen.getByRole('heading', { name: "Let's Work Together" });
    expect(heading).toBeInTheDocument();

    expect(screen.getByText('Currently taking on 2 Strategic Content Partnership clients for Q1 2025')).toBeInTheDocument();
  });

  test('renders all contact information', () => {
    render(<ContactSection />);

    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Phone')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByText('Location')).toBeInTheDocument();
  });

  test('renders contact links with proper accessibility', () => {
    render(<ContactSection />);

    const emailLink = screen.getByRole('link', { name: /send email to ajayithewriter@gmail.com/i });
    expect(emailLink).toHaveAttribute('href', 'mailto:ajayithewriter@gmail.com');

    const phoneLink = screen.getByRole('link', { name: /call \+234 091 3162 3617/i });
    expect(phoneLink).toHaveAttribute('href', 'tel:+2349131623617');

    const linkedinLink = screen.getByRole('link', { name: /visit linkedin profile/i });
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/precious-ajayi-soul');
    expect(linkedinLink).toHaveAttribute('target', '_blank');
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('renders location information', () => {
    render(<ContactSection />);

    expect(screen.getByText('Lagos, Nigeria')).toBeInTheDocument();
    expect(screen.getByText('(Available for remote work globally)')).toBeInTheDocument();
  });

  test('renders process steps with proper structure', () => {
    render(<ContactSection />);

    const heading = screen.getByRole('heading', { name: 'What to Expect' });
    expect(heading).toBeInTheDocument();

    const orderedList = screen.getByRole('list');
    expect(orderedList).toBeInTheDocument();

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(4);

    // Check step numbers
    expect(screen.getByLabelText('Step 1')).toBeInTheDocument();
    expect(screen.getByLabelText('Step 2')).toBeInTheDocument();
    expect(screen.getByLabelText('Step 3')).toBeInTheDocument();
    expect(screen.getByLabelText('Step 4')).toBeInTheDocument();
  });

  test('renders process step content', () => {
    render(<ContactSection />);

    expect(screen.getByText('Initial Contact')).toBeInTheDocument();
    expect(screen.getByText('Reach out via email or phone')).toBeInTheDocument();

    expect(screen.getByText('Discovery Call')).toBeInTheDocument();
    expect(screen.getByText('15-minute call to assess fit')).toBeInTheDocument();

    expect(screen.getByText('Proposal')).toBeInTheDocument();
    expect(screen.getByText('Custom proposal within 24 hours')).toBeInTheDocument();

    expect(screen.getByText("Let's Go")).toBeInTheDocument();
    expect(screen.getByText('Agreement, deposit, and kickoff')).toBeInTheDocument();
  });

  test('renders reply time status', () => {
    render(<ContactSection />);

    const status = screen.getByRole('status');
    expect(status).toHaveTextContent('I reply within 24 hours to all inquiries');
  });

  test('section has proper semantic structure', () => {
    render(<ContactSection />);

    const section = screen.getByRole('heading', { name: "Let's Work Together" }).closest('section');
    expect(section).toHaveAttribute('id', 'contact');

    const contactRegion = screen.getByRole('region', { name: /contact information/i });
    expect(contactRegion).toBeInTheDocument();

    const processRegion = screen.getByRole('region', { name: /process overview/i });
    expect(processRegion).toBeInTheDocument();
  });

  test('links have proper focus states', () => {
    render(<ContactSection />);

    const links = screen.getAllByRole('link');

    links.forEach(link => {
      expect(link).toHaveClass('focus:outline-none', 'focus:ring-2', 'focus:ring-emerald-500');
    });
  });
});