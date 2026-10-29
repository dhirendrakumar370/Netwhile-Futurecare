import { motion } from 'motion/react';
import { Target, Eye, Heart, CheckCircle2, ShieldCheck, MapPin, Building2, User } from 'lucide-react';
import { Placeholder } from '../components/ui/Placeholder';
import { ASSET_IMAGES } from '../constants/images';

const values = [
  { 
    title: 'Excellence', 
    desc: 'We strive for the highest standards in every project and service we deliver.',
    icon: Target,
    color: 'bg-blue-50 text-blue-600'
  },
  { 
    title: 'Integrity', 
    desc: 'Transparency and honesty are the foundations of our professional relationships.',
    icon: ShieldCheck,
    color: 'bg-emerald-50 text-emerald-600'
  },
  { 
    title: 'Innovation', 
    desc: 'Embracing future-ready technology to provide cutting-edge solutions today.',
    icon: Eye,
    color: 'bg-purple-50 text-purple-600'
  },
];

const milestones = [
  { year: '2024', title: 'Foundation', desc: 'Netwhile Futurecare Private Limited incorporated in Lucknow.' },
  { year: '2024', title: 'Vertical Expansion', desc: 'Launched Manpower, Solar, and Security services concurrently.' },
  { year: '2025', title: 'Tech Integration', desc: 'Established dedicated IoT and Software development wings.' },
  { year: '2025', title: 'Pan-India Reach', desc: 'Expanding operations to over 25 cities across India.' },
];

export default function About() {
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
            Building the Future, Together
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 max-w-2xl mx-auto"
          >
            A multi-sector service & solutions company dedicated to excellence and innovation.
          </motion.p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-brand-teal font-bold text-xs uppercase tracking-widest mb-4 block">About Netwhile Futurecare</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-8 leading-tight">A Government Registered Solutions Partner</h2>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                Based in Lucknow, Uttar Pradesh, <strong>Netwhile Futurecare Private Limited</strong> (CIN: U78300UP2024PTC211778) is a dynamic multi-sector enterprise delivering integrated solutions across manpower, solar energy, finance, security, and technology.
              </p>
              <p>
                We were founded with a singular vision: to become a "one-stop future-ready solutions partner" for businesses and individuals. By combining traditional service sectors like manpower and security with advanced domains like IoT and Solar, we provide a holistic ecosystem that simplifies operations and drives sustainable growth.
              </p>
              <p>
                Our commitment to quality, transparency, and technical precision has allowed us to rapidly scale and build a reputation as a trusted partner for diverse industries.
              </p>
            </div>
          </div>
          <div className="mt-16 lg:mt-0 relative">
            <Placeholder 
              icon={Building2} 
              title="Corporate Center" 
              subtitle="Lucknow, Uttar Pradesh" 
              theme="slate" 
              aspectRatio="portrait" 
              src={ASSET_IMAGES.CORPORATE.OFFICE_LUCKNOW}
            />
            <div className="absolute top-12 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[200px]">
              <div className="flex items-center gap-2 text-brand-teal font-bold text-xl mb-1">
                <CheckCircle2 className="w-5 h-5" /> 100%
              </div>
              <p className="text-xs font-bold text-brand-blue uppercase">Commitment to Integrity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col">
              <Placeholder 
                icon={Target} 
                title="Our Mission" 
                theme="teal" 
                aspectRatio="video" 
                src={ASSET_IMAGES.CORPORATE.MISSION}
                className="mb-8"
              />
              <p className="text-sm text-slate-600 leading-relaxed text-center px-4">
                To deliver integrated, high-quality, and cost-effective solutions that empower our clients to achieve their goals with confidence and ease.
              </p>
            </div>
            <div className="flex flex-col">
              <Placeholder 
                icon={Eye} 
                title="Our Vision" 
                theme="blue" 
                aspectRatio="video" 
                src={ASSET_IMAGES.CORPORATE.VISION}
                className="mb-8"
              />
              <p className="text-sm text-slate-600 leading-relaxed text-center px-4">
                To be India's most trusted multi-sector partner, recognized for our commitment to future-ready technology and professional excellence.
              </p>
            </div>
            <div className="flex flex-col">
              <Placeholder 
                icon={Heart} 
                title="Our Values" 
                theme="indigo" 
                aspectRatio="video" 
                src={ASSET_IMAGES.CORPORATE.VALUES}
                className="mb-8"
              />
              <p className="text-sm text-slate-600 leading-relaxed text-center px-4">
                Excellence, Integrity, and Innovation drive every decision we make and every service we provide to our valued clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={ASSET_IMAGES.HERO.FUTURE_TECH} 
            alt="Future Path Background" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-5 grayscale"
          />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold text-brand-blue mb-16 text-center text-balance">The Netwhile Journey: Building Sustainable Impact</h2>
          <div className="space-y-12 relative before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-0.5 before:bg-brand-teal/20">
            {milestones.map((m, idx) => (
              <div key={m.title} className="relative pl-12">
                <div className="absolute left-0 top-1.5 w-9 h-9 rounded-full bg-white border-4 border-brand-teal z-10 flex items-center justify-center font-bold text-[10px] text-brand-blue">
                  {m.year}
                </div>
                <h4 className="text-lg font-bold text-brand-blue mb-1">{m.title}</h4>
                <p className="text-sm text-slate-500">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Leadership Team */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-blue mb-4 text-center">Our Leadership</h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-16">
            Meet the visionary team driving innovation and excellence at Netwhile Futurecare.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {ASSET_IMAGES.CORPORATE.TEAM_MEMBERS.map((src, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-slate-200 group">
                <Placeholder 
                  src={src}
                  icon={User}
                  theme="blue"
                  aspectRatio="portrait"
                  className="rounded-none shadow-none border-none"
                />
                <div className="p-6 text-center">
                  <h4 className="font-bold text-brand-blue mb-1">
                    {['Vikram Singh', 'Neha Sharma', 'Arjun Verma', 'Priya Das'][i]}
                  </h4>
                  <p className="text-xs text-brand-teal font-medium uppercase tracking-wider">
                    {['Managing Director', 'Operations Head', 'Technical Director', 'HR Head'][i]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Details Block */}
      <section className="py-24 px-6 bg-brand-blue text-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold mb-8">Registered Information</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <Building2 className="w-5 h-5 text-brand-teal shrink-0" />
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase mb-1">Company Name</p>
                  <p className="text-sm font-medium">Netwhile Futurecare Private Limited</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Target className="w-5 h-5 text-brand-teal shrink-0" />
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase mb-1">Corporate Identification Number (CIN)</p>
                  <p className="text-sm font-medium">U78300UP2024PTC211778</p>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-brand-teal shrink-0" />
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase mb-1">Registered Address</p>
                  <p className="text-sm font-medium leading-relaxed">
                    D-2/101, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh, 226010, India
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/5 p-10 rounded-3xl border border-white/10 flex flex-col justify-center">
            <h4 className="text-xl font-bold mb-6">Why Work With Us?</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm">
                <CheckCircle2 className="w-4 h-4 text-brand-teal" /> Pan-India Operations
              </li>
              <li className="flex items-center gap-3 text-sm">
                <CheckCircle2 className="w-4 h-4 text-brand-teal" /> Government Compliant
              </li>
              <li className="flex items-center gap-3 text-sm">
                <CheckCircle2 className="w-4 h-4 text-brand-teal" /> Multi-Sector Expertise
              </li>
              <li className="flex items-center gap-3 text-sm">
                <CheckCircle2 className="w-4 h-4 text-brand-teal" /> Ethical Business Practices
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
