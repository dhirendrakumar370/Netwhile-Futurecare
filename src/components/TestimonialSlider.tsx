import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { ASSET_IMAGES } from '../constants/images';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Rahul Kapoor',
    role: 'CEO, TechInnovate',
    quote: 'Netwhile Futurecare provided us with an exceptional workforce during our peak season. Their professionalism and efficiency are unmatched in the manpower sector.',
    avatar: ASSET_IMAGES.CORPORATE.AVATARS[0],
    rating: 5,
  },
  {
    name: 'Anjali Sharma',
    role: 'Homeowner',
    quote: 'The solar installation was seamless. Their team handled everything from site survey to government approvals. I am seeing a 40% reduction in my bills already!',
    avatar: ASSET_IMAGES.CORPORATE.AVATARS[1],
    rating: 5,
  },
  {
    name: 'Suresh Kumar',
    role: 'Operations Manager',
    quote: 'Our facility security has improved significantly with their integrated CCTV and on-site guarding services. A truly reliable partner for industrial security.',
    avatar: ASSET_IMAGES.CORPORATE.AVATARS[2],
    rating: 5,
  },
  {
    name: 'Meera Reddy',
    role: 'Director, Urban Solutions',
    quote: 'Their IoT implementation transformed our waste management efficiency. The custom dashboard they built is incredibly intuitive and data-rich.',
    avatar: ASSET_IMAGES.CORPORATE.AVATARS[0], // Reusing for demo if needed, or I could use another index if it existed
    rating: 4,
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const slidePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(slideNext, 6000);
    return () => clearInterval(timer);
  }, [slideNext]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="relative max-w-5xl mx-auto px-6 h-[500px] md:h-[400px] flex items-center justify-center overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute w-full px-4 md:px-12"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-2xl shadow-slate-200/50 flex flex-col items-center text-center">
            <div className="mb-6 bg-brand-teal/10 p-4 rounded-full">
              <Quote className="w-8 h-8 text-brand-teal" />
            </div>
            
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-4 h-4 ${i < testimonials[currentIndex].rating ? 'text-amber-400 fill-amber-400' : 'text-slate-200'}`} 
                />
              ))}
            </div>

            <p className="text-lg md:text-xl text-slate-600 italic mb-8 leading-relaxed max-w-3xl">
              "{testimonials[currentIndex].quote}"
            </p>

            <div className="flex items-center gap-4">
              <img 
                src={testimonials[currentIndex].avatar} 
                alt={testimonials[currentIndex].name} 
                referrerPolicy="no-referrer"
                className="w-14 h-14 rounded-full object-cover border-4 border-slate-50 shadow-md"
              />
              <div className="text-left">
                <h4 className="font-bold text-brand-blue text-base">{testimonials[currentIndex].name}</h4>
                <p className="text-xs text-brand-teal font-medium uppercase tracking-wider">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="absolute inset-x-0 bottom-0 flex justify-center gap-4 md:gap-0 md:justify-between md:top-1/2 md:-translate-y-1/2 px-2 md:px-0">
        <button
          onClick={slidePrev}
          className="w-12 h-12 rounded-full bg-white border border-slate-100 shadow-lg flex items-center justify-center text-slate-400 hover:text-brand-teal hover:border-brand-teal transition-all group md:-translate-x-6 z-20"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-0.5" />
        </button>
        <button
          onClick={slideNext}
          className="w-12 h-12 rounded-full bg-white border border-slate-100 shadow-lg flex items-center justify-center text-slate-400 hover:text-brand-teal hover:border-brand-teal transition-all group md:translate-x-6 z-20"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > currentIndex ? 1 : -1);
              setCurrentIndex(i);
            }}
            className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? 'w-8 bg-brand-teal' : 'bg-slate-200'}`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
