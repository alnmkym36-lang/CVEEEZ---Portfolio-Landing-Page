
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Star } from 'lucide-react';

interface FAQProps {
  lang: 'ar' | 'en';
}

const FAQ: React.FC<FAQProps> = ({ lang }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const translations = {
    ar: {
      ctaTitle: "استثمر في مستقبلك اليوم",
      ctaDesc: "خطط اشتراك مرنة تبدأ من أسعار تنافسية لتناسب جميع الفئات المهنية.",
      ctaBtn: "عرض الأسعار",
      faqTitle: "الأسئلة الشائعة",
      questions: [
        { q: "ما هي طرق الدفع المتاحة؟", a: "يمكنك الدفع بسهولة وأمان عبر المحفظة الإلكترونية (فودافون كاش وغيرها) أو بطاقات الائتمان من خلال بوابة Kashier الموثوقة." },
        { q: "هل يمكنني تغيير باقتي لاحقاً؟", a: "نعم، يمكنك ترقية أو تغيير باقتك في أي وقت لتناسب احتياجاتك المهنية المتطورة." },
        { q: "هل تتوفر تجربة مجانية للمنصة؟", a: "نعم، يوجد حساب تجريبي مجاني يتيح لك استكشاف أدواتنا وقوالبنا قبل اتخاذ قرار الاشتراك." },
        { q: "هل سيرتي الذاتية ستكون متوافقة مع ATS؟", a: "بالتأكيد، جميع قوالبنا مصممة وفقاً لأحدث معايير أنظمة تتبع المتقدمين لضمان وصول ملفك لمديري التوظيف." }
      ]
    },
    en: {
      ctaTitle: "Invest in Your Future Today",
      ctaDesc: "Flexible subscription plans starting at competitive prices to suit all professional levels.",
      ctaBtn: "View Pricing",
      faqTitle: "Frequently Asked Questions",
      questions: [
        { q: "What payment methods are available?", a: "You can pay easily and securely via e-wallets (Vodafone Cash, etc.) or credit cards through the trusted Kashier portal." },
        { q: "Can I change my plan later?", a: "Yes, you can upgrade or change your plan at any time to suit your evolving professional needs." },
        { q: "Is there a free trial for the platform?", a: "Yes, there is a free trial account that allows you to explore our tools and templates before making a subscription decision." },
        { q: "Will my CV be ATS-friendly?", a: "Absolutely, all our templates are designed according to the latest Applicant Tracking Systems standards to ensure your profile reaches hiring managers." }
      ]
    }
  };

  const t = translations[lang];

  return (
    <section id="pricing" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-l from-primary-600 to-blue-500 rounded-[3rem] p-10 md:p-16 text-center text-white mb-20 shadow-2xl relative overflow-hidden">
          <Star className="mx-auto mb-6 text-yellow-300" size={48} />
          <h2 className="text-3xl md:text-5xl font-black mb-6">{t.ctaTitle}</h2>
          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-xl mx-auto">{t.ctaDesc}</p>
          <a href="https://www.cveeez.net/pricing" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-primary-600 px-12 py-5 rounded-2xl font-black text-xl hover:bg-slate-50 transition-all shadow-lg shadow-black/10">
            {t.ctaBtn}
          </a>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl font-black text-slate-900 dark:text-white">{t.faqTitle}</h3>
        </div>

        <div className="space-y-4">
          {t.questions.map((faq, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden transition-all shadow-sm">
              <button onClick={() => setOpenIndex(openIndex === idx ? null : idx)} className={`w-full px-6 py-5 ${lang === 'ar' ? 'text-right' : 'text-left'} flex items-center justify-between gap-4`}>
                <span className="font-bold text-slate-900 dark:text-white text-lg">{faq.q}</span>
                {openIndex === idx ? <ChevronUp size={20} className="text-primary-500" /> : <ChevronDown size={20} className="text-slate-400" />}
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed text-lg animate-in fade-in slide-in-from-top-2 duration-300">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
