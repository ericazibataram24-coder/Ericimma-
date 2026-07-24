import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

export const Booking: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('Consulting & Advisory');
  const [date, setDate] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.from('bookings').insert([
      { client_name: name, client_email: email, service, booking_date: date }
    ]);

    if (error) {
      alert('Booking request failed: ' + error.message);
    } else {
      alert('Strategy call requested! We will reach out shortly.');
      setName('');
      setEmail('');
      setDate('');
    }
  };

  return (
    <section id="booking" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">Book a Strategy Call</h2>
        <form onSubmit={handleSubmit} className="space-y-4 bg-slate-50 p-8 rounded-lg border border-slate-200 shadow-sm">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="w-full p-3 border border-slate-300 rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full p-3 border border-slate-300 rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Service Required</label>
            <select value={service} onChange={(e) => setService(e.target.value)} className="w-full p-3 border border-slate-300 rounded-md">
              <option value="Consulting & Advisory">Consulting & Advisory</option>
              <option value="Coaching & Mentoring">Coaching & Mentoring</option>
              <option value="Speaking Engagement">Speaking Engagement</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Preferred Date</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required className="w-full p-3 border border-slate-300 rounded-md" />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700">
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
};
