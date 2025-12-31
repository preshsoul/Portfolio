import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ChatWidget from './ChatWidget';

describe('ChatWidget Component', () => {
  test('renders chat button initially', () => {
    render(<ChatWidget />);

    const chatButton = screen.getByRole('button', { name: /open chat assistant/i });
    expect(chatButton).toBeInTheDocument();
  });

  test('opens chat widget when button is clicked', () => {
    render(<ChatWidget />);

    const chatButton = screen.getByRole('button', { name: /open chat assistant/i });
    fireEvent.click(chatButton);

    const chatDialog = screen.getByRole('dialog', { name: /ask about my work/i });
    expect(chatDialog).toBeInTheDocument();
  });

  test('closes chat widget when close button is clicked', () => {
    render(<ChatWidget />);

    // Open chat
    const chatButton = screen.getByRole('button', { name: /open chat assistant/i });
    fireEvent.click(chatButton);

    // Close chat
    const closeButton = screen.getByRole('button', { name: /close chat/i });
    fireEvent.click(closeButton);

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  test('renders welcome message when chat is empty', () => {
    render(<ChatWidget />);

    fireEvent.click(screen.getByRole('button', { name: /open chat assistant/i }));

    expect(screen.getByText("Hi! I'm here to help")).toBeInTheDocument();
    expect(screen.getByText('Ask me about:')).toBeInTheDocument();
    expect(screen.getByText('• Services & pricing')).toBeInTheDocument();
    expect(screen.getByText('• Precious\'s approach')).toBeInTheDocument();
    expect(screen.getByText('• Booking a discovery call')).toBeInTheDocument();
  });

  test('sends message and receives response', async () => {
    render(<ChatWidget />);

    fireEvent.click(screen.getByRole('button', { name: /open chat assistant/i }));

    const input = screen.getByLabelText(/type your message/i);
    const sendButton = screen.getByRole('button', { name: /send message/i });

    // Type message
    userEvent.type(input, 'Hello');

    // Send message
    fireEvent.click(sendButton);

    // Check user message appears
    expect(screen.getByText('Hello')).toBeInTheDocument();

    // Wait for bot response
    await waitFor(() => {
      expect(screen.getByText(/thanks for your message/i)).toBeInTheDocument();
    });
  });

  test('handles Enter key to send message', async () => {
    render(<ChatWidget />);

    fireEvent.click(screen.getByRole('button', { name: /open chat assistant/i }));

    const input = screen.getByLabelText(/type your message/i);

    userEvent.type(input, 'Test message{enter}');

    await waitFor(() => {
      expect(screen.getByText('Test message')).toBeInTheDocument();
      expect(screen.getByText(/thanks for your message/i)).toBeInTheDocument();
    });
  });

  test('prevents sending empty messages', () => {
    render(<ChatWidget />);

    fireEvent.click(screen.getByRole('button', { name: /open chat assistant/i }));

    const sendButton = screen.getByRole('button', { name: /send message/i });

    // Button should be disabled when input is empty
    expect(sendButton).toBeDisabled();
  });

  test('prevents sending messages over 500 characters', async () => {
    render(<ChatWidget />);

    fireEvent.click(screen.getByRole('button', { name: /open chat assistant/i }));

    const input = screen.getByLabelText(/type your message/i);
    const sendButton = screen.getByRole('button', { name: /send message/i });

    // Create a message longer than 500 characters
    const longMessage = 'a'.repeat(501);
    userEvent.type(input, longMessage);

    expect(sendButton).toBeDisabled();
  });

  test('shows typing indicator while processing', async () => {
    render(<ChatWidget />);

    fireEvent.click(screen.getByRole('button', { name: /open chat assistant/i }));

    const input = screen.getByLabelText(/type your message/i);
    userEvent.type(input, 'Test{enter}');

    // Check for typing indicator
    const typingIndicator = screen.getByRole('status', { name: /assistant is typing/i });
    expect(typingIndicator).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByRole('status', { name: /assistant is typing/i })).not.toBeInTheDocument();
    });
  });

  test('input has proper attributes', () => {
    render(<ChatWidget />);

    fireEvent.click(screen.getByRole('button', { name: /open chat assistant/i }));

    const input = screen.getByLabelText(/type your message/i);
    expect(input).toHaveAttribute('maxLength', '500');
    expect(input).toHaveAttribute('placeholder', 'Ask me anything...');
  });

  test('chat has proper accessibility attributes', () => {
    render(<ChatWidget />);

    fireEvent.click(screen.getByRole('button', { name: /open chat assistant/i }));

    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveAttribute('aria-labelledby', 'chat-title');
    expect(dialog).toHaveAttribute('aria-describedby', 'chat-description');

    const messagesArea = screen.getByRole('log', { name: /chat messages/i });
    expect(messagesArea).toHaveAttribute('aria-live', 'polite');
  });

  test('messages have proper roles and labels', async () => {
    render(<ChatWidget />);

    fireEvent.click(screen.getByRole('button', { name: /open chat assistant/i }));

    const input = screen.getByLabelText(/type your message/i);
    userEvent.type(input, 'Test{enter}');

    await waitFor(() => {
      const userMessage = screen.getByRole('article', { name: /user message/i });
      const assistantMessage = screen.getByRole('article', { name: /assistant message/i });

      expect(userMessage).toBeInTheDocument();
      expect(assistantMessage).toBeInTheDocument();
    });
  });

  test('character count is announced to screen readers', () => {
    render(<ChatWidget />);

    fireEvent.click(screen.getByRole('button', { name: /open chat assistant/i }));

    const input = screen.getByLabelText(/type your message/i);
    const charCount = screen.getByText('0/500 characters');

    expect(charCount).toHaveClass('sr-only');
  });
});