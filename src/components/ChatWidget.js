import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [showError, setShowError] = useState('');
  const chatEndRef = useRef(null);

  const questions = [
    {
      id: 'name',
      question: "Hi! I'm here to help you connect with Precious. What's your name?",
      type: 'text',
      placeholder: 'Your name...'
    },
    {
      id: 'email',
      question: `Nice to meet you, ${formData.name}! What's your email address?`,
      type: 'email',
      placeholder: 'your@email.com'
    },
    {
      id: 'service',
      question: 'Which service are you interested in?',
      type: 'select',
      options: [
        'Strategic Content Partnerships (₦75K/month)',
        'Brand Strategy Intensives (₦180K one-time)',
        'Grant Writing (₦60K per proposal)',
        'Not sure yet - want to learn more'
      ]
    },
    {
      id: 'message',
      question: 'Great! Tell me a bit about your project or what you need help with:',
      type: 'textarea',
      placeholder: 'Describe your needs...'
    }
  ];

  const [chatHistory, setChatHistory] = useState([
    { type: 'bot', message: questions[0].question }
  ]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory]);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (value) => {
    const currentQuestion = questions[currentStep];
    
    // Validation
    if (currentQuestion.type === 'email' && !validateEmail(value)) {
      setShowError('Please enter a valid email address');
      return;
    }
    
    if (!value.trim()) {
      setShowError('This field is required');
      return;
    }

    setShowError('');

    // Add user response to chat
    setChatHistory(prev => [...prev, { 
      type: 'user', 
      message: value 
    }]);

    // Update form data
    const newFormData = { ...formData, [currentQuestion.id]: value };
    setFormData(newFormData);

    // Move to next step or finish
    if (currentStep < questions.length - 1) {
      setTimeout(() => {
        setChatHistory(prev => [...prev, { 
          type: 'bot', 
          message: questions[currentStep + 1].question 
        }]);
        setCurrentStep(currentStep + 1);
      }, 500);
    } else {
      // All done - show final message
      setTimeout(() => {
        setChatHistory(prev => [...prev, { 
          type: 'bot', 
          message: "Perfect! Click the button below to send your inquiry via email." 
        }]);
      }, 500);
    }
  };

  const handleSendEmail = () => {
    const subject = `Portfolio Inquiry from ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Service Interest: ${formData.service}

Message:
${formData.message}

---
Sent via Portfolio Contact Widget
    `.trim();

    const mailtoLink = `mailto:ajayithewriter@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const resetChat = () => {
    setCurrentStep(0);
    setFormData({ name: '', email: '', service: '', message: '' });
    setChatHistory([{ type: 'bot', message: questions[0].question }]);
    setShowError('');
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 z-50"
          aria-label="Open chat"
        >
          <MessageCircle size={28} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-full max-w-md bg-white rounded-2xl shadow-2xl flex flex-col z-50 mx-4 sm:mx-0" 
             style={{height: '600px', maxHeight: '80vh'}}>
          
          {/* Header */}
          <div className="bg-emerald-600 text-white p-4 rounded-t-2xl flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center font-bold">
                PA
              </div>
              <div>
                <div className="font-semibold">Precious Ajayi</div>
                <div className="text-xs text-emerald-100">Brand Strategist</div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="hover:bg-emerald-700 p-2 rounded-lg transition-colors"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {chatHistory.map((chat, index) => (
              <div 
                key={index}
                className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] p-3 rounded-2xl ${
                  chat.type === 'user' 
                    ? 'bg-emerald-600 text-white rounded-br-sm' 
                    : 'bg-white text-gray-800 rounded-bl-sm shadow-sm'
                }`}>
                  {chat.message}
                </div>
              </div>
            ))}

            {showError && (
              <div className="flex justify-start">
                <div className="max-w-[80%] p-3 rounded-2xl bg-red-100 text-red-700 text-sm">
                  {showError}
                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-200 rounded-b-2xl">
            {currentStep < questions.length ? (
              <ChatInput 
                question={questions[currentStep]}
                onSubmit={handleSubmit}
                setShowError={setShowError}
              />
            ) : (
              <div className="space-y-2">
                <button
                  onClick={handleSendEmail}
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send via Email
                </button>
                <button
                  onClick={resetChat}
                  className="w-full py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Start Over
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

// Separate Input Component
const ChatInput = ({ question, onSubmit, setShowError }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSubmit(inputValue);
      setInputValue('');
    }
  };

  if (question.type === 'select') {
    return (
      <div className="space-y-2">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSubmit(option)}
            className="w-full p-3 text-left bg-gray-100 hover:bg-emerald-50 hover:border-emerald-600 border-2 border-transparent rounded-lg transition-all"
          >
            {option}
          </button>
        ))}
      </div>
    );
  }

  if (question.type === 'textarea') {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <textarea
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            setShowError('');
          }}
          placeholder={question.placeholder}
          className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-emerald-600 focus:outline-none resize-none"
          rows="3"
        />
        <button
          type="submit"
          className="py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
        >
          <Send size={18} />
          Send
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type={question.type}
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          setShowError('');
        }}
        placeholder={question.placeholder}
        className="flex-1 p-3 border-2 border-gray-200 rounded-lg focus:border-emerald-600 focus:outline-none"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold transition-colors"
      >
        <Send size={18} />
      </button>
    </form>
  );
};

export default ChatWidget;