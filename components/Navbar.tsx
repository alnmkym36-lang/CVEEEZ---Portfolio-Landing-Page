
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, ChevronLeft, ChevronRight, Languages } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  lang: 'ar' | 'en';
  toggleLang: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode, lang, toggleLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const translations = {
    ar: {
      about: 'نبذة عنا',
      solutions: 'الحلول',
      pricing: 'الأسعار',
      contact: 'تواصل معنا',
      login: 'تسجيل الدخول',
      cta: 'اصنع سيرتك الآن',
    },
    en: {
      about: 'About Us',
      solutions: 'Solutions',
      pricing: 'Pricing',
      contact: 'Contact',
      login: 'Login',
      cta: 'Create CV',
    }
  };

  const t = translations[lang];

  const navLinks = [
    { name: t.about, id: 'about' },
    { name: t.solutions, id: 'solutions' },
    { name: t.pricing, id: 'pricing' },
    { name: t.contact, id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/?scroll=${id}`);
    }
  };

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div onClick={handleLogoClick} className="flex items-center gap-2 group cursor-pointer relative z-50">
            <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-primary-500/20 group-hover:scale-110 transition-transform">
              C
            </div>
            <span className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter">CVEEEZ</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 font-bold transition-colors cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-black text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            >
              <Languages size={18} />
              {lang === 'ar' ? 'EN' : 'عربي'}
            </button>
            <button
              onClick={toggleDarkMode}
              className="p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors cursor-pointer"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a
              href="https://www.cveeez.net/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 dark:text-slate-200 font-bold hover:text-primary-600 px-4 py-2 transition-colors"
            >
              {t.login}
            </a>
            <a
              href="https://www.cveeez.net/services/ai-cv-builder"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-6 py-2.5 rounded-full transition-all shadow-lg shadow-primary-500/25 flex items-center gap-2"
            >
              {t.cta}
              {lang === 'ar' ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <button onClick={toggleLang} className="p-2 text-slate-500 dark:text-slate-400 font-black text-xs">
              {lang === 'ar' ? 'EN' : 'عربي'}
            </button>
            <button onClick={toggleDarkMode} className="p-2 text-slate-500 dark:text-slate-400">
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-600 dark:text-slate-300 relative z-50 cursor-pointer">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white dark:bg-slate-900 pt-24 px-4 overflow-y-auto animate-in fade-in zoom-in duration-200">
          <div className="space-y-2 text-right">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full ${lang === 'ar' ? 'text-right' : 'text-left'} px-4 py-5 text-xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 flex items-center justify-between`}
              >
                {link.name}
                {lang === 'ar' ? <ChevronLeft size={20} className="text-slate-400" /> : <ChevronRight size={20} className="text-slate-400" />}
              </button>
            ))}
            <div className="pt-8 flex flex-col gap-4 pb-10">
              <a href="https://www.cveeez.net/login" className="w-full text-center py-4 text-lg font-black text-slate-700 dark:text-slate-200 border-2 border-slate-200 dark:border-slate-700 rounded-2xl">{t.login}</a>
              <a href="https://www.cveeez.net/services/ai-cv-builder" className="w-full bg-primary-600 text-white text-center py-5 rounded-2xl font-black text-lg shadow-xl shadow-primary-500/20">{t.cta}</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
