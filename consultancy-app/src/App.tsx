import React, { useState } from 'react';
import { 
  TrendingUp, Menu, X, Users, Lightbulb, Mic, Download, Trash2, 
  Plus, Mail, Linkedin, Twitter, Briefcase, Award, GraduationCap, 
  Sparkles, ArrowRight, Send 
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', service: 'Consulting & Advisory' });

  const [resources, setResources] = useState([
    { id: 1, title: 'PLASMID PROFILING OF BACTERIAL Isolates', summary: 'Ever wondered what lurk on your street food, my study reveals chicken drumsticks sold are teeming with bacteria.', category: 'Handbooks', tag: 'Handbook' },
    { id: 2, title: '12-Week Founders Cohort Handbook', summary: 'See the pathway to structured scale before you commit.', category: 'Handbooks', tag: 'Handbook' },
    { id: 3, title: '90-Day Growth Sprint Template', summary: 'Plan, track and execute growth like a seasoned strategist.', category: 'Templates', tag: 'Template' }
  ]);

  const [newResource, setNewResource] = useState({ title: '', summary: '', category: 'Templates' });

  const handleAddResource = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newResource.title) return;
    setResources([...resources, { id: Date.now(), ...newResource, tag: newResource.category.slice(0, -1) || 'Resource' }]);
    setNewResource({ title: '', summary: '', category: 'Templates' });
  };

  const handleDeleteResource = (id: number) => {
    setResources(resources.filter(r => r.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[#0B1120] text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-600 rounded-xl shadow-lg shadow-blue-500/30">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">Strategy<span className="text-blue-500">&</span>Growth</span>
            </div>

            <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
              <a href="#services" className="text-slate-300 hover:text-white transition">Services</a>
              <a href="#resources" className="text-slate-300 hover:text-white transition">Resources</a>
              <a href="#book" className="text-slate-300 hover:text-white transition">Book Call</a>
              <a href="#book" className="px-5 py-2.5 rounded-lg bg-slate-800 text-white hover:bg-slate-700 border border-slate-700 transition">Login</a>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-slate-300 hover:text-white">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-[#0B1120] text-white pt-16 pb-24 border-b border-slate-800">
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-300 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Strategy, Structure, Scalable Growth</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto">
            Turn vision into a clear, <span className="text-blue-500">actionable growth path.</span>
          </h1>

          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Empowering businesses through structured frameworks, deep-dive diagnostics, and scalable execution strategies.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#book" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-600/30 transition flex items-center justify-center space-x-2">
              <span>Book a Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#services" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-800 border border-slate-700 text-white font-semibold hover:bg-slate-800 transition">
              Explore Services
            </a>
          </div>

          {/* Stats Bar */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-slate-800">
            <div className="flex flex-col items-center">
              <TrendingUp className="w-6 h-6 text-blue-400 mb-1" />
              <span className="text-2xl font-bold text-white">90-Day</span>
              <span className="text-xs text-slate-400">Growth Sprints</span>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-6 h-6 text-blue-400 mb-1" />
              <span className="text-2xl font-bold text-white">12-Week</span>
              <span className="text-xs text-slate-400">Founder Cohorts</span>
            </div>
            <div className="flex flex-col items-center">
              <Sparkles className="w-6 h-6 text-blue-400 mb-1" />
              <span className="text-2xl font-bold text-white">100+</span>
              <span className="text-xs text-slate-400">Strategies Shipped</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">What We Offer</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-1">Service Offerings</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Coaching & Mentoring</h3>
              <p className="text-sm text-slate-600 mb-4">
                Accelerate your personal and professional journey through one-on-one tailored coaching.
              </p>
              <a href="#book" className="inline-flex items-center space-x-1 text-sm text-blue-600 font-semibold">
                <span>Get started</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-4">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Consulting & Advisory</h3>
              <p className="text-sm text-slate-600 mb-4">
                Transform business structure and clarity with customized deep-dive diagnostics.
              </p>
              <a href="#book" className="inline-flex items-center space-x-1 text-sm text-blue-600 font-semibold">
                <span>Get started</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-4">
                <Mic className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Keynote Speaking</h3>
              <p className="text-sm text-slate-600 mb-4">
                Inspire your audience with actionable frameworks on leadership and scaling.
              </p>
              <a href="#book" className="inline-flex items-center space-x-1 text-sm text-blue-600 font-semibold">
                <span>Get started</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Vault */}
      <section id="resources" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Resource Vault</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-1">Insightful Downloadables</h2>
          </div>

          <div className="space-y-4">
            {resources.map((item) => (
              <div key={item.id} className="p-5 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="text-base font-bold text-slate-900">{item.title}</h4>
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">{item.tag}</span>
                  </div>
                  <p className="text-xs text-slate-600">{item.summary}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button onClick={() => handleDeleteResource(item.id)} className="p-2 text-slate-400 hover:text-red-500">
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-xs font-semibold flex items-center space-x-1">
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Call */}
      <section id="book" className="py-16 bg-slate-50">
        <div className="max-w-md mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-slate-900">Book a Strategy Call</h2>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); alert('Booking submitted!'); }} className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4 shadow-sm">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
              <input type="text" required className="w-full px-3 py-2 border rounded-lg text-sm bg-slate-50" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Email</label>
              <input type="email" required className="w-full px-3 py-2 border rounded-lg text-sm bg-slate-50" placeholder="jane@company.com" />
            </div>
            <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold text-sm">Submit Request</button>
          </form>
        </div>
      </section>
    </div>
  );
}
