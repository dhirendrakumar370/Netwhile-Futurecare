import { motion } from 'motion/react';
import { 
  Users, Sun, Landmark, ShieldCheck, Video, Cpu, Code, Lightbulb, 
  ArrowRight, CheckCircle2, TrendingUp, Globe2, Clock, Building2,
  Workflow, MapPin, FileCheck, Leaf, Wind
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Placeholder } from '../components/ui/Placeholder';
import { ASSET_IMAGES } from '../constants/images';
import TrustBar from '../components/TrustBar';
import TestimonialSlider from '../components/TestimonialSlider';
import FAQ from '../components/FAQ';

const verticals = [
  { 
    name: 'Manpower Supply', 
    icon: Users, 
    desc: 'Skilled, semi-skilled, and unskilled staffing solutions for diverse industries.',
    color: 'bg-blue-50 text-blue-600',
    theme: 'blue' as any,
    image: ASSET_IMAGES.VERTICALS.MANPOWER
  },
  { 
    name: 'Solar Projects', 
    icon: Sun, 
    desc: 'End-to-end solar EPC solutions for residential, commercial, and industrial use.',
    color: 'bg-orange-50 text-orange-600',
    theme: 'orange' as any,
    image: ASSET_IMAGES.VERTICALS.SOLAR
  },
  { 
    name: 'Loan Services', 
    icon: Landmark, 
    desc: 'Personal, business, and home loans through leading banking partnerships.',
    color: 'bg-emerald-50 text-emerald-600',
    theme: 'emerald' as any,
    image: ASSET_IMAGES.VERTICALS.LOANS
  },
  { 
    name: 'Insurance Services', 
    icon: ShieldCheck, 
    desc: 'Comprehensive life, health, motor, and business insurance advisory.',
    color: 'bg-indigo-50 text-indigo-600',
    theme: 'indigo' as any,
    image: ASSET_IMAGES.VERTICALS.INSURANCE
  },
  { 
    name: 'Security Services', 
    icon: ShieldCheck, 
    desc: 'Professional guarding, bouncers, and facility management services.',
    color: 'bg-slate-50 text-slate-600',
    theme: 'slate' as any,
    image: ASSET_IMAGES.VERTICALS.SECURITY
  },
  { 
    name: 'CCTV & Surveillance', 
    icon: Video, 
    desc: 'Advanced surveillance systems, access control, and AMC services.',
    color: 'bg-red-50 text-red-600',
    theme: 'red' as any,
    image: ASSET_IMAGES.VERTICALS.CCTV
  },
  { 
    name: 'IoT Solutions', 
    icon: Cpu, 
    desc: 'Smart automation, remote monitoring, and industrial IoT deployment.',
    color: 'bg-cyan-50 text-cyan-600',
    theme: 'cyan' as any,
    image: ASSET_IMAGES.VERTICALS.IOT
  },
  { 
    name: 'Software Development', 
    icon: Code, 
    desc: 'Custom ERP, CRM, web and mobile app development services.',
    color: 'bg-violet-50 text-violet-600',
    theme: 'violet' as any,
    image: ASSET_IMAGES.VERTICALS.SOFTWARE
  },
  { 
    name: 'Business Consulting', 
    icon: Lightbulb, 
    desc: 'Strategic growth, compliance, and project advisory for businesses.',
    color: 'bg-amber-50 text-amber-600',
    theme: 'amber' as any,
    image: ASSET_IMAGES.VERTICALS.CONSULTING
  },
  { 
    name: 'Bio Fuel & Green Energy', 
    icon: Leaf, 
    desc: 'Sustainable fuel sources and carbon management for a greener future.',
    color: 'bg-emerald-50 text-emerald-600',
    theme: 'emerald' as any,
    image: ASSET_IMAGES.PRODUCTS.BIO_FUEL
  },
  { 
    name: 'Renewable Energy', 
    icon: Wind, 
    desc: 'Diversified clean energy solutions beyond solar, including wind and storage.',
    color: 'bg-teal-50 text-teal-600',
    theme: 'teal' as any,
    image: ASSET_IMAGES.PRODUCTS.RENEWABLE
  },
];

const stats = [
  { label: 'Projects Delivered', value: '500+' },
  { label: 'Clients Served', value: '1,200+' },
  { label: 'Cities Covered', value: '25+' },
  { label: 'Expert Team', value: '150+' },
];

