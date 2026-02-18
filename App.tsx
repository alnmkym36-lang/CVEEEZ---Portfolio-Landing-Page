
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import RefundPage from './pages/RefundPage';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });

  const [lang, setLang] = useState<'ar' | 'en'>(() => {
    const saved = localStorage.getItem('lang');
    return (saved as 'ar' | 'en') || 'ar';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('lang', lang);
  }, [lang]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleLang = () => setLang(prev => prev === 'ar' ? 'en' : 'ar');

  return (
    <Router>
      <div className={`min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 selection:bg-primary-500/30 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
        <Navbar 
          isDarkMode={isDarkMode} 
          toggleDarkMode={toggleDarkMode} 
          lang={lang} 
          toggleLang={toggleLang} 
        />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<LandingPage lang={lang} />} />
            <Route path="/terms" element={<TermsPage lang={lang} />} />
            <Route path="/privacy" element={<PrivacyPage lang={lang} />} />
            <Route path="/refund-policy" element={<RefundPage lang={lang} />} />
          </Routes>
        </main>
        <Footer lang={lang} />
      </div>
    </Router>
  );
};

export default App;
