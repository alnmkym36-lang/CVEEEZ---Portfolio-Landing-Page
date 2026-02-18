
import React from 'react';
import { Cpu, Search, Users, ShoppingBag, Globe, Lightbulb, ArrowLeft, ArrowRight } from 'lucide-react';

interface SolutionsProps {
  lang: 'ar' | 'en';
}

const Solutions: React.FC<SolutionsProps> = ({ lang }) => {
  const translations = {
    ar: {
      title: "حلولنا المهنية المتكاملة",
      subtitle: "كل ما تحتاجه للنجاح في سوق العمل مجمع في مكان واحد بأحدث التقنيات.",
      more: "اكتشف المزيد",
      items: [
        { title: "صانع السيرة الذاتية بالذكاء الاصطناعي", desc: "صمم سيرة ذاتية احترافية متوافقة مع أنظمة ATS في دقائق باستخدام خوارزميات الذكاء الاصطناعي." },
        { title: "بوابة الوظائف", desc: "ابحث عن فرصتك القادمة في كبرى الشركات المصرية والخليجية الموثوقة." },
        { title: "مساحة المواهب", desc: "انضم إلى مجتمع من المحترفين، شارك خبراتك وابنِ شبكة علاقات مهنية قوية." },
        { title: "خدماتنا الاحترافية", desc: "احصل على مراجعة احترافية لسيرتك أو خدمات كتابة متخصصة.", badges: ["+1000 عميل راضٍ"] },
        { title: "مترجم النصوص", desc: "ترجم سيرتك ومحتواك المهني بدقة واحترافية عالية تليق بمستواك." },
        { title: "مستشار المسار الوظيفي", desc: "احصل على استشارات ذكية لتطوير مسارك المهني واختيار الخطوات الصحيحة.", badges: ["جديد ✨"] }
      ]
    },
    en: {
      title: "Integrated Professional Solutions",
      subtitle: "Everything you need to succeed in the job market, all in one place with the latest technologies.",
      more: "Discover More",
      items: [
        { title: "AI CV Builder", desc: "Design a professional, ATS-friendly CV in minutes using advanced AI algorithms." },
        { title: "Job Portal", desc: "Find your next opportunity with major trusted Egyptian and Gulf companies." },
        { title: "Talent Space", desc: "Join a professional community, share your expertise, and build a strong network." },
        { title: "Professional Services", desc: "Get a professional review for your CV or specialized writing services.", badges: ["1000+ Happy Clients"] },
        { title: "Text Translator", desc: "Translate your professional content and CV with high accuracy and professionalism." },
        { title: "Career Advisor", desc: "Get smart consultations to develop your career path and make the right moves.", badges: ["New ✨"] }
      ]
    }
  };

  const t = translations[lang];
  const icons = [
    <Cpu className="text-blue-500" size={28} />,
    <Search className="text-purple-500" size={28} />,
    <Users className="text-green-500" size={28} />,
    <ShoppingBag className="text-orange-500" size={28} />,
    <Globe className="text-indigo-500" size={28} />,
    <Lightbulb className="text-yellow-500" size={28} />
  ];

  const links = [
    "https://www.cveeez.net/services/ai-cv-builder",
    "https://www.cveeez.net/jobs",
    "https://www.cveeez.net/talent-space",
    "https://www.cveeez.net/ecommerce",
    "https://www.cveeez.net/translator",
    "https://www.cveeez.net/services/career-advisor"
  ];

  return (
    <section id="solutions" className="py-24 bg-white dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">{t.title}</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.items.map((item, idx) => (
            <div key={idx} className="group p-8 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/10 flex flex-col h-full">
              <div className="w-16 h-16 bg-white dark:bg-slate-700 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {icons[idx]}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                {item.title}
                {item.badges?.map(b => (
                  <span key={b} className="text-[10px] bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 px-2 py-0.5 rounded-full whitespace-nowrap">{b}</span>
                ))}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed flex-grow">{item.desc}</p>
              <a href={links[idx]} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold text-primary-600 dark:text-primary-400 group-hover:gap-4 transition-all">
                {t.more}
                {lang === 'ar' ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
