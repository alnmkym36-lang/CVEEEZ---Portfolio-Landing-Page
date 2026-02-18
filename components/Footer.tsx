
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface FooterProps {
  lang: 'ar' | 'en';
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const location = useLocation();

  const translations = {
    ar: {
      slogan: "نحن نحقق أهدافك",
      quick: "روابط سريعة",
      services: "الخدمات",
      legal: "القانونية",
      links: [
        { n: "نبذة عنا", id: "about" },
        { n: "الحلول", id: "solutions" },
        { n: "الأسعار", id: "pricing" },
        { n: "تواصل معنا", id: "contact" }
      ],
      srvLinks: [
        { n: "بناء السيرة الذاتية", h: "https://www.cveeez.net/services/ai-cv-builder" },
        { n: "بوابة الوظائف", h: "https://www.cveeez.net/jobs" },
        { n: "مترجم النصوص", h: "https://www.cveeez.net/translator" },
        { n: "المتجر الإلكتروني", h: "https://www.cveeez.net/ecommerce" }
      ],
      legLinks: [
        { n: "شروط الاستخدام", id: "terms" },
        { n: "سياسة الخصوصية", id: "privacy" },
        { n: "سياسة الاسترداد", id: "refund" }
      ],
      rights: "جميع الحقوق محفوظة."
    },
    en: {
      slogan: "We Achieve Your Goals",
      quick: "Quick Links",
      services: "Services",
      legal: "Legal",
      links: [
        { n: "About Us", id: "about" },
        { n: "Solutions", id: "solutions" },
        { n: "Pricing", id: "pricing" },
        { n: "Contact Us", id: "contact" }
      ],
      srvLinks: [
        { n: "CV Builder", h: "https://www.cveeez.net/services/ai-cv-builder" },
        { n: "Job Portal", h: "https://www.cveeez.net/jobs" },
        { n: "Text Translator", h: "https://www.cveeez.net/translator" },
        { n: "Ecommerce", h: "https://www.cveeez.net/ecommerce" }
      ],
      legLinks: [
        { n: "Terms of Use", id: "terms" },
        { n: "Privacy Policy", id: "privacy" },
        { n: "Refund Policy", id: "refund" }
      ],
      rights: "All rights reserved."
    }
  };

  const t = translations[lang];

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        const offset = 100;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className={`flex items-center gap-2 mb-6 ${lang === 'ar' ? 'justify-start' : 'justify-start'}`}>
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white font-black text-lg">C</div>
              <span className="text-xl font-black text-slate-900 dark:text-white tracking-tighter">CVEEEZ</span>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 font-bold mb-4">{t.slogan}</p>
          </div>

          <div>
            <h4 className="font-black text-slate-900 dark:text-white mb-6">{t.quick}</h4>
            <ul className="space-y-4">
              {t.links.map(l => (
                <li key={l.id}><Link to={`/?scroll=${l.id}`} onClick={(e) => handleNavClick(e, l.id)} className="text-slate-600 dark:text-slate-400 hover:text-primary-600 transition-colors block font-bold">{l.n}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black text-slate-900 dark:text-white mb-6">{t.services}</h4>
            <ul className="space-y-4">
              {t.srvLinks.map(l => (
                <li key={l.h}><a href={l.h} target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-primary-600 transition-colors block font-bold">{l.n}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black text-slate-900 dark:text-white mb-6">{t.legal}</h4>
            <ul className="space-y-4">
              {t.legLinks.map(l => (
                <li key={l.id}>
                  <Link 
                    to={`/?scroll=${l.id}`} 
                    onClick={(e) => handleNavClick(e, l.id)} 
                    className="text-slate-600 dark:text-slate-400 hover:text-primary-600 transition-colors block font-bold"
                  >
                    {l.n}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
          <p>© 2026 CVEEEZ. {t.rights}</p>
          <div className="flex gap-6">
            <a href="https://facebook.com/cveeez" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 transition-colors font-bold">Facebook</a>
            <a href="https://linkedin.com/company/cveeez" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 transition-colors font-bold">LinkedIn</a>
            <a href="https://instagram.com/cveeez" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 transition-colors font-bold">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
