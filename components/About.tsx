
import React from 'react';
import { Target, ShieldCheck, TrendingUp } from 'lucide-react';

interface AboutProps {
  lang: 'ar' | 'en';
}

const About: React.FC<AboutProps> = ({ lang }) => {
  const translations = {
    ar: {
      badge: 'نبذة عنا',
      title: 'نؤمن أن كل موهبة تستحق فرصة عادلة للظهور',
      p1: 'بدأت فكرة CVEEEZ من ملاحظة بسيطة: العديد من الكفاءات يواجهون صعوبة في تقديم أنفسهم بشكل احترافي، ليس لقلة خبرتهم، بل لافتقارهم للأدوات الصحيحة.',
      p2: 'نحن هنا لنكسر هذا الحاجز. من خلال دمج الذكاء الاصطناعي مع الخبرة البشرية في سوق العمل، نساعدك على بناء هوية مهنية قوية تمنحك الثقة وتدفع مسيرتك الوظيفية للأمام.',
      f1: 'منصة متكاملة', f2: 'دقة عالية', f3: 'نمو مستمر',
      stat: '10,000+', statLabel: 'سيرة ذاتية تم إنشاؤها'
    },
    en: {
      badge: 'About Us',
      title: 'We believe every talent deserves a fair chance to shine',
      p1: 'The idea for CVEEEZ started from a simple observation: many talented individuals struggle to present themselves professionally, not for lack of experience, but for lack of the right tools.',
      p2: 'We are here to break this barrier. By merging AI with human expertise in the job market, we help you build a strong professional identity that gives you confidence and propels your career forward.',
      f1: 'All-in-one Platform', f2: 'High Accuracy', f3: 'Continuous Growth',
      stat: '10,000+', statLabel: 'CVs Created'
    }
  };

  const t = translations[lang];

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-sm font-black text-primary-600 tracking-widest uppercase mb-4">{t.badge}</h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 leading-tight">{t.title}</h3>
            <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>{t.p1}</p>
              <p>{t.p2}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 text-center">
                <Target className="text-primary-500 mb-2 mx-auto" size={24} />
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">{t.f1}</h4>
              </div>
              <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 text-center">
                <ShieldCheck className="text-primary-500 mb-2 mx-auto" size={24} />
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">{t.f2}</h4>
              </div>
              <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 text-center">
                <TrendingUp className="text-primary-500 mb-2 mx-auto" size={24} />
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">{t.f3}</h4>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="aspect-square bg-gradient-to-tr from-primary-600 to-blue-400 rounded-3xl rotate-3 relative overflow-hidden group shadow-2xl">
              <img src="https://picsum.photos/800/800?career=1" alt="Professional Workspace" className="object-cover w-full h-full -rotate-3 group-hover:scale-110 transition-transform duration-700 opacity-90" />
              <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className={`absolute -bottom-10 ${lang === 'ar' ? '-right-10' : '-left-10'} bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-700 hidden md:block`}>
              <p className="text-4xl font-black text-primary-600 mb-1">{t.stat}</p>
              <p className="font-bold text-slate-600 dark:text-slate-400">{t.statLabel}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
