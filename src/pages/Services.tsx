import { motion } from 'motion/react';
import { 
  Users, Sun, Landmark, ShieldCheck, Video, Cpu, Code, Lightbulb, 
  CheckCircle2, ArrowRight, Leaf, Wind 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Placeholder, PlaceholderTheme } from '../components/ui/Placeholder';
import { ASSET_IMAGES } from '../constants/images';

const services = [
  {
    id: 'manpower',
    title: 'Manpower Supply',
    icon: Users,
    desc: 'We provide end-to-end recruitment and staffing solutions, supplying skilled, semi-skilled, and unskilled workforce to corporates, factories, and large-scale projects across India.',
    theme: 'blue' as PlaceholderTheme,
    image: ASSET_IMAGES.VERTICALS.MANPOWER,
    offerings: [
      'Skilled Technical Staffing',
      'Factory & Warehouse Workforce',
      'Corporate Administrative Support',
      'Facility Management Personnel',
      'Contractual & Permanent Hiring'
    ],
    color: 'text-blue-600',
    bg: 'bg-blue-50'
  },
  {
    id: 'solar',
    title: 'Solar Projects',
    icon: Sun,
    desc: 'Expert solar EPC (Engineering, Procurement, and Construction) services for rooftop and ground-mount systems. We handle everything from design and installation to operation and maintenance.',
    theme: 'orange' as PlaceholderTheme,
    image: ASSET_IMAGES.VERTICALS.SOLAR,
    offerings: [
      'Residential Rooftop Solar',
      'Industrial & Commercial Plants',
      'Solar Street Lighting Projects',
      'Operation & Maintenance (O&M)',
      'Feasibility & Technical Advisory'
    ],
    color: 'text-orange-600',
    bg: 'bg-orange-50'
  },
  {
    id: 'loans',
    title: 'Loan Services',
    icon: Landmark,
    desc: 'Empowering your financial needs with a wide array of loan products through our DSA partnerships with India\'s leading banks and NBFCs.',
    theme: 'emerald' as PlaceholderTheme,
    image: ASSET_IMAGES.VERTICALS.LOANS,
    offerings: [
      'Home & Business Loans',
      'Personal & Education Loans',
      'Loan Against Property (LAP)',
      'Debt Consolidation Advice',
      'DSA Channel Partnerships'
    ],
    color: 'text-emerald-600',
    bg: 'bg-emerald-50'
  },
  {
    id: 'insurance',
    title: 'Insurance Services',
    icon: ShieldCheck,
    desc: 'Comprehensive insurance advisory to protect your life, health, and assets. We provide tailored policies and dedicated claims support.',
    theme: 'indigo' as PlaceholderTheme,
    image: ASSET_IMAGES.VERTICALS.INSURANCE,
    offerings: [
      'Life & Health Insurance',
      'Motor & Travel Insurance',
      'Fire & Burglary Protection',
      'Marine & Transit Insurance',
      'Business Liability Coverage'
    ],
    color: 'text-indigo-600',
    bg: 'bg-indigo-50'
  },
  {
    id: 'security',
    title: 'Security Services',
    icon: ShieldCheck,
    desc: 'Unmatched physical security solutions including trained guards, bouncers, and comprehensive facility management for offices and events.',
    theme: 'slate' as PlaceholderTheme,
    image: ASSET_IMAGES.VERTICALS.SECURITY,
    offerings: [
      'Trained Security Guards',
      'VIP Bouncers & Personal Security',
      'Housekeeping & Janitorial',
      'Event Security Management',
      'Patrol & Quick Response Teams'
    ],
    color: 'text-slate-600',
    bg: 'bg-slate-50'
  },
  {
    id: 'cctv',
    title: 'CCTV & Surveillance',
    icon: Video,
    desc: 'State-of-the-art electronic surveillance solutions for total peace of mind. We supply, install, and maintain high-definition security systems.',
    theme: 'red' as PlaceholderTheme,
    image: ASSET_IMAGES.VERTICALS.CCTV,
    offerings: [
      'HD & IP Camera Installation',
      'Video Door Phone Systems',
      'Access Control & Attendance',
      'Remote Monitoring Setup',
      'Annual Maintenance Contracts'
    ],
    color: 'text-red-600',
    bg: 'bg-red-50'
  },
  {
    id: 'iot',
    title: 'IoT Solutions',
    icon: Cpu,
    desc: 'Leveraging Internet of Things (IoT) technology to enable smart automation, real-time energy monitoring, and industrial efficiency.',
    theme: 'cyan' as PlaceholderTheme,
    image: ASSET_IMAGES.VERTICALS.IOT,
    offerings: [
      'Smart Home Automation',
      'Energy Management Systems',
      'Industrial Asset Tracking',
      'Environmental Monitoring',
      'Custom IoT Dashboards'
    ],
    color: 'text-cyan-600',
    bg: 'bg-cyan-50'
  },
  {
    id: 'software',
    title: 'Software Development',
    icon: Code,
    desc: 'High-performance custom software development, including ERP, CRM, and mobile apps, designed to digitize and scale your business operations.',
    theme: 'violet' as PlaceholderTheme,
    image: ASSET_IMAGES.VERTICALS.SOFTWARE,
    offerings: [
      'Custom ERP & CRM Solutions',
      'Web & E-commerce Development',
      'Mobile App (Android/iOS)',
      'Cloud Migration Services',
      'UI/UX Design & Prototyping'
    ],
    color: 'text-violet-600',
    bg: 'bg-violet-50'
  },
  {
    id: 'consulting',
    title: 'Business Consulting',
    icon: Lightbulb,
    desc: 'Strategic business advisory to help you navigate compliance, optimize processes, and identify new growth opportunities in a competitive market.',
    theme: 'amber' as PlaceholderTheme,
    image: ASSET_IMAGES.VERTICALS.CONSULTING,
    offerings: [
      'Market Entry Strategy',
      'Regulatory & Compliance Audit',
      'Project Feasibility Reports',
      'Operational Excellence',
      'Financial Planning & Analysis'
    ],
    color: 'text-amber-600',
    bg: 'bg-amber-50'
  },
  {
    id: 'bio-fuel',
    title: 'Bio Fuel & Green Energy',
    icon: Leaf,
    desc: 'Empowering the shift to sustainable fuel sources with advanced bio-energy solutions and carbon management strategies.',
    theme: 'emerald' as PlaceholderTheme,
    image: ASSET_IMAGES.PRODUCTS.BIO_FUEL,
    offerings: [
      'Biodiesel & Biomass Supply',
      'Green Hydrogen Advisory',
      'Carbon Credit Management',
      'Renewable Fuel Integration',
      'Industrial Energy Audits'
    ],
    color: 'text-emerald-600',
    bg: 'bg-emerald-50'
  },
  {
    id: 'renewable',
    title: 'Renewable Energy',
    icon: Wind,
    desc: 'Beyond solar, we offer a diverse range of renewable energy solutions including wind, micro-hydro, and advanced storage systems.',
    theme: 'teal' as PlaceholderTheme,
    image: ASSET_IMAGES.PRODUCTS.RENEWABLE,
    offerings: [
      'Wind Power EPC Services',
      'Micro-Hydro Installations',
      'Energy Storage Solutions (BESS)',
      'Hybrid Power Systems',
      'Smart Grid Implementation'
    ],
    color: 'text-teal-600',
    bg: 'bg-teal-50'
  }
];

