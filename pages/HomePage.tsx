
import React from 'react';
import { Page, ServiceCardProps, TestimonialProps } from '../types';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const services: ServiceCardProps[] = [
    {
      title: "Career Consulting",
      description: "Expert CV reviews, LinkedIn optimization, interview preparation, and strategic career path planning to help you land your dream job.",
      icon: "work",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVbPRTPesGuXj8fxe-ebhSV9cBTT6QZZpP_9q70yJzAeguVfOjXoBhiX0nR8skm3JIN7XOSMWDiKXNB_4i-RkQqsbwFA0EcKUulJjw0iaX7zT23cC3wyRp4nItJ48HkpcjWwczPvXq_ZY2A0Ofa4lxYx9JTFtnjJMs5vJ2rfXIlTt9InKm8rrUObwJSiuRr5p41SaBxrFgkHpMmnPvqyOOsEFmGnupNq9O59VT5qjAX-dpi9CPlb1ONbgJ4ViPDhrG6Ux50pdDNb6I",
      link: "#"
    },
    {
      title: "Academic Support",
      description: "Comprehensive guidance for university admissions, scholarship essays, thesis review, and academic excellence strategies.",
      icon: "school",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsrazGeZ1QDe4d59hdXEBjsVoGdI7M_HFyFFNU0XJodAKX378Dw9FpPGCBY-tcfiTOpmYPv-rMHiy5rDnwJGok8U8_AqkUDZ201CPoxaSWJ1n4JEA_7f0aPZEL2taPu6NTrytruPLBPfOYjs9Wyi3z5v46Tv4VCARTpD3uxIaedfJU5GpB_CMaASbMSC_6Mxqfk_6tVN9v5stajBt_lhIGFRA-d8bAvVEZVIhTJf8T2YsDg3AT2BJikvR409O_tSwcsEHOP_fEB-Pw",
      link: "#"
    },
    {
      title: "Research & Strategy",
      description: "Data-driven market analysis, business plan development, and strategic consulting for startups and established enterprises.",
      icon: "query_stats",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfaE7uyk1jnXIXxHakDqCRhyPcNRTk1MKok5N40GKrLz-4XIL1pol2lZLyeiLXmmZW50WnzX8WumRCUcNdbCaiH-EPKQ40YSsrqlo4OIrXUhvTVnMH6-OJKvJcQeYvZ5Yyy79QCP2q3VRXdxqj5jt4XcJoJluKjYNCB9Xr3gwMheES57GBM3DRZjJnyXijevCjEv-WKKYYaznNN9P97fQDqFrNOsRGVPfw9Dq75LwFHyvKN-sWC54BvTS_dHvzT1nvBJjqpInWbSpv",
      link: "#"
    }
  ];

  const testimonials: TestimonialProps[] = [
    {
      name: "Michael T.",
      role: "Senior Analyst",
      quote: "The career consulting sessions were transformative. I was able to pivot into a completely new industry thanks to the strategic CV restructuring and interview coaching.",
      rating: 5,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUOQ7BrXUvHP0yxCWiTBrxuTEp4Zuac6NhibQm5reZkOa0svC0AoPeZ_pbXMyNISh35bPfe-cYxX2Rej7Qy93gWtTvbOoBo285ZTo2b1rZUk7drU_bSwAJK_kAjTYo3_zFScc551wFNI02i-zHBWCvTw2UxwSZIV-Ewn_zF_DSbbJ8ExjdQOpEQqbRbrX-2KoQ9EDShDj7sa_h13P09Sp3njS7bkeNJEmWh5TjjKDtKqckoKIprGAxQZIXnJH9RdGkkR0jr0D9WWCK"
    },
    {
      name: "Sarah L.",
      role: "PhD Candidate",
      quote: "Adetokunbo Ayodeji Consult helped me secure a full scholarship for my PhD program. Their review of my research proposal was detailed and insightful.",
      rating: 5,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWHkJFhKmXJ62LSicbYY-s6rg86uRyP6NJZdVDMkEZsRbG1AqgHSJD6F2qZ9LLPChDgxbaEhjvyPIVrTfrw18u9h3iBEFmWGFdESRAmMURkjGmwfZi5_X_nIvatHTX4dORaX1oR1_bxkMmV_qCd_8lE_Up6Pwl283cUSD8vTeorrh2TqW9-sHZv_DrXe5CznwOUMuTndpEHQfBQ88i0ImIXd5JeyOKH7_2_swcR9HM3GA-EcGTYgi8wCHTIBqY99C5wx_oNoN7FUYj"
    },
    {
      name: "David K.",
      role: "Tech Entrepreneur",
      quote: "Their business strategy team provided the market clarity we needed to launch our new product line. The data-driven approach was exactly what our investors wanted to see.",
      rating: 5,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDa5TWKzDOk86csfZpIiFAa9wfcWk7c2zPeODqGEOq-uxelSHDLGIk17BKVQik5SvAUhxPg5KCLnxeScLbiVBf6brcaxil7mEU2XiYVDkI9qq-kUbAGT9ze-KQVsF7MWZq7SM4i2DZZpBCfbVx3tlh_IIY4Q216QIQ946L-_w48FMrr6MNco6MYrQ2yPoRQ0lbHauzt0Eh2t-b0qSjNA-N4-pHoZYMcKkkqQrUdq-FOtc-SV3pEzcDotoTArFgKKhounjSpI4EVVgNS"
    }
  ];

  return (
    <div className="flex flex-col animate-fade-in-up">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 lg:pt-24 pb-20 bg-slate-50 dark:bg-background-dark">
        {/* Decor */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] rounded-full bg-accent-maroon/10 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-maroon/10 border border-accent-maroon/20 mb-6">
                <span className="material-symbols-outlined text-accent-maroon text-sm font-bold">verified</span>
                <span className="text-accent-maroon text-[10px] sm:text-xs font-black uppercase tracking-widest">Premier Consultancy Firm</span>
              </div>
              <h1 className="text-slate-900 dark:text-white text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.1] mb-8 tracking-tight">
                Bridging the Gap Between <span className="text-primary">Potential</span> and <span className="text-accent-maroon">Opportunity</span>
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
                Expert guidance in career development, academic excellence, and business strategy for ambitious professionals ready to elevate their future.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <button 
                  onClick={() => onNavigate(Page.CONTACT)}
                  className="px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all"
                >
                  Book a Consultation
                </button>
                <button 
                  onClick={() => onNavigate(Page.AI_CONSULTANT)}
                  className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-800 dark:text-white font-bold rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition-colors"
                >
                  Try AI Advisor
                </button>
              </div>
              <div className="mt-10 flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-500 font-medium">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800 bg-slate-200 overflow-hidden">
                      <img src={`https://picsum.photos/seed/${i + 10}/100`} alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <span>Trusted by 500+ Professionals</span>
              </div>
            </div>

            <div className="flex-1 w-full max-w-2xl relative">
              <div className="absolute inset-0 bg-accent-gold rounded-3xl rotate-3 translate-x-4 translate-y-4 opacity-10" />
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDczNd4Glk9XIRCYbJJCF_DfRGQ1CYXvrqW8uSS-G_iNMUWFTqMfOKYmabD0zCTIa0cErHLeTTD0QlXVe_szKTyf_IaKuDAaJus_u7rnfmxvk9OsL2xydieKsjKteCJz1ywb80QwkGg7AXQMnGCu-FiOOCTv1fxcB_kB_D62a65o2AtPGqcM9DODdcr9vPAbwlFE9tCyzG9J0XuPLtPL6k1algBOtIu7blBuMmivEBmg-nXGrIWvjMWv_qTuH7Nt3Q3w-HLi93dJ9nr" 
                  className="w-full h-full object-cover" 
                  alt="Business meeting"
                />
                <div className="absolute bottom-6 left-6 bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-700 animate-bounce-slow">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-accent-maroon/10 text-accent-maroon rounded-lg">
                      <span className="material-symbols-outlined font-bold">trending_up</span>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">Success Rate</p>
                      <p className="text-2xl font-black text-slate-900 dark:text-white">98.5%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Strip */}
      <section className="py-12 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <p className="text-center text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-8">Global Placement Partnerships</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50">
            <LogoItem icon="account_balance" label="UniGlobal" />
            <LogoItem icon="business" label="CorpInc" />
            <LogoItem icon="school" label="EduTech" />
            <LogoItem icon="rocket_launch" label="FutureWorks" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-accent-maroon text-sm font-black uppercase tracking-widest mb-4">Our Expertise</h2>
              <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                Core Services Designed for Your Growth
              </h3>
            </div>
            <button className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
              View all services <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <ServiceCard key={idx} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tight">Ready to Accelerate Your Journey?</h2>
          <p className="text-blue-100 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium">
            Whether you are aiming for a top-tier university or the next step in your executive career, our experts are here to guide you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => onNavigate(Page.CONTACT)}
              className="w-full sm:w-auto px-10 py-5 bg-white text-primary text-lg font-black rounded-xl shadow-2xl hover:bg-slate-50 transition-all active:scale-95"
            >
              Schedule Your Free Session
            </button>
            <button className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-white text-white text-lg font-black rounded-xl hover:bg-white/10 transition-all">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">What Our Clients Say</h2>
            <div className="h-1.5 w-24 bg-accent-gold mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {testimonials.map((t, idx) => (
              <TestimonialCard key={idx} {...t} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const LogoItem: React.FC<{ icon: string; label: string }> = ({ icon, label }) => (
  <div className="flex items-center gap-2 font-black text-2xl text-slate-400 dark:text-slate-600 grayscale hover:grayscale-0 transition-all">
    <span className="material-symbols-outlined text-4xl">{icon}</span> {label}
  </div>
);

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, image }) => (
  <div className="group flex flex-col bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-primary/50 transition-all hover:shadow-2xl overflow-hidden">
    <div className="h-56 w-full overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
    </div>
    <div className="p-8 flex flex-col flex-1">
      <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-accent-maroon group-hover:text-white transition-all">
        <span className="material-symbols-outlined text-2xl">{icon}</span>
      </div>
      <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4">{title}</h4>
      <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed font-medium">
        {description}
      </p>
      <button className="mt-auto inline-flex items-center text-primary font-black text-sm group-hover:gap-4 transition-all">
        Learn More <span className="material-symbols-outlined text-lg ml-1">chevron_right</span>
      </button>
    </div>
  </div>
);

const TestimonialCard: React.FC<TestimonialProps> = ({ name, role, quote, image }) => (
  <div className="bg-white dark:bg-slate-800 p-10 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 relative group">
    <span className="material-symbols-outlined absolute top-8 right-8 text-slate-100 dark:text-slate-700 text-7xl font-light">format_quote</span>
    <div className="flex items-center gap-5 mb-8">
      <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-slate-50 dark:border-slate-700">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div>
        <p className="font-black text-slate-900 dark:text-white text-lg">{name}</p>
        <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">{role}</p>
      </div>
    </div>
    <p className="text-slate-600 dark:text-slate-300 italic text-lg leading-relaxed relative z-10">"{quote}"</p>
    <div className="flex text-accent-gold mt-6 gap-0.5">
      {[1, 2, 3, 4, 5].map(i => <span key={i} className="material-symbols-outlined text-xl">star</span>)}
    </div>
  </div>
);

export default HomePage;
