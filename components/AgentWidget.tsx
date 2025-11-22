import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Sparkles, Bot } from 'lucide-react';
import { initializeGemini, sendMessageToAgent } from '../services/geminiService';
import { ChatMessage } from '../types';

const AgentWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Hi! I'm Surendra's AI Agent. I can help you navigate his portfolio, answer questions about his projects, or help you get in touch. How can I assist you?",
      timestamp: new Date()
    }
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    initializeGemini();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const responseText = await sendMessageToAgent(input, history);

    const botMessage: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: responseText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMessage]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-8 right-6 z-50 p-4 rounded-full shadow-2xl shadow-primary-500/40 transition-all duration-500 hover:scale-110 flex items-center gap-2 group
          ${isOpen 
            ? 'bg-slate-900 text-white rotate-90' 
            : 'bg-gradient-to-r from-primary-600 via-purple-600 to-secondary-600 text-white animate-bounce-slight border-2 border-white/20'}`}
        aria-label="Toggle AI Agent"
      >
        {isOpen ? <X size={24} /> : (
          <>
            <div className="relative">
                <Sparkles size={22} className="animate-spin-slow" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-green-400 rounded-full border border-white"></span>
            </div>
            <span className="hidden sm:inline font-extrabold tracking-wide text-shadow-sm">Ask AI</span>
          </>
        )}
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-28 right-6 w-[90vw] sm:w-[400px] bg-white rounded-3xl shadow-2xl shadow-primary-900/20 border border-white/50 overflow-hidden z-40 transition-all duration-500 origin-bottom-right cubic-bezier(0.16, 1, 0.3, 1)
        ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-75 opacity-0 translate-y-10 pointer-events-none'}`}>
        
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-600 via-purple-600 to-secondary-600 p-5 flex items-center gap-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-xl"></div>
          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white border border-white/30 shadow-inner">
            <Bot size={28} />
          </div>
          <div className="relative z-10">
            <h3 className="text-white font-bold text-lg leading-tight">Surendra's Agent</h3>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]"></span>
              <p className="text-white/90 text-xs font-semibold tracking-wide">Online • Gemini 2.5</p>
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <div className="h-[400px] overflow-y-auto p-5 bg-slate-50 scrollbar-hide">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`mb-5 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-5 py-3.5 text-sm leading-relaxed shadow-sm transition-all
                  ${msg.role === 'user' 
                    ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-br-none shadow-primary-500/20' 
                    : 'bg-white text-slate-700 border border-slate-100 rounded-bl-none shadow-slate-200'}`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start mb-4">
              <div className="bg-white border border-slate-100 rounded-2xl rounded-bl-none px-5 py-4 flex gap-1.5 items-center shadow-sm">
                <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-secondary-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-accent-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <form onSubmit={handleSend} className="p-4 bg-white border-t border-slate-100">
          <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-full px-2 py-2 focus-within:ring-2 focus-within:ring-primary-500/50 focus-within:border-primary-500 transition-all shadow-inner">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              className="flex-grow bg-transparent px-4 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
            />
            <button 
              type="submit"
              disabled={isLoading || !input.trim()}
              className="p-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full hover:shadow-lg hover:shadow-primary-500/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105"
            >
              <Send size={18} />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AgentWidget;