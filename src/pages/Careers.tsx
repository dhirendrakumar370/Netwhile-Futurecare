import { useState } from 'react';
import { motion } from 'motion/react';
import { Briefcase, MapPin, Clock, Send, CheckCircle2, GraduationCap, Users } from 'lucide-react';
import { Placeholder } from '../components/ui/Placeholder';
import { ASSET_IMAGES } from '../constants/images';

const jobs = [
  { title: 'Business Development Manager', dept: 'Sales', location: 'Lucknow', type: 'Full-time' },
  { title: 'Solar Site Engineer', dept: 'Operations', location: 'On-site (UP)', type: 'Full-time' },
  { title: 'IoT Implementation Specialist', dept: 'Technology', location: 'Lucknow', type: 'Full-time' },
  { title: 'HR Executive', dept: 'Human Resources', location: 'Lucknow', type: 'Full-time' },
  { title: 'CCTV Technician', dept: 'Technical Support', location: 'Multiple Cities', type: 'Contract' },
];

const benefits = [
  'Competitive Compensation Packages',
  'Growth Opportunities & Mentorship',
  'Collaborative & Innovative Culture',
  'Pan-India Exposure & Large-scale Projects',
  'Health & Wellness Support',
  'Continuous Learning & Skill Development',
];

export default function Careers() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-brand-blue py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Build the Future With Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 max-w-2xl mx-auto"
          >
            Join a dynamic team dedicated to delivering integrated solutions and driving innovation across India.
          </motion.p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl font-bold text-brand-blue mb-8">Why Join Netwhile Futurecare?</h2>
            <p className="text-slate-600 mb-10 leading-relaxed">
              At Netwhile Futurecare, we believe that our people are our greatest asset. We foster a culture of innovation, accountability, and continuous learning, where every team member is empowered to make a real impact.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                  <p className="text-sm font-medium text-slate-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
          <Placeholder 
            icon={Users} 
            title="Join Our Community" 
            subtitle="Career Opportunities" 
            theme="teal" 
            aspectRatio="wide" 
            src={ASSET_IMAGES.CORPORATE.TEAM_MEETING}
          />
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <h2 className="text-3xl font-bold text-brand-blue">Current Openings</h2>
            <div className="text-sm font-medium text-slate-500">
              Showing {jobs.length} active positions
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Job Title</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Department</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Location</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {jobs.map((job) => (
                    <tr key={job.title} className="hover:bg-slate-50 transition-colors group">
                      <td className="px-6 py-5">
                        <div className="font-bold text-brand-blue group-hover:text-brand-teal transition-colors">{job.title}</div>
                        <div className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                          <Clock className="w-3 h-3" /> {job.type}
                        </div>
                      </td>
                      <td className="px-6 py-5 text-sm text-slate-600 font-medium">
                        <span className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-slate-400" /> {job.dept}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-sm text-slate-600">
                        <span className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-slate-400" /> {job.location}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <button className="text-sm font-bold text-brand-teal hover:underline">Apply Now</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-brand-teal rounded-3xl p-10 md:p-16 text-white grid lg:grid-cols-2 gap-12 items-center overflow-hidden relative">
          <div className="absolute inset-0 z-0">
             <img 
               src={ASSET_IMAGES.CORPORATE.INTERNSHIP} 
               alt="Internships" 
               referrerPolicy="no-referrer"
               className="w-full h-full object-cover opacity-10"
             />
          </div>
          <div className="relative z-10">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold mb-6">Freshers & Internships</h2>
            <p className="text-teal-50 mb-8 leading-relaxed">
              Start your career on the right track. We offer internship programs for students and fresh graduates in engineering, business, and technology. Gain hands-on experience on real-world projects and grow with us.
            </p>
            <a 
              href="mailto:careers@netwhile.com" 
              className="inline-flex items-center gap-2 text-white font-bold hover:underline"
            >
              Enquire about Internships <Send className="w-4 h-4" />
            </a>
          </div>
          <div className="bg-white/10 p-10 rounded-2xl border border-white/20 backdrop-blur-md relative z-10">
            <h4 className="text-xl font-bold mb-6">Drop Your Resume</h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white/30 transition-all placeholder:text-teal-100"
                  required
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white/30 transition-all placeholder:text-teal-100"
                  required
                />
              </div>
              <div>
                <select 
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white/30 transition-all text-teal-100"
                  required
                >
                  <option value="" className="text-slate-900">Select Position of Interest</option>
                  {jobs.map(j => <option key={j.title} value={j.title} className="text-slate-900">{j.title}</option>)}
                  <option value="Internship" className="text-slate-900">Internship</option>
                  <option value="Other" className="text-slate-900">Other</option>
                </select>
              </div>
              <button 
                type="submit"
                disabled={formState !== 'idle'}
                className="w-full py-4 bg-white text-brand-teal font-bold rounded-lg hover:bg-teal-50 transition-all disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {formState === 'idle' && <>Submit Application <Send className="w-4 h-4" /></>}
                {formState === 'submitting' && 'Processing...'}
                {formState === 'success' && 'Application Sent!'}
              </button>
            </form>
            <p className="text-[10px] text-teal-100 mt-4 text-center">
              By submitting, you agree to our recruitment privacy policy.
            </p>
          </div>
        </div>
      </section>

      {/* HR Contact Block */}
      <section className="py-24 px-6 bg-slate-50 border-t border-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <img 
            src={ASSET_IMAGES.CORPORATE.TEAM_MEETING} 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h2 className="text-2xl font-bold text-brand-blue mb-6">Connect with HR</h2>
          <p className="text-slate-600 mb-8">
            Have questions about a role or our hiring process? Reach out to our human resources team directly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <a href="mailto:careers@netwhile.com" className="font-bold text-brand-teal hover:underline">careers@netwhile.com</a>
            <span className="hidden sm:inline text-slate-300">|</span>
            <span className="font-bold text-brand-blue">+91 000 000 0000</span>
          </div>
        </div>
      </section>
    </div>
  );
}
