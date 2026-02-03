
import React from 'react';
import { PillarProps } from '../types';

const AboutPage: React.FC = () => {
  const pillars: PillarProps[] = [
    {
      title: "Strategic Insight",
      description: "We utilize data-driven career mapping to ensure every step you take is calculated for success, moving beyond guesswork to precision planning.",
      icon: "strategy"
    },
    {
      title: "Personalized Guidance",
      description: "Every client is unique. Our academic advisory and career counseling are tailored specifically to your goals, strengths, and aspirations.",
      icon: "fingerprint"
    },
    {
      title: "Measurable Outcomes",
      description: "We focus on tangible results. Our success is defined by your achievements, ensuring a proven track record for individuals and organizations.",
      icon: "trending_up"
    }
  ];

  return (
    <div className="animate-fade-in-up">
      {/* Story Section */}
      <section className="py-20 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <div className="space-y-4">
                <span className="text-primary font-black text-sm tracking-[0.3em] uppercase">Our Story</span>
                <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight">
                  From Local Roots to Global Impact
                </h1>
                <p className="text-slate-600 dark:text-slate-400 text-xl font-medium leading-relaxed">
                  Adetokunbo Ayodeji Consult Ltd started as a vision to bridge the gap between ambition and achievement. Today, we are a premier consulting firm dedicated to career development and academic excellence.
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-xl font-medium leading-relaxed">
                  Our journey has taken us from humble beginnings to becoming a trusted global brand for strategy and mentorship, helping thousands of individuals navigate their professional paths with confidence.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-8 py-4 bg-primary text-white font-black rounded-xl hover:bg-blue-700 transition-colors">
                  Read Our Full Story
                </button>
                <button className="px-8 py-4 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-black rounded-xl hover:bg-slate-200 transition-colors">
                  Our Partners
                </button>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbaKR5plO6f-F6PtkOCMPat6_Oj3sipmuXvC3nIQNi6YB4JIyJDTdgoScax_rEWjpEHJJW0ENah7tG_4aseeOPMQ38N7QL35emSGH7b6tFVWGDH1WcIOMOWhiCKOBUjgdnNrRr9w5tvLVLEukzXHkvZrQ87HonZcTnIbR47cEhKQH-YwuzyIyYvD0dqCL6aH7ekpnpc2rOOqUyaG3rLsK6ij1aDT6_GRofXFMYZJCAgnq0Vq1b1y_TaJxyrRF2dxLg2vf_fpLXxSlb" 
                  alt="Global Strategy" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">The Three Pillars of Excellence</h2>
          <p className="text-slate-500 text-xl max-w-2xl mx-auto font-medium">Our approach is built on a foundation of strategic foresight, personalized attention, and results that matter.</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
          {pillars.map((p, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-800 p-10 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8">
                <span className="material-symbols-outlined text-3xl font-bold">{p.icon}</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4">{p.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-white dark:bg-background-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="flex-1 space-y-8">
              <div className="space-y-4">
                <span className="text-primary font-black text-sm tracking-[0.3em] uppercase">Our Impact</span>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight tracking-tight">
                  Capacity Building & Mentorship
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-xl leading-relaxed font-medium">
                  We believe in building capacity that lasts a lifetime. Our firm is dedicated to empowering the next generation through:
                </p>
                <ul className="space-y-6 pt-4">
                  <ImpactListItem text="Rigorous training workshops tailored to industry demands." />
                  <ImpactListItem text="Hands-on skill acquisition programs for practical experience." />
                  <ImpactListItem text="Dedicated mentorship connecting aspirants with veterans." />
                </ul>
              </div>
              <button className="px-10 py-5 bg-primary text-white font-black rounded-xl shadow-xl shadow-primary/20 hover:scale-105 transition-all">
                View Programs
              </button>
            </div>
            <div className="flex-1 relative w-full">
              <div className="absolute -top-10 -left-10 w-full h-full bg-primary/5 rounded-3xl -rotate-2" />
              <div className="relative aspect-square md:aspect-[5/4] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoOyqVEHPxlyUS36tWePreWsF-EuKRhZghXriLognznN_Uf4rQ_2-sWllLGq2Q0IH3-MY-0HpOFgfj2dPWTBq0vKCxSU3huSUL6wEwljjfn8XoCh4I5DERDX7d0tTjIOxxOhlmeFNqIvWFyk1FTPWa_n9KVKsWhKvQzLCmyxhBs6q17vIdi8fChb4n4CUmk2oAjqgKDfbvKOLkS5bDeTxBUwFwxkAKPncn_18YZiyTWbpk6_iDjPnbsqh5qa-a5sq0sR1JQGV0jL_6" 
                  alt="Mentorship" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-8 right-8 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-700">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-primary text-3xl">school</span>
                    <div>
                      <p className="text-3xl font-black text-slate-900 dark:text-white">500+</p>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Professionals Mentored</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ImpactListItem: React.FC<{ text: string }> = ({ text }) => (
  <li className="flex items-start gap-4">
    <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
      <span className="material-symbols-outlined text-primary text-sm font-black">check</span>
    </div>
    <span className="text-slate-900 dark:text-slate-200 font-bold text-lg">{text}</span>
  </li>
);

export default AboutPage;
