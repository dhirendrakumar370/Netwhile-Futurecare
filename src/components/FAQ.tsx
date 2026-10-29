import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What integrated services does Netwhile Futurecare provide?",
    answer: "We offer a diverse range of 11 business verticals including Manpower Supply, Solar EPC, Loan & Insurance Advisory, Security Services, CCTV Surveillance, IoT Solutions, Software Development, Business Consulting, and Green Energy solutions (Bio Fuel & Renewable Energy)."
  },
  {
    question: "Is Netwhile Futurecare a government-registered entity?",
    answer: "Yes, we are a Govt. Registered Private Limited company based in Lucknow, Uttar Pradesh, with CIN: U78300UP2024PTC211778. We maintain full compliance with industrial standards and government regulations."
  },
  {
    question: "Do you provide services across India or just in Lucknow?",
    answer: "While our corporate center is in Lucknow, we have a Pan-India reach. We deliver projects and supply manpower to major cities and remote locations across more than 25 cities in India."
  },
  {
    question: "How are your security personnel trained and verified?",
    answer: "All our security guards and personnel undergo rigorous background verification and training. We ensure they are equipped with the necessary skills for physical security, event management, and emergency response."
  },
  {
    question: "Do you offer Annual Maintenance Contracts (AMC) for technology installations?",
    answer: "Absolutely. We provide comprehensive AMC options for CCTV systems, IoT deployments, and Solar plants to ensure your installations perform optimally with zero downtime."
  },
  {
    question: "Can I get a custom consultation for my business needs?",
    answer: "Yes, we specialize in custom integrated solutions. You can request a personalized strategy through our 'Request Proposal' feature or by visiting our Contact page to talk with our industry consultants."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/10 text-brand-teal text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Common Questions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600">
            Find quick answers to common queries about our operations, compliance, and service delivery.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden transition-all hover:shadow-md"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-bold text-brand-blue md:text-lg pr-8">
                  {faq.question}
                </span>
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-brand-teal text-white' : 'bg-slate-100 text-slate-400'}`}>
                  {openIndex === index ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-8 pb-8 text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-500 mb-6 italic">
            Still have questions? Our support team is ready to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="mailto:info@netwhilefuturecare.com" 
              className="text-brand-teal font-bold hover:underline"
            >
              Email Us
            </a>
            <span className="text-slate-300">|</span>
            <a 
              href="https://wa.me/91XXXXXXXXXX" 
              className="text-brand-teal font-bold hover:underline"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