const usps = [
  { 
    title: 'End-to-End Solutions', 
    desc: 'Comprehensive services from initial consultation to final implementation.',
    icon: Workflow,
    color: 'text-blue-600 bg-blue-50'
  },
  { 
    title: 'Certified Professionals', 
    desc: 'A team of industry experts with extensive hands-on experience.',
    icon: ShieldCheck,
    color: 'text-teal-600 bg-teal-50'
  },
  { 
    title: 'Pan-India Reach', 
    desc: 'Delivering excellence across major cities and remote locations nationwide.',
    icon: MapPin,
    color: 'text-orange-600 bg-orange-50'
  },
  { 
    title: 'Transparent Pricing', 
    desc: 'Honest, straightforward rates with absolutely no hidden charges.',
    icon: FileCheck,
    color: 'text-emerald-600 bg-emerald-50'
  },
  { 
    title: '24/7 Support', 
    desc: 'Dedicated technical and customer assistance available round the clock.',
    icon: Clock,
    color: 'text-indigo-600 bg-indigo-50'
  },
  { 
    title: 'Future-Ready Tech', 
    desc: 'Leveraging AI and IoT to provide cutting-edge industrial solutions.',
    icon: Cpu,
    color: 'text-cyan-600 bg-cyan-50'
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      <section className="relative min-h-[90vh] flex items-center bg-brand-blue pt-20 overflow-hidden">
        {/* Professional Hero Background Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src={ASSET_IMAGES.HERO.MAIN} 
            alt="Netwhile Futurecare Corporate Background" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
          {/* Modern Overlay / Scrim for Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue/80 to-brand-blue/20 z-10" />
          <div className="absolute inset-0 bg-brand-blue/40 z-10" />
        </div>

        {/* Dynamic Glow Accents */}
        <div className="absolute inset-0 opacity-30 pointer-events-none z-20">
          <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-brand-teal/20 blur-[140px] rounded-full animate-pulse" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-blue-500/10 blur-[140px] rounded-full animate-pulse" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 w-full py-20 lg:grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-brand-teal font-bold tracking-wider text-xs uppercase mb-6">
              Empowering India's Future
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Powering Your Future with <span className="text-brand-teal">Integrated Solutions</span>
            </h1>
            <p className="text-lg text-slate-300 mb-10 max-w-xl leading-relaxed">
              From Manpower and Solar to IoT and Software—we provide future-ready solutions that drive growth, efficiency, and sustainability for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-teal text-white font-bold rounded-lg hover:bg-teal-600 transition-all shadow-lg shadow-teal-900/20"
              >
                Explore Services <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-lg border border-white/20 hover:bg-white/20 transition-all backdrop-blur-sm"
              >
                Get a Free Consultation
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <Placeholder 
                  icon={Sun} 
                  subtitle="SOLAR EPC" 
                  title="Sustainable Power" 
                  theme="orange" 
                  aspectRatio="portrait" 
                  src={ASSET_IMAGES.VERTICALS.SOLAR}
                />
                <Placeholder 
                  icon={Cpu} 
                  subtitle="IoT & TECH" 
                  title="Smart Automation" 
                  theme="cyan" 
                  aspectRatio="video" 
                  src={ASSET_IMAGES.VERTICALS.IOT}
                />
              </div>
              <div className="space-y-4">
                <Placeholder 
                  icon={Users} 
                  subtitle="MANPOWER" 
                  title="Expert Staffing" 
                  theme="blue" 
                  aspectRatio="video" 
                  src={ASSET_IMAGES.VERTICALS.MANPOWER}
                />
                <Placeholder 
                  icon={Video} 
                  subtitle="SECURITY" 
                  title="Advanced Surveillance" 
                  theme="indigo" 
                  aspectRatio="portrait" 
                  src={ASSET_IMAGES.VERTICALS.SECURITY}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <TrustBar />

      {/* Verticals Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">Our Business Verticals</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              A diverse ecosystem of services designed to meet the evolving needs of modern businesses and individuals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {verticals.map((v, i) => (
              <motion.div
                key={v.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-slate-100 bg-white hover:border-brand-teal/20 hover:shadow-xl hover:shadow-brand-teal/5 transition-all group overflow-hidden flex flex-col"
              >
                <Placeholder 
                  icon={v.icon} 
                  theme={v.theme} 
                  aspectRatio="video" 
                  src={v.image}
                  className="rounded-none shadow-none border-none"
                />
                <div className="p-8 grow">
                  <h3 className="text-xl font-bold text-brand-blue mb-3">{v.name}</h3>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">{v.desc}</p>
                  <Link to={`/services#${v.name.toLowerCase().split(' ')[0]}`} className="text-brand-teal font-bold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-brand-teal font-bold text-xs uppercase tracking-widest mb-4 block">Our Advantage</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-10">Why Choose Netwhile Futurecare?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {usps.map((usp) => (
                <div key={usp.title} className="flex gap-5 group">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 duration-300 ${usp.color}`}>
                    <usp.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-blue mb-2 text-base">{usp.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{usp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12">
               <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue text-white font-bold rounded-lg hover:bg-slate-800 transition-all shadow-lg"
              >
                Learn More About Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="mt-16 lg:mt-0 relative">
            <Placeholder 
              icon={Building2} 
              title="Corporate Center" 
              subtitle="Lucknow, Uttar Pradesh" 
              theme="slate" 
              aspectRatio="square" 
              src={ASSET_IMAGES.CORPORATE.OFFICE_LUCKNOW}
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl border border-slate-100 max-w-xs">
              <p className="text-brand-teal font-bold text-3xl mb-1">100%</p>
              <p className="text-sm font-bold text-brand-blue mb-1">Compliance Guaranteed</p>
              <p className="text-xs text-slate-500">Adhering to all government regulations and industrial standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-brand-blue relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={ASSET_IMAGES.HERO.SUSTAINABLE} 
            alt="Sustainable Energy Background" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-10 mix-blend-overlay"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-brand-teal mb-2">{stat.value}</p>
                <p className="text-sm font-medium text-slate-400 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">What Our Clients Say</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Trusted by industry leaders and homeowners alike for our commitment to quality, innovation, and integrated service excellence.
            </p>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={ASSET_IMAGES.HERO.FUTURE_TECH} 
            alt="Future Tech Background" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-5"
          />
        </div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="bg-brand-teal rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl shadow-brand-teal/20 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
               <Cpu className="w-full h-full p-20 text-white" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Build Your Future?</h2>
              <p className="text-lg text-teal-50 mb-10 max-w-2xl mx-auto">
                Get in touch with our experts today for a tailored proposal that meets your specific business needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-brand-blue text-white font-bold rounded-lg hover:bg-slate-900 transition-all"
                >
                  Contact Us Now
                </Link>
                <a
                  href="https://wa.me/91XXXXXXXXXX"
                  className="px-8 py-4 bg-white text-brand-teal font-bold rounded-lg hover:bg-slate-50 transition-all border border-transparent"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
