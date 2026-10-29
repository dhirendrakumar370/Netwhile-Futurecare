import { motion } from 'motion/react';
import { Sun, Shield, Cpu, Code, Check, ArrowRight, Leaf, Wind } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Placeholder, PlaceholderTheme } from '../components/ui/Placeholder';
import { ASSET_IMAGES } from '../constants/images';

const productCategories = [
  {
    id: 'solar',
    title: 'Solar Products',
    icon: Sun,
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    theme: 'orange' as PlaceholderTheme,
    image: ASSET_IMAGES.VERTICALS.SOLAR,
    items: [
      { name: 'Solar Panels', desc: 'High-efficiency monocrystalline and polycrystalline panels.' },
      { name: 'Solar Inverters', desc: 'Hybrid and string inverters for optimal power conversion.' },
      { name: 'Solar Street Lights', desc: 'All-in-one and integrated solar lighting solutions.' },
      { name: 'Solar Water Heaters', desc: 'ETC and FPC systems for residential and industrial use.' },
      { name: 'On-Grid/Off-Grid Systems', desc: 'Complete rooftop solutions with battery storage.' },
      { name: 'Commercial Solar Plants', desc: 'Utility-scale PV components and mounting structures.' },
    ]
  },
  {
    id: 'security',
    title: 'Security & Surveillance',
    icon: Shield,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    theme: 'blue' as PlaceholderTheme,
    image: ASSET_IMAGES.VERTICALS.SECURITY,
    items: [
      { name: 'CCTV Cameras (IP/HD)', desc: 'High-definition surveillance with night vision and AI analytics.' },
      { name: 'DVR/NVR Systems', desc: 'Reliable network video recording for large-scale storage.' },
      { name: 'Access Control Systems', desc: 'RFID and smartphone-based entry management.' },
      { name: 'Biometric Devices', desc: 'Fingerprint and facial recognition for attendance.' },
      { name: 'Alarm Systems', desc: 'Intrusion detection and fire alarm panels.' },
    ]
  },
  {
    id: 'iot',
    title: 'IoT Products',
    icon: Cpu,
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
    theme: 'cyan' as PlaceholderTheme,
    image: ASSET_IMAGES.VERTICALS.IOT,
    items: [
      { name: 'Smart Sensors', desc: 'Precision sensors for environment and asset monitoring.' },
      { name: 'Energy Monitoring', desc: 'Real-time power consumption tracking and analytics.' },
      { name: 'Smart Home Kits', desc: 'Integrated automation for lighting and climate control.' },
      { name: 'Industrial IoT Gateways', desc: 'Robust connectivity for factory floor data acquisition.' },
    ]
  },
  {
    id: 'software',
    title: 'Software Products',
    icon: Code,
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    theme: 'violet' as PlaceholderTheme,
    image: ASSET_IMAGES.VERTICALS.SOFTWARE,
    items: [
      { name: 'ERP Modules', desc: 'Comprehensive resource planning for manufacturing and retail.' },
      { name: 'CRM Systems', desc: 'Customer relationship management with sales automation.' },
      { name: 'Business Apps', desc: 'Custom mobile and web applications for internal ops.' },
      { name: 'Billing/Inventory', desc: 'Efficient stock management and POS software.' },
    ]
  },
  {
    id: 'bio-fuel',
    title: 'Bio Fuel & Green Energy',
    icon: Leaf,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    theme: 'emerald' as PlaceholderTheme,
    image: ASSET_IMAGES.PRODUCTS.BIO_FUEL,
    items: [
      { name: 'Biodiesel Solutions', desc: 'High-quality renewable fuel for industrial and transport use.' },
      { name: 'Biomass Pellets', desc: 'Eco-friendly fuel alternative for boilers and power plants.' },
      { name: 'Green Hydrogen', desc: 'Consulting and components for clean hydrogen production.' },
      { name: 'Carbon Auditing', desc: 'Emission tracking and green energy certification services.' },
    ]
  },
  {
    id: 'renewable',
    title: 'Renewable Energy',
    icon: Wind,
    color: 'text-teal-600',
    bg: 'bg-teal-50',
    theme: 'teal' as PlaceholderTheme,
    image: ASSET_IMAGES.PRODUCTS.RENEWABLE,
    items: [
      { name: 'Wind Turbines', desc: 'Small to medium scale wind power generation systems.' },
      { name: 'Hydro Power Kits', desc: 'Micro-hydro components for rural and off-grid electrification.' },
      { name: 'Energy Storage (BESS)', desc: 'Large scale battery energy storage for grid stability.' },
      { name: 'Smart Grid Gear', desc: 'Intelligent hardware for renewable energy distribution.' },
    ]
  }
];

export default function Products() {
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
            Our Product Range
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 max-w-2xl mx-auto"
          >
            High-quality components and systems engineered for reliability, efficiency, and future-readiness.
          </motion.p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-32">
          {productCategories.map((category, idx) => (
            <div key={category.id} className={`grid lg:grid-cols-12 gap-12 items-start ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`lg:col-span-4 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className={`w-16 h-16 rounded-2xl ${category.bg} ${category.color} flex items-center justify-center mb-8`}>
                  <category.icon className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold text-brand-blue mb-6">{category.title}</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  We supply and install a wide range of {category.title.toLowerCase()} tailored to your specific requirements, ensuring seamless integration and long-term performance.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 text-brand-teal font-bold hover:gap-3 transition-all"
                >
                  Request a Quote <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              <div className={`lg:col-span-8 grid sm:grid-cols-2 gap-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                {category.items.map((item) => (
                  <div key={item.name} className="p-6 rounded-xl border border-slate-100 hover:border-brand-teal/20 transition-all hover:bg-slate-50 group">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 bg-brand-teal/10 p-1 rounded-md">
                        <Check className="w-3.5 h-3.5 text-brand-teal" />
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-blue mb-1 group-hover:text-brand-teal transition-colors">{item.name}</h4>
                        <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
                {/* Visual Showcase Placeholder */}
                <Placeholder 
                  icon={category.icon} 
                  title={`${category.title} Portfolio`} 
                  subtitle="Quality assurance certified" 
                  theme={category.theme} 
                  aspectRatio="wide" 
                  className="sm:col-span-2"
                  src={category.image}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust & Quality Banner */}
      <section className="bg-slate-50 py-24 px-6 border-t border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-brand-blue mb-8 text-balance">Committed to Quality and Technical Excellence</h2>
          <div className="grid sm:grid-cols-3 gap-12">
            <div>
              <p className="text-brand-teal font-bold text-xl mb-2">Tested</p>
              <p className="text-sm text-slate-600">All products undergo rigorous testing before dispatch.</p>
            </div>
            <div>
              <p className="text-brand-teal font-bold text-xl mb-2">Warranty</p>
              <p className="text-sm text-slate-600">Standard manufacturer warranty on all hardware components.</p>
            </div>
            <div>
              <p className="text-brand-teal font-bold text-xl mb-2">Support</p>
              <p className="text-sm text-slate-600">Dedicated technical support and AMC options available.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
