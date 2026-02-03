
import React, { useState, useRef, useEffect } from 'react';
import { getCareerAdvice } from '../services/geminiService';

interface Message {
  role: 'user' | 'ai';
  text: string;
}

const AIConsultantPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', text: "Welcome to the Adetokunbo Ayodeji AI Career Advisor. I can help you with career path planning, academic guidance, or business strategies. What's on your mind today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    const aiResponse = await getCareerAdvice(userMessage);
    setMessages(prev => [...prev, { role: 'ai', text: aiResponse || "I couldn't generate a response. Please try again." }]);
    setIsLoading(false);
  };

  return (
    <div className="bg-slate-50 dark:bg-background-dark min-h-screen py-12 animate-fade-in-up">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-4">
            <span className="material-symbols-outlined text-sm font-bold">smart_toy</span>
            <span className="text-[10px] font-black uppercase tracking-widest">Powered by Gemini AI</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Virtual Career Advisor</h1>
          <p className="text-slate-500 font-medium text-lg">Get instant strategic advice based on Adetokunbo Ayodeji's methodology.</p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col h-[600px] overflow-hidden">
          {/* Chat Window */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-5 rounded-2xl shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-primary text-white font-bold rounded-tr-none' 
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium rounded-tl-none border border-slate-200 dark:border-slate-700'
                }`}>
                  {msg.text.split('\n').map((line, i) => (
                    <p key={i} className={i > 0 ? 'mt-2' : ''}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-100 dark:bg-slate-800 p-5 rounded-2xl rounded-tl-none animate-pulse flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-6 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700">
            <div className="flex gap-4">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about scholarships, CV tips, or business strategy..."
                className="flex-1 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-xl px-6 py-4 focus:ring-primary focus:border-primary transition-all text-slate-900 dark:text-white"
              />
              <button 
                type="submit"
                disabled={isLoading}
                className="w-14 h-14 bg-primary text-white rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center disabled:opacity-50"
              >
                <span className="material-symbols-outlined font-bold">send</span>
              </button>
            </div>
            <p className="text-[10px] text-slate-400 mt-4 text-center font-bold uppercase tracking-widest">
              Consultation Disclaimer: AI advice is for guidance only. For critical decisions, consult our senior experts.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AIConsultantPage;
