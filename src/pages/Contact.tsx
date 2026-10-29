import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageSquare, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const contactInfo = [
  {
    title: 'Call Us',
    value: '+91 000 000 0000',
    icon: Phone,
    href: 'tel:+91XXXXXXXXXX',
    desc: 'Available Mon-Sat, 9 AM - 6 PM'
  },
  {
    title: 'Email Us',
    value: 'info@netwhile.com',
    icon: Mail,
    href: 'mailto:info@netwhile.com',
    desc: 'We respond within 24 hours'
  },
  {
    title: 'Visit Us',
    value: 'Lucknow, UP, India',
    icon: MapPin,
    href: 'https://maps.google.com',
    desc: 'D-2/101, Vibhuti Khand, Gomti Nagar'
  },
  {
    title: 'WhatsApp',
    value: 'Message Support',
    icon: MessageSquare,
    href: 'https://wa.me/91XXXXXXXXXX',
    desc: 'Instant business enquiries'
  }
];

export default function Contact() {
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
            Let's Start a Conversation
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 max-w-2xl mx-auto"
          >
            Whether you have a question about our services or need a customized proposal, our team is here to help.
          </motion.p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-brand-blue mb-6">Contact Information</h2>
              <p className="text-slate-600 leading-relaxed mb-10">
                Our offices are located in the heart of Lucknow. Feel free to reach out via any of the channels below or visit us during business hours.
              </p>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-8">
                {contactInfo.map((info) => (
                  <a 
                    key={info.title}
                    href={info.href}
                    target={info.title === 'Visit Us' || info.title === 'WhatsApp' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex gap-5 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-brand-blue group-hover:bg-brand-teal group-hover:text-white transition-all shrink-0">
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-blue mb-0.5">{info.title}</h4>
                      <p className="text-sm font-semibold text-brand-teal group-hover:underline">{info.value}</p>
                      <p className="text-xs text-slate-400 mt-1">{info.desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
              <h4 className="font-bold text-brand-blue mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-teal" /> Business Hours
              </h4>
              <div className="space-y-2 text-sm text-slate-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-slate-400">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Container */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100">
              <h3 className="text-2xl font-bold text-brand-blue mb-8">Send an Enquiry</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed Placeholder */}
      <section className="h-[450px] bg-slate-200 relative">
        <div className="absolute inset-0 flex items-center justify-center text-slate-400 italic">
          <div className="text-center">
            <MapPin className="w-10 h-10 mx-auto mb-4 opacity-20" />
            <p>Interactive Google Maps Integration</p>
            <p className="text-xs mt-2">D-2/101, Vibhuti Khand, Gomti Nagar, Lucknow</p>
          </div>
        </div>
      </section>
    </div>
  );
}
