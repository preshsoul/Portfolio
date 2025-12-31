import { render, screen, fireEvent } from '@testing-library/react';
import BlogSection from './BlogSection';

describe('BlogSection Component', () => {
  test('renders blog section with proper heading', () => {
    render(<BlogSection />);

    const heading = screen.getByRole('heading', { name: 'Latest Insights' });
    expect(heading).toBeInTheDocument();

    expect(screen.getByText('Strategic thinking on brand positioning and content')).toBeInTheDocument();
  });

  test('renders all three blog posts', () => {
    render(<BlogSection />);

    expect(screen.getByRole('heading', { name: "Why Your Content Isn't Working: The Positioning Problem No One Talks About" })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'How Strategic Narrative Development Secured $30,000 in Grant Funding' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: "Stop Hiring Content Writers. Here's What You Actually Need." })).toBeInTheDocument();
  });

  test('renders blog post categories', () => {
    render(<BlogSection />);

    expect(screen.getByText('Brand Strategy')).toBeInTheDocument();
    expect(screen.getByText('Case Studies')).toBeInTheDocument();
    expect(screen.getByText('Industry Insights')).toBeInTheDocument();
  });

  test('renders blog post dates with proper semantic markup', () => {
    render(<BlogSection />);

    const dates = screen.getAllByRole('time');
    expect(dates).toHaveLength(3);

    dates.forEach(date => {
      expect(date).toHaveAttribute('datetime');
    });

    expect(screen.getByText('December 15, 2024')).toBeInTheDocument();
    expect(screen.getByText('December 8, 2024')).toBeInTheDocument();
    expect(screen.getByText('December 1, 2024')).toBeInTheDocument();
  });

  test('renders read more buttons with proper accessibility', () => {
    render(<BlogSection />);

    const readMoreButtons = screen.getAllByRole('button', { name: /read more/i });
    expect(readMoreButtons).toHaveLength(3);

    readMoreButtons.forEach(button => {
      expect(button).toHaveClass('focus:outline-none', 'focus:ring-2', 'focus:ring-emerald-500');
    });
  });

  test('blog posts are in articles with proper structure', () => {
    render(<BlogSection />);

    const articles = screen.getAllByRole('article');
    expect(articles).toHaveLength(3);

    articles.forEach(article => {
      const heading = article.querySelector('h3');
      const excerpt = article.querySelector('p');
      const date = article.querySelector('time');
      const button = article.querySelector('button');

      expect(heading).toBeInTheDocument();
      expect(excerpt).toBeInTheDocument();
      expect(date).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });

  test('renders blog post excerpts', () => {
    render(<BlogSection />);

    expect(screen.getByText(/Most businesses blame 'the algorithm'/)).toBeInTheDocument();
    expect(screen.getByText(/When a social enterprise came to me/)).toBeInTheDocument();
    expect(screen.getByText(/If you're hiring 'content writers'/)).toBeInTheDocument();
  });

  test('section has proper semantic structure', () => {
    render(<BlogSection />);

    const section = screen.getByRole('heading', { name: 'Latest Insights' }).closest('section');
    expect(section).toHaveAttribute('id', 'blog');

    const region = screen.getByRole('region', { name: /latest blog posts/i });
    expect(region).toBeInTheDocument();
  });

  test('categories have proper text role', () => {
    render(<BlogSection />);

    const categories = screen.getAllByRole('text');
    expect(categories).toHaveLength(3);

    categories.forEach(category => {
      expect(category).toHaveAttribute('aria-label');
    });
  });
});