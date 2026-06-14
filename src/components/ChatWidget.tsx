import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, ThumbsUp, ThumbsDown, CheckCircle } from 'lucide-react';
import api from '../services/api';

interface Message {
  role: 'user' | 'model';
  parts: { text: string }[];
}

type ChatState = 'active' | 'feedback' | 'ended';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatState, setChatState] = useState<ChatState>('active');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', parts: [{ text: "Hi! I'm Vilal's AI assistant. How can I help you today?" }] }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [feedbackLoading, setFeedbackLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (chatState === 'active') {
      scrollToBottom();
    }
  }, [messages, isOpen, chatState]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || chatState !== 'active') return;

    const userMessage: Message = { role: 'user', parts: [{ text: input }] };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await api.post('/chat', {
        message: input,
        history: messages.slice(1) // exclude the initial hardcoded greeting if you want, or send it all
      });

      const aiMessage: Message = { role: 'model', parts: [{ text: response.data.reply }] };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: Message = { role: 'model', parts: [{ text: 'Sorry, I am having trouble connecting right now.' }] };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEndChat = () => {
    setChatState('feedback');
  };

  const submitFeedback = async (isThumbsUp: boolean) => {
    setFeedbackLoading(true);
    try {
      await api.post('/chat/feedback', { thumbsUp: isThumbsUp });
    } catch (error) {
      console.error('Feedback error:', error);
    } finally {
      setFeedbackLoading(false);
      setChatState('ended');
    }
  };

  const resetChat = () => {
    setMessages([{ role: 'model', parts: [{ text: "Hi! I'm Vilal's AI assistant. How can I help you today?" }] }]);
    setChatState('active');
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 p-4 rounded-full bg-primary-500 text-black shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all z-50 flex items-center justify-center"
        aria-label="Open Chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[90vw] md:w-96 bg-[var(--background)] border border-[var(--border)] rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden animate-fade-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-[var(--card)] to-[var(--background)] border-b border-[var(--border)] p-4 flex justify-between items-center shadow-sm relative z-10">
            <h3 className="font-semibold text-lg flex items-center gap-2 text-text">
              <MessageCircle size={20} className="text-primary-500" /> AI Assistant
            </h3>
            <div className="flex items-center gap-2">
              {chatState === 'active' && messages.length > 1 && (
                <button 
                  onClick={handleEndChat} 
                  className="text-xs px-2 py-1 bg-red-500/10 text-red-500 rounded hover:bg-red-500/20 transition-colors font-medium"
                >
                  End Chat
                </button>
              )}
              <button onClick={() => setIsOpen(false)} className="text-text-muted hover:text-text transition-colors">
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Active Chat State */}
          {chatState === 'active' && (
            <>
              {/* Messages Area */}
              <div className="flex-1 p-4 overflow-y-auto min-h-[350px] max-h-[450px] bg-[var(--background-alt)] flex flex-col gap-4 scroll-smooth">
                {messages.map((msg, idx) => (
                  <div 
                    key={idx} 
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-sm ${
                      msg.role === 'user' 
                        ? 'bg-primary-500 text-black self-end rounded-br-sm' 
                        : 'bg-[var(--background)] border border-[var(--border)] text-text self-start rounded-bl-sm'
                    }`}
                  >
                    {msg.parts[0].text}
                  </div>
                ))}
                {isLoading && (
                  <div className="bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] self-start rounded-2xl rounded-bl-sm px-4 py-3 text-sm flex gap-1.5 items-center shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-primary-500/50 animate-bounce"></span>
                    <span className="w-2 h-2 rounded-full bg-primary-500/50 animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-2 h-2 rounded-full bg-primary-500/50 animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <form onSubmit={handleSend} className="p-3 bg-[var(--background)] border-t border-[var(--border)] flex gap-2 items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-[var(--background-alt)] border border-[var(--border)] rounded-full px-4 py-2.5 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500/50 transition-all text-sm text-text"
                />
                <button 
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className={`p-2.5 rounded-full transition-all flex items-center justify-center ${
                    isLoading || !input.trim() 
                      ? 'bg-[var(--border)] text-text-muted cursor-not-allowed' 
                      : 'bg-primary-500 text-black hover:scale-105 shadow-md hover:shadow-lg'
                  }`}
                >
                  <Send size={18} className={input.trim() ? "translate-x-0.5" : ""} />
                </button>
              </form>
            </>
          )}

          {/* Feedback State */}
          {chatState === 'feedback' && (
            <div className="flex-1 flex flex-col items-center justify-center p-8 bg-[var(--background-alt)] min-h-[350px] text-center">
              <h3 className="text-xl font-bold text-text mb-2">Chat Ended</h3>
              <p className="text-text-muted text-sm mb-8">How was your experience with the AI Assistant?</p>
              
              {feedbackLoading ? (
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500"></div>
              ) : (
                <div className="flex gap-6">
                  <button 
                    onClick={() => submitFeedback(true)}
                    className="p-4 rounded-full bg-[var(--background)] border border-[var(--border)] hover:bg-green-500/10 hover:border-green-500 hover:text-green-500 transition-all group shadow-sm"
                  >
                    <ThumbsUp size={32} className="text-text-muted group-hover:text-green-500 transition-colors" />
                  </button>
                  <button 
                    onClick={() => submitFeedback(false)}
                    className="p-4 rounded-full bg-[var(--background)] border border-[var(--border)] hover:bg-red-500/10 hover:border-red-500 hover:text-red-500 transition-all group shadow-sm"
                  >
                    <ThumbsDown size={32} className="text-text-muted group-hover:text-red-500 transition-colors" />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Ended State */}
          {chatState === 'ended' && (
            <div className="flex-1 flex flex-col items-center justify-center p-8 bg-[var(--background-alt)] min-h-[350px] text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                <CheckCircle size={32} className="text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-text mb-2">Thank You!</h3>
              <p className="text-text-muted text-sm mb-8">Your feedback helps us improve the assistant.</p>
              
              <button 
                onClick={resetChat}
                className="px-6 py-2 bg-primary-500 text-black rounded-full font-medium hover:scale-105 transition-transform"
              >
                Start New Chat
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ChatWidget;
