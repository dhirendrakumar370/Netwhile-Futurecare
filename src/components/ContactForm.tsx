import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

const verticals = [
  'Manpower Supply',
  'Solar Projects',
  'Loan Services',
  'Insurance Services',
  'Security Services',
  'CCTV & Surveillance',
  'IoT Solutions',
  'Software Development',
  'Business Consulting',
  'Bio Fuel & Green Energy',
  'Renewable Energy',
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }
    
    if (!formData.service) newErrors.service = 'Please select a service';
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-12 text-center">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-brand-blue mb-4">Message Received!</h3>
        <p className="text-slate-600 mb-8">
          Thank you for reaching out to Netwhile Futurecare. Our team will review your enquiry and get back to you within 24 hours.
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="text-brand-teal font-bold hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Full Name</label>
          <input 
            type="text" 
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe" 
            className={`w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all ${
              errors.name ? 'border-red-300 focus:ring-red-100 focus:border-red-400' : 'border-slate-200 focus:ring-brand-teal/20 focus:border-brand-teal'
            }`}
          />
          {errors.name && <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.name}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Phone Number</label>
          <input 
            type="tel" 
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 000 000 0000" 
            className={`w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all ${
              errors.phone ? 'border-red-300 focus:ring-red-100 focus:border-red-400' : 'border-slate-200 focus:ring-brand-teal/20 focus:border-brand-teal'
            }`}
          />
          {errors.phone && <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.phone}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
        <input 
          type="email" 
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com" 
          className={`w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all ${
            errors.email ? 'border-red-300 focus:ring-red-100 focus:border-red-400' : 'border-slate-200 focus:ring-brand-teal/20 focus:border-brand-teal'
          }`}
        />
        {errors.email && <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.email}</p>}
      </div>

      <div>
        <label htmlFor="service" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Service Interested In</label>
        <select 
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className={`w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all appearance-none bg-no-repeat bg-[right_1rem_center] bg-[length:1em_1em] ${
            errors.service ? 'border-red-300 focus:ring-red-100 focus:border-red-400' : 'border-slate-200 focus:ring-brand-teal/20 focus:border-brand-teal'
          }`}
        >
          <option value="">Select a vertical</option>
          {verticals.map(v => <option key={v} value={v}>{v}</option>)}
        </select>
        {errors.service && <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.service}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Message</label>
        <textarea 
          id="message"
          name="message"
          rows={4} 
          value={formData.message}
          onChange={handleChange}
          placeholder="How can we help you build the future?" 
          className={`w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all resize-none ${
            errors.message ? 'border-red-300 focus:ring-red-100 focus:border-red-400' : 'border-slate-200 focus:ring-brand-teal/20 focus:border-brand-teal'
          }`}
        />
        {errors.message && <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.message}</p>}
      </div>

      <button 
        type="submit"
        disabled={status === 'submitting'}
        className="w-full py-4 bg-brand-blue text-white font-bold rounded-lg hover:bg-slate-800 transition-all disabled:opacity-70 flex items-center justify-center gap-2 group shadow-lg active:scale-[0.98]"
      >
        {status === 'submitting' ? (
          'Sending Enquiry...'
        ) : (
          <>
            Send Message 
            <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </>
        )}
      </button>
    </form>
  );
}
