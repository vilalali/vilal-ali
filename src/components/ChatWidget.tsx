import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import api from '../services/api';

interface Message {
  role: 'user' | 'model';
  parts: { text: string }[];
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', parts: [{ text: "Hi! I'm Vilal's AI assistant. How can I help you today?" }] }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

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

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 p-4 rounded-full bg-yellow-500 text-black shadow-xl hover:scale-110 transition-transform z-50 flex items-center justify-center"
        aria-label="Open Chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 md:w-96 bg-[var(--background)] border border-[var(--border)] rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden animate-fade-in">
          {/* Header */}
          <div className="bg-[var(--card)] border-b border-[var(--border)] text-text p-4 flex justify-between items-center">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <MessageCircle size={20} className="text-yellow-500" /> AI Assistant
            </h3>
            <button onClick={() => setIsOpen(false)} className="hover:opacity-70 transition-opacity">
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto min-h-[300px] max-h-[400px] bg-[var(--background-alt)] flex flex-col gap-3">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${msg.role === 'user' ? 'bg-[var(--primary)] text-black self-end rounded-br-none' : 'bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] self-start rounded-bl-none'}`}
              >
                {msg.parts[0].text}
              </div>
            ))}
            {isLoading && (
              <div className="bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] self-start rounded-2xl rounded-bl-none px-4 py-2 text-sm flex gap-1 items-center">
                <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></span>
                <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-75"></span>
                <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-150"></span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-3 bg-[var(--background)] border-t border-[var(--border)] flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              className="flex-1 bg-[var(--background-alt)] border border-[var(--border)] rounded-full px-4 py-2 focus:outline-none focus:border-[var(--primary)] transition-colors text-sm"
            />
            <button 
              type="submit"
              disabled={isLoading || !input.trim()}
              className={`${isLoading || !input.trim() ? 'text-gray-500 cursor-not-allowed' : 'text-yellow-500 hover:text-yellow-400 hover:scale-110'} p-2 bg-transparent transition-all`}
            >
              <Send size={20} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