export default function Services() {
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
            Integrated Business Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 max-w-2xl mx-auto"
          >
            Comprehensive solutions delivered by industry experts to help you scale, secure, and sustain your future.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          {services.map((service, idx) => (
            <motion.div 
              key={service.id} 
              id={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center scroll-mt-32 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="flex-1">
                <div className={`w-14 h-14 rounded-2xl ${service.bg} ${service.color} flex items-center justify-center mb-8`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <h2 className="text-3xl font-bold text-brand-blue mb-6">{service.title}</h2>
                <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                  {service.desc}
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                  {service.offerings.map((offering) => (
                    <div key={offering} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                      {offering}
                    </div>
                  ))}
                </div>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue text-white font-bold rounded-lg hover:bg-slate-800 transition-all shadow-lg"
                >
                  Request Proposal <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="flex-1 w-full">
                <Placeholder 
                  icon={service.icon} 
                  title={service.title} 
                  subtitle="Process Optimization" 
                  theme={service.theme} 
                  aspectRatio="video" 
                  src={service.image}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Inquiry Form Callout */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-brand-blue mb-6">Can't find what you're looking for?</h2>
          <p className="text-slate-600 mb-10">
            We specialize in custom integrated solutions tailored to complex business requirements. 
            Talk to our consultants for a personalized strategy.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 px-10 py-4 bg-brand-teal text-white font-bold rounded-xl hover:bg-teal-600 transition-all shadow-xl"
          >
            Get a Custom Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
