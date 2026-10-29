import React from 'react';
import { LucideIcon } from 'lucide-react';

export type PlaceholderTheme = 
  | 'blue' 
  | 'orange' 
  | 'emerald' 
  | 'indigo' 
  | 'cyan' 
  | 'violet' 
  | 'amber' 
  | 'red' 
  | 'slate' 
  | 'teal';

interface PlaceholderProps {
  icon: LucideIcon;
  title?: string;
  subtitle?: string;
  src?: string;
  theme?: PlaceholderTheme;
  aspectRatio?: 'video' | 'square' | 'portrait' | 'wide';
  className?: string;
}

const themes: Record<PlaceholderTheme, { bg: string; from: string; to: string; text: string; icon: string }> = {
  blue: {
    bg: 'bg-blue-50',
    from: 'from-blue-400',
    to: 'to-blue-600',
    text: 'text-blue-200',
    icon: 'text-blue-600'
  },
  orange: {
    bg: 'bg-orange-50',
    from: 'from-orange-400',
    to: 'to-orange-600',
    text: 'text-orange-200',
    icon: 'text-orange-600'
  },
  emerald: {
    bg: 'bg-emerald-50',
    from: 'from-emerald-400',
    to: 'to-emerald-600',
    text: 'text-emerald-200',
    icon: 'text-emerald-600'
  },
  indigo: {
    bg: 'bg-indigo-50',
    from: 'from-indigo-400',
    to: 'to-indigo-600',
    text: 'text-indigo-200',
    icon: 'text-indigo-600'
  },
  cyan: {
    bg: 'bg-cyan-50',
    from: 'from-cyan-400',
    to: 'to-cyan-600',
    text: 'text-cyan-200',
    icon: 'text-cyan-600'
  },
  violet: {
    bg: 'bg-violet-50',
    from: 'from-violet-400',
    to: 'to-violet-600',
    text: 'text-violet-200',
    icon: 'text-violet-600'
  },
  amber: {
    bg: 'bg-amber-50',
    from: 'from-amber-400',
    to: 'to-amber-600',
    text: 'text-amber-200',
    icon: 'text-amber-600'
  },
  red: {
    bg: 'bg-red-50',
    from: 'from-red-400',
    to: 'to-red-600',
    text: 'text-red-200',
    icon: 'text-red-600'
  },
  slate: {
    bg: 'bg-slate-50',
    from: 'from-slate-400',
    to: 'to-slate-600',
    text: 'text-slate-200',
    icon: 'text-slate-600'
  },
  teal: {
    bg: 'bg-teal-50',
    from: 'from-brand-teal/40',
    to: 'to-brand-teal',
    text: 'text-teal-100',
    icon: 'text-brand-teal'
  }
};

const aspectRatios = {
  video: 'aspect-[16/10]',
  square: 'aspect-square',
  portrait: 'aspect-[4/5]',
  wide: 'aspect-video'
};

export function Placeholder({
  icon: Icon,
  title,
  subtitle,
  src,
  theme = 'blue',
  aspectRatio = 'video',
  className = ''
}: PlaceholderProps) {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const activeTheme = themes[theme];
  const ratioClass = aspectRatios[aspectRatio];

  return (
    <div className={`${ratioClass} rounded-3xl overflow-hidden border border-slate-200 shadow-xl relative group ${className}`}>
      {/* Fallback Layers - Only visible when image is NOT loaded */}
      {!isLoaded && (
        <>
          {/* Background Gradient / Fallback Layer */}
          <div className={`absolute inset-0 bg-gradient-to-br ${activeTheme.from} ${activeTheme.to} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
          
          {/* Texture Mesh */}
          <div 
            className="absolute inset-0 opacity-[0.05] pointer-events-none" 
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3C/g%3E%3C/svg%3E")` }} 
          />
          
          {/* Large Icon Overlay / Fallback Icon */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <Icon className={`w-32 h-32 ${activeTheme.icon} opacity-10 transition-transform group-hover:scale-110 duration-700`} />
          </div>
        </>
      )}

      {/* Real Image Layer */}
      {src && (
        <img 
          src={src} 
          alt={title || 'Visual representation'} 
          referrerPolicy="no-referrer"
          onLoad={() => setIsLoaded(true)}
          onError={(e) => {
            console.error(`Failed to load image: ${src}`);
            // Attempt to reload once without referrerPolicy if it failed
            const target = e.target as HTMLImageElement;
            if (target.referrerPolicy !== "") {
              target.referrerPolicy = "";
            } else {
              setIsLoaded(false);
            }
          }}
          className={`absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
      )}

      {/* Content Scrim */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-60'}`} />

      {/* Text Content */}
      <div className="absolute bottom-8 left-8 z-20">
        {subtitle && (
          <p className={`text-[10px] font-bold ${activeTheme.text} uppercase tracking-widest mb-1`}>
            {subtitle}
          </p>
        )}
        {title && (
          <h3 className="text-white font-bold text-lg md:text-xl leading-tight">
            {title}
          </h3>
        )}
      </div>
    </div>
  );
}
