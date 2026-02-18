
import React from 'react';
import { Sparkles, FileText, Briefcase, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  lang: 'ar' | 'en';
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const translations = {
    ar: {
      badge: 'الذكاء الاصطناعي الجديد كلياً',
      title1: 'اصنع مستقبلك المهني',
      title2: 'بذكاء واحترافية',
      desc: 'تجمع منصة CVEEEZ بين أدوات بناء السيرة الذاتية بالذكاء الاصطناعي، وبوابة الوظائف، والخدمات المهنية المتخصصة، ومجتمع المواهب المبدع في مكان واحد.',
      cta1: 'اصنع سيرتك الآن',
      cta2: 'تصفح الوظائف',
      trust: 'أكثر من 10,000 مستخدم يثقون بنا'
    },
    en: {
      badge: 'All-new AI Experience',
      title1: 'Build Your Professional Future',
      title2: 'With Smart Professionalism',
      desc: 'CVEEEZ combines AI-powered CV building tools, a job portal, specialized professional services, and a creative talent community in one place.',
      cta1: 'Create Your CV Now',
      cta2: 'Browse Jobs',
      trust: 'Trusted by over 10,000 users'
    }
  };

  const t = translations[lang];

  return (
    <section className="relative pt-10 pb-20 lg:pt-20 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary-400/20 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-400/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 border border-primary-100 dark:border-primary-800 text-primary-600 dark:text-primary-400 text-sm font-bold mb-8 animate-bounce">
          <Sparkles size={16} />
          <span>{t.badge}</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white leading-[1.2] mb-6">
          <span className="block">{t.title1}</span>
          <span className="bg-gradient-to-l from-primary-600 to-blue-500 bg-clip-text text-transparent">{t.title2}</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
          {t.desc}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="https://www.cveeez.net/services/ai-cv-builder"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-5 bg-primary-600 hover:bg-primary-700 text-white rounded-2xl font-black text-lg transition-all shadow-xl shadow-primary-500/25 flex items-center justify-center gap-3 hover:-translate-y-1"
          >
            <FileText size={22} />
            {t.cta1}
          </a>
          <a
            href="https://www.cveeez.net/jobs"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-2xl font-black text-lg transition-all shadow-md flex items-center justify-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-700 hover:-translate-y-1"
          >
            <Briefcase size={22} />
            {t.cta2}
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 flex-wrap opacity-70">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} className="text-green-500" />
            <span className="font-bold dark:text-slate-300">{t.trust}</span>
          </div>
          <div className="w-px h-4 bg-slate-300 dark:bg-slate-700 hidden sm:block"></div>
          <div className="flex items-center gap-1 font-bold text-slate-900 dark:text-white">
            <span>ATS Friendly</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
