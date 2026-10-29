import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      
      // Reset after 3 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }, 1000);
  };

  return (
    <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 backdrop-blur-sm">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-xl font-bold text-white mb-2">Subscribe to our newsletter</h3>
          <p className="text-sm text-slate-400">Stay updated with our latest services, tech insights, and corporate announcements.</p>
        </div>
        
        <div className="flex-1 w-full max-w-md">
          <form onSubmit={handleSubmit} className="relative group">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center justify-center gap-2 py-3 px-6 bg-emerald-500/10 text-emerald-400 rounded-xl border border-emerald-500/20"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-semibold">Thank you for subscribing!</span>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-slate-900 border border-slate-700 text-white rounded-xl px-5 py-3 outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-all placeholder:text-slate-600 text-sm"
                    disabled={status === 'loading'}
                  />
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="bg-brand-teal hover:bg-teal-600 text-white font-bold rounded-xl px-8 py-3 transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap shadow-lg shadow-brand-teal/20"
                  >
                    {status === 'loading' ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Subscribe
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
            <p className="mt-3 text-[10px] text-slate-500 text-center md:text-left">
              By subscribing, you agree to our Privacy Policy and consent to receive updates.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
