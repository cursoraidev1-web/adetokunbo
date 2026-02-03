
import React from 'react';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 border-t-4 border-accent-maroon">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div 
              className="flex items-center cursor-pointer h-20 rounded-xl p-2" 
              onClick={() => onNavigate(Page.HOME)}
            >
              <img 
                src="logo.png" 
                alt="Adetokunbo Ayodeji Consult Logo" 
                className="h-full w-auto object-contain"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Empowering individuals and organizations to reach their full potential through expert consulting and strategic guidance.
            </p>
            <div className="flex gap-4">
              <SocialIcon label="FB" />
              <SocialIcon label="TW" />
              <SocialIcon label="LN" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-accent-gold">Quick Links</h3>
            <ul className="space-y-4">
              <FooterLink label="About Us" onClick={() => onNavigate(Page.ABOUT)} />
              <FooterLink label="Success Stories" onClick={() => onNavigate(Page.HOME)} />
              <FooterLink label="AI Career Advisor" onClick={() => onNavigate(Page.AI_CONSULTANT)} />
              <FooterLink label="Contact" onClick={() => onNavigate(Page.CONTACT)} />
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-accent-gold">Services</h3>
            <ul className="space-y-4">
              <FooterLink label="Career Consulting" />
              <FooterLink label="Academic Support" />
              <FooterLink label="Business Strategy" />
              <FooterLink label="Market Research" />
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-accent-gold">Stay Updated</h3>
            <p className="text-slate-400 text-sm mb-4">Subscribe for the latest career and academic insights.</p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-slate-800 border-none rounded-lg px-4 py-3 text-sm text-white focus:ring-2 focus:ring-accent-maroon" 
              />
              <button className="w-full bg-accent-maroon hover:bg-accent-maroon/90 text-white font-bold py-3 rounded-lg transition-colors shadow-lg shadow-accent-maroon/20">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs">© 2024 Adetokunbo Ayodeji Consult Ltd. All rights reserved. CAC Registered: RC 8286332</p>
          <div className="flex gap-8">
            <a href="#" className="text-slate-500 hover:text-white text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-white text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink: React.FC<{ label: string; onClick?: () => void }> = ({ label, onClick }) => (
  <li>
    <button onClick={onClick} className="text-slate-400 hover:text-white hover:underline transition-colors text-sm font-medium">
      {label}
    </button>
  </li>
);

const SocialIcon: React.FC<{ label: string }> = ({ label }) => (
  <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-primary transition-all text-xs font-bold border border-slate-700 hover:border-primary">
    {label}
  </a>
);

export default Footer;
