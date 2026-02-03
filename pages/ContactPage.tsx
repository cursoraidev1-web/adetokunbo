
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the WhatsApp message
    const phoneNumber = "2348162703599";
    const serviceLabels: Record<string, string> = {
      career: "Career Development Advice",
      academic: "Academic Consulting",
      relocation: "Study Abroad / Relocation",
      other: "General Inquiry"
    };

    const selectedService = serviceLabels[formData.service] || formData.service;
    
    const text = `Hello Adetokunbo Ayodeji Consult,

I would like to make an inquiry.

*Name:* ${formData.name}
*Email:* ${formData.email}
*Interested In:* ${selectedService}
*Message:* ${formData.message}

Looking forward to hearing from you!`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    // Show success state briefly before redirecting
    setSubmitted(true);
    
    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', service: '', message: '' });
    }, 3000);
  };

  return (
    <div className="animate-fade-in-up py-12 lg:py-24 bg-slate-50 dark:bg-background-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Form */}
          <div className="flex-1 space-y-10">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight">Let's Build Your Future Together</h1>
              <p className="text-slate-500 text-xl font-medium leading-relaxed">
                Whether you need career advice or academic consulting, fill out the form below to start your journey with us via WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-slate-900 dark:text-slate-200 font-bold text-sm uppercase tracking-widest">Your Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="Enter your full name" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-6 py-4 rounded-xl border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:ring-primary focus:border-primary transition-all" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-slate-900 dark:text-slate-200 font-bold text-sm uppercase tracking-widest">Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="name@example.com" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-6 py-4 rounded-xl border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:ring-primary focus:border-primary transition-all" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-slate-900 dark:text-slate-200 font-bold text-sm uppercase tracking-widest">Service Interested In</label>
                <select 
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full px-6 py-4 rounded-xl border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:ring-primary focus:border-primary transition-all"
                >
                  <option value="">Select a service</option>
                  <option value="career">Career Development Advice</option>
                  <option value="academic">Academic Consulting</option>
                  <option value="relocation">Study Abroad / Relocation</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-slate-900 dark:text-slate-200 font-bold text-sm uppercase tracking-widest">How can we help?</label>
                <textarea 
                  required
                  rows={5}
                  placeholder="Tell us more about your goals..." 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-6 py-4 rounded-xl border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:ring-primary focus:border-primary transition-all"
                />
              </div>

              <button 
                type="submit"
                disabled={submitted}
                className={`w-full sm:w-auto px-10 py-5 ${submitted ? 'bg-green-600' : 'bg-primary'} text-white font-black rounded-xl shadow-xl transition-all flex items-center justify-center gap-3 hover:scale-105 active:scale-95`}
              >
                {submitted ? (
                  <>Redirecting to WhatsApp... <span className="material-symbols-outlined">done_all</span></>
                ) : (
                  <>Send via WhatsApp <span className="material-symbols-outlined">send</span></>
                )}
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="w-full lg:w-[450px] space-y-10">
            {/* Global Card */}
            <div className="bg-white dark:bg-slate-800 p-10 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 relative overflow-hidden group">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-500" />
              <div className="relative z-10 space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-4xl font-bold">public</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Consulting Globally</h3>
                <p className="text-slate-500 text-lg font-medium leading-relaxed">
                  We provide remote services worldwide. Wherever you are located, expert advice is just a click away. We bridge the gap between your location and your aspirations.
                </p>
              </div>
            </div>

            {/* Info Card */}
            <div className="bg-primary p-10 rounded-3xl text-white shadow-2xl space-y-10 relative overflow-hidden">
               <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
               
               <div className="relative z-10 space-y-10">
                <h3 className="text-2xl font-black tracking-tight">Contact Information</h3>
                
                <div className="space-y-8">
                  <ContactItem icon="call" label="Phone / WhatsApp" value="+234 816 270 3599" href="tel:+2348162703599" />
                  <ContactItem icon="mail" label="Email" value="adetokunboayodejiconsult@gmail.com" href="mailto:adetokunboayodejiconsult@gmail.com" />
                </div>

                <div className="pt-10 border-t border-white/20">
                  <p className="text-sm font-black uppercase tracking-widest opacity-80 mb-6">Connect with us</p>
                  <div className="flex gap-4">
                    <SocialCircle label="LinkedIn" />
                    <SocialCircle label="Facebook" />
                    <SocialCircle label="Instagram" />
                  </div>
                </div>

                <a 
                  href="https://wa.me/2348162703599"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-5 bg-white text-primary font-black rounded-xl hover:bg-slate-50 transition-all shadow-2xl active:scale-95"
                >
                  <span className="material-symbols-outlined">forum</span>
                  Direct WhatsApp Chat
                </a>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactItem: React.FC<{ icon: string; label: string; value: string; href: string }> = ({ icon, label, value, href }) => (
  <a href={href} className="flex items-start gap-5 group">
    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
      <span className="material-symbols-outlined text-white">{icon}</span>
    </div>
    <div>
      <p className="text-xs font-black uppercase tracking-widest opacity-70 mb-1">{label}</p>
      <p className="text-lg font-bold break-all group-hover:underline">{value}</p>
    </div>
  </a>
);

const SocialCircle: React.FC<{ label: string }> = ({ label }) => (
  <a href="#" className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors text-xs font-bold">
    {label.charAt(0)}
  </a>
);

export default ContactPage;
