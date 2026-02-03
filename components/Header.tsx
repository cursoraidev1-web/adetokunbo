
import React, { useState } from 'react';
import { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, isDarkMode, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', page: Page.HOME },
    { label: 'About Us', page: Page.ABOUT },
    // { label: 'AI Advisor', page: Page.AI_CONSULTANT },
    { label: 'Contact', page: Page.CONTACT },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-2 flex items-center justify-between">
        {/* Logo Integration */}
        <div 
          className="flex items-center cursor-pointer group h-16" 
          onClick={() => onNavigate(Page.HOME)}
        >
          <img 
            src="logo.png" 
            alt="Adetokunbo Ayodeji Consult Logo" 
            className="h-full w-auto object-contain group-hover:scale-105 transition-transform"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.page}
              onClick={() => onNavigate(link.page)}
              className={`text-sm font-bold transition-colors ${
                currentPage === link.page 
                  ? 'text-accent-maroon' 
                  : 'text-slate-600 dark:text-slate-300 hover:text-primary'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400"
          >
            <span className="material-symbols-outlined">
              {isDarkMode ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
          <button 
            onClick={() => onNavigate(Page.CONTACT)}
            className="hidden sm:flex items-center justify-center rounded-lg h-10 px-6 bg-primary hover:bg-primary/90 transition-all text-white text-sm font-bold shadow-sm shadow-primary/20"
          >
            Get Started
          </button>
          <button 
            className="lg:hidden p-2 text-slate-600 dark:text-slate-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-background-dark border-b border-slate-100 dark:border-slate-800 animate-fade-in-up">
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => {
                  onNavigate(link.page);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left px-4 py-2 text-sm font-bold rounded-lg ${
                  currentPage === link.page 
                    ? 'bg-primary/10 text-primary' 
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={() => { onNavigate(Page.CONTACT); setIsMobileMenuOpen(false); }}
              className="w-full bg-primary text-white py-3 rounded-lg font-bold"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
