import { Globe2, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function TrustBar() {
  return (
    <div className="bg-slate-50 py-10 border-y border-slate-100 relative z-30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-xs md:text-sm font-bold text-slate-400 tracking-wide uppercase">
          <div className="flex items-center gap-2.5 transition-colors hover:text-brand-teal group">
            <Globe2 className="w-4 h-4 text-brand-teal opacity-60 group-hover:opacity-100 transition-opacity" />
            <span>Trusted Across India</span>
          </div>
          
          <div className="w-1 h-1 rounded-full bg-slate-200 hidden md:block" aria-hidden="true" />
          
          <div className="flex items-center gap-2.5 transition-colors hover:text-brand-teal group">
            <CheckCircle2 className="w-4 h-4 text-brand-teal opacity-60 group-hover:opacity-100 transition-opacity" />
            <span>Govt. Registered Private Limited</span>
          </div>
          
          <div className="w-1 h-1 rounded-full bg-slate-200 hidden md:block" aria-hidden="true" />
          
          <div className="flex items-center gap-2.5 transition-colors hover:text-brand-teal group">
            <ShieldCheck className="w-4 h-4 text-brand-teal opacity-60 group-hover:opacity-100 transition-opacity" />
            <span>ISO Certified Standards</span>
          </div>
          
          <div className="w-1 h-1 rounded-full bg-slate-200 hidden md:block" aria-hidden="true" />
          
          <div className="flex items-center gap-2.5 transition-colors hover:text-brand-blue group">
            <span className="text-[10px] text-slate-300 mr-1">CIN:</span>
            <span className="font-mono text-slate-500 group-hover:text-brand-blue transition-colors">U78300UP2024PTC211778</span>
          </div>
        </div>
      </div>
    </div>
  );
}
