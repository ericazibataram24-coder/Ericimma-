import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Mail, 
  Phone, 
  Award, 
  CheckCircle, 
  Send
} from 'lucide-react';

export default function App() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const FORMSPREE_URL = "https://formspree.io/f/mgogndyk";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("There was an issue sending your request. Please try again or reach out via direct email.");
      }
    } catch (error) {
      alert("Error submitting request. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      
      {/* HEADER */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Sparkles className="w-6 h-6 text-indigo-400" />
          <span className="text-xl font-bold tracking-wide text-white">Eric Azibataram</span>
        </div>
        <nav className="hidden md:flex space-x-6 text-sm text-slate-300">
          <a href="#about" className="hover:text-indigo-400 transition">About Me</a>
          <a href="#proof" className="hover:text-indigo-400 transition">Impact & Credentials</a>
          <a href="#book" className="hover:text-indigo-400 transition">Book Consultation</a>
          <a href="#contact" className="hover:text-indigo-400 transition">Contact</a>
        </nav>
        <a 
          href="#book" 
          className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition"
        >
          Book Consultation
        </a>
      </header>

      {/* HERO */}
      <section className="relative px-6 py-20 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 bg-indigo-950/80 border border-indigo-800 text-indigo-300 px-3 py-1 rounded-full text-xs font-medium mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Strategic Growth & Operational Leadership</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Empowering Business Growth & Executing Strategic Solutions
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-8">
          Welcome to my official listing. I assist startups, brands, and organizations in navigating operational challenges, risk mitigation, and digital expansion.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#book" 
            className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-xl flex items-center justify-center space-x-2 transition"
          >
            <span>Book a Strategy Session</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a 
            href="#about" 
            className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold px-6 py-3 rounded-xl transition"
          >
            Read Professional Bio
          </a>
        </div>
      </section>

      {/* ABOUT ME / BIO */}
      <section id="about" className="py-16 px-6 bg-slate-900/60 border-y border-slate-800/80">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          <div className="relative">
            <div className="w-full h-96 bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 flex items-center justify-center relative">
              <img 
                src="/profile.jpg" 
                alt="Eric Azibataram Professional Profile" 
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  e.currentTarget.src = "https://lh3.googleusercontent.com/d/12nJeWZMXQeJjQWEHQ-7KvZfVEHPo3oNm";
                }}
              />
              <div className="absolute bottom-3 left-3 right-3 bg-slate-950/80 backdrop-blur-md p-3 rounded-lg border border-slate-800 text-xs text-slate-300 flex items-center space-x-2">
                <Award className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Specialist in Risk Management & Leadership Advisory</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Hello, I'm Eric Azibataram.
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Welcome to my professional consultancy portal. I am a dedicated strategist and advisor with expertise grounded in scientific analysis, risk mitigation, and digital brand development.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              With a background in biological sciences combined with professional qualifications in risk assessment and executive leadership training, I help organizations solve complex operational problems and scale efficiently.
            </p>

            <div className="space-y-3 mb-6 text-sm text-slate-300">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Microbiology Graduate — Analytical & Scientific Problem Solving</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Certified Specialist in Risk Management & Mitigation Strategies</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Leadership Summit Alum & Public Keynote Facilitator</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* IMPACT GALLERY */}
      <section id="proof" className="py-16 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Proof of Experience & Impact</h2>
          <p className="text-slate-400 text-sm">Visual highlights from professional summits, strategy sessions, and project deployments.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
            <div className="h-48 bg-slate-800">
              <img src="https://lh3.googleusercontent.com/d/12nJeWZMXQeJjQWEHQ-7KvZfVEHPo3oNm" alt="Leadership Summits" className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-white text-sm mb-1">Executive Leadership</h3>
              <p className="text-xs text-slate-400">Participating in leadership training and keynote sessions.</p>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
            <div className="h-48 bg-slate-800">
              <img src="https://lh3.googleusercontent.com/d/12nJeWZMXQeJjQWEHQ-7KvZfVEHPo3oNm" alt="Strategy Sessions" className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-white text-sm mb-1">Strategic Operations</h3>
              <p className="text-xs text-slate-400">Advising businesses on structured growth and workflows.</p>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
            <div className="h-48 bg-slate-800">
              <img src="https://lh3.googleusercontent.com/d/12nJeWZMXQeJjQWEHQ-7KvZfVEHPo3oNm" alt="Risk Assessment" className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-white text-sm mb-1">Risk Assessment</h3>
              <p className="text-xs text-slate-400">Evaluating risks and crafting mitigation frameworks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section id="book" className="py-16 px-6 bg-slate-900/80 border-t border-slate-800">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Book a Strategy Session</h2>
            <p className="text-slate-400 text-sm">Fill out the details below, and your request will be delivered straight to my email inbox.</p>
          </div>

          {submitted ? (
            <div className="bg-emerald-950/60 border border-emerald-800 p-8 rounded-2xl text-center space-y-3">
              <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto" />
              <h3 className="text-xl font-bold text-white">Request Received!</h3>
              <p className="text-sm text-slate-300">
                Thank you for reaching out. Your request has been sent directly to my inbox at <strong className="text-white">ericazibataram24@gmail.com</strong> and I will get back to you shortly.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-4 text-xs text-indigo-400 underline hover:text-indigo-300"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-slate-950 border border-slate-800 p-6 md:p-8 rounded-2xl space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Full Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  placeholder="e.g. John Doe"
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 text-sm focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  placeholder="john@example.com"
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 text-sm focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Phone / WhatsApp Number</label>
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="+234 ..."
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 text-sm focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Service Requested</label>
                <select 
                  name="service"
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 text-sm focus:outline-none focus:border-indigo-500"
                >
                  <option value="Leadership Strategy">Leadership & Operational Strategy</option>
                  <option value="Risk Assessment">Risk Assessment & Mitigation</option>
                  <option value="Brand Expansion">Digital Brand & Platform Expansion</option>
                  <option value="Keynote Speaking">Keynote Speaking / Facilitation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Project Brief / Message</label>
                <textarea 
                  name="message" 
                  rows={4} 
                  required 
                  placeholder="Tell me a bit about your organization or project goals..."
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 text-sm focus:outline-none focus:border-indigo-500"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-lg flex items-center justify-center space-x-2 transition disabled:opacity-50"
              >
                {loading ? (
                  <span>Sending Request...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Request Directly</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="py-12 px-6 border-t border-slate-800 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Direct Contact Channels</h3>
            <p className="text-slate-400 text-sm">Reach out directly via email, WhatsApp, or phone for immediate consultation.</p>
          </div>

          <div className="space-y-3 text-sm">
            <a href="mailto:ericazibataram24@gmail.com" className="flex items-center space-x-3 text-slate-300 hover:text-indigo-400 transition">
              <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>ericazibataram24@gmail.com</span>
            </a>
            <a href="tel:+2348158907496" className="flex items-center space-x-3 text-slate-300 hover:text-indigo-400 transition">
              <Phone className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>+234 815 890 7496</span>
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Eric Azibataram. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a 
              href="https://www.linkedin.com/in/eric-azibataram-3168012b0" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-indigo-400 transition flex items-center space-x-1 text-slate-300"
            >
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://www.youtube.com/@Ericnaijagist" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-red-400 transition flex items-center space-x-1 text-slate-300"
            >
              <span>Eric naija gist</span>
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
