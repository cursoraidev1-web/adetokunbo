
import React from 'react';
import { Page, ServiceCardProps, TestimonialProps } from '../types';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const services: ServiceCardProps[] = [
    {
      title: "Career Consulting & CV Writing",
      description: "Professional CV writing for working professionals, LinkedIn optimization, interview preparation, and strategic career development guidance to secure meaningful employment.",
      icon: "work",
      image: "https://images.unsplash.com/photo-1653669487003-7d89b2020f3c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#"
    },
    {
      title: "Academic Support & Scholarships",
      description: "Academic CV development, Statements of Purpose, scholarship advisory, university admissions guidance, and support for gaining admission to top institutions worldwide.",
      icon: "school",
      image: "https://images.unsplash.com/photo-1758519290830-5462f4924bb5?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#"
    },
    {
      title: "Research & Business Strategy",
      description: "Research proposals, undergraduate and postgraduate projects, dissertation support, business plans, professional documentation, and strategic consulting services.",
      icon: "query_stats",
      image: "https://img.freepik.com/free-photo/african-american-man-woman-solving-freelance-tasks-home_482257-118989.jpg",
      link: "#"
    }
  ];

  const testimonials: TestimonialProps[] = [
    {
      name: "A.O.",
      role: "Career Professional",
      quote: "I got two interview invites within weeks of updating my CV. Both processes went well and I eventually received two job offers. I honestly wasn't expecting that.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=80"
    },
    {
      name: "T.K.",
      role: "Software Engineer",
      quote: "I had been applying for months with no response. After my CV rewrite, I got shortlisted twice and secured a new role.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop&q=80"
    },
    {
      name: "R.A.",
      role: "Graduate Student",
      quote: "My SOP was accepted and I received admission into my chosen program. The structure and clarity made a big difference.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&q=80"
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
                  <div className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800 bg-slate-200 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop&q=80" alt="Avatar" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800 bg-slate-200 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80" alt="Avatar" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800 bg-slate-200 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&q=80" alt="Avatar" className="w-full h-full object-cover" />
                  </div>
                </div>
                <span>Trusted by 500+ Professionals</span>
              </div>
            </div>

            <div className="flex-1 w-full max-w-2xl relative">
              <div className="absolute inset-0 bg-accent-gold rounded-3xl rotate-3 translate-x-4 translate-y-4 opacity-10" />
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                <img 
                  src="https://plus.unsplash.com/premium_photo-1681398556150-7fa0d1e72703?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
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
      <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
        {description}
      </p>
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
