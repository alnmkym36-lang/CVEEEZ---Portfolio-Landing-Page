
import React from 'react';

interface TestimonialsProps {
  lang: 'ar' | 'en';
}

const Testimonials: React.FC<TestimonialsProps> = ({ lang }) => {
  const translations = {
    ar: {
      badge: "قصص نجاح",
      title: "ماذا يقول مستخدمونا",
      subtitle: "نماذج توضيحية لتجارب المستخدمين مع خدماتنا",
      reviews: [
        { 
          name: "أحمد م.", 
          role: "مهندس برمجيات", 
          content: "ساعدتني المنصة في تحويل سيرتي الذاتية القديمة إلى شكل احترافي جداً، وحصلت على مقابلة في أول أسبوع.", 
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop" 
        },
        { 
          name: "سارة ح.", 
          role: "مديرة تسويق", 
          content: "بساطة التصميم وقوة الذكاء الاصطناعي في صياغة المهام كانت مبهرة. أنصح بها كل زملائي.", 
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop" 
        },
        { 
          name: "محمد ع.", 
          role: "خريج جديد", 
          content: "كنت تائهاً في كيفية كتابة سيرتي الأولى، لكن القوالب والارشادات جعلت الأمر في غاية السهولة.", 
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop" 
        },
      ]
    },
    en: {
      badge: "Success Stories",
      title: "What Our Users Say",
      subtitle: "Real experiences from users who transformed their careers with us",
      reviews: [
        { 
          name: "Ahmed M.", 
          role: "Software Engineer", 
          content: "The platform helped me transform my old CV into a very professional look, and I landed an interview in the first week.", 
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop" 
        },
        { 
          name: "Sara H.", 
          role: "Marketing Manager", 
          content: "The simplicity of the design and the power of AI in phrasing tasks were impressive. I highly recommend it to all my colleagues.", 
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop" 
        },
        { 
          name: "Mohamed A.", 
          role: "Fresh Graduate", 
          content: "I was lost on how to write my first CV, but the templates and guidance made it extremely easy.", 
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop" 
        },
      ]
    }
  };

  const t = translations[lang];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary-600 font-bold mb-2 block">{t.badge}</span>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white">{t.title}</h2>
          <p className="text-slate-500 mt-2">{t.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.reviews.map((r, i) => (
            <div key={i} className="p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
              <div className={`flex items-center gap-4 mb-6 ${lang === 'en' ? 'flex-row' : 'flex-row'}`}>
                <img src={r.avatar} alt={r.name} className="w-12 h-12 rounded-full border-2 border-primary-500/20 object-cover" referrerPolicy="no-referrer" />
                <div className={lang === 'ar' ? 'text-right' : 'text-left'}>
                  <h4 className="font-bold text-slate-900 dark:text-white">{r.name}</h4>
                  <p className="text-sm text-slate-500">{r.role}</p>
                </div>
              </div>
              <p className={`text-slate-600 dark:text-slate-400 italic leading-relaxed ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                "{r.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
