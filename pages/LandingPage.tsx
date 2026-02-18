
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import TrustMetrics from '../components/TrustMetrics';
import Solutions from '../components/Solutions';
import About from '../components/About';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';

interface LandingPageProps {
  lang: 'ar' | 'en';
}

const LandingPage: React.FC<LandingPageProps> = ({ lang }) => {
  const { search, hash } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const params = new URLSearchParams(search);
      const scrollTarget = params.get('scroll') || (hash ? hash.replace('#', '') : null);
      
      if (scrollTarget) {
        const element = document.getElementById(scrollTarget);
        if (element) {
          const offset = 100; // Offset for navbar
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

    // Small delay to ensure components are rendered
    const timer = setTimeout(handleScroll, 200);
    return () => clearTimeout(timer);
  }, [search, hash]);

  const legalContent = {
    ar: {
      terms: {
        title: "شروط الاستخدام",
        content: "باستخدامك لمنصة CVEEEZ، فإنك توافق على الالتزام بالشروط والأحكام الموضحة هنا. تهدف هذه الشروط إلى حماية حقوقك وحقوق المنصة وضمان تجربة آمنة لجميع المستخدمين. يتحمل المستخدم مسؤولية دقة المعلومات المدخلة في السيرة الذاتية. يمنع استخدام المنصة في أغراض غير قانونية."
      },
      privacy: {
        title: "سياسة الخصوصية",
        content: "نحن نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. نجمع المعلومات التي تقدمها عند التسجيل أو بناء سيرتك الذاتية مثل الاسم والبريد الإلكتروني لتحسين تجربة الخدمة. نستخدم تقنيات تشفير متطورة لضمان أمان معلوماتك ولن نقوم ببيع بياناتك لأطراف ثالثة."
      },
      refund: {
        title: "سياسة الاسترداد",
        content: "نحن نسعى لرضاكم التام. يمكن طلب الاسترداد في حال وجود خلل فني في الخدمة لم نتمكن من حله خلال 14 يوماً من تاريخ الشراء، بشرط عدم استهلاك الخدمة بشكل كامل. يرجى الملاحظة أن استرداد مبالغ صانع السيرة الذاتية لا ينطبق بعد البدء الفعلي في إنشاء الملف."
      }
    },
    en: {
      terms: {
        title: "Terms of Use",
        content: "By using CVEEEZ, you agree to comply with the terms and conditions outlined here. These terms aim to protect your rights and the platform's rights. The user is responsible for the accuracy of information entered in the CV. Using the platform for illegal purposes is strictly prohibited."
      },
      privacy: {
        title: "Privacy Policy",
        content: "We respect your privacy and are committed to protecting your personal data. We collect information you provide during registration or CV building to improve service experience. We use advanced encryption technologies to ensure data security and will never sell your data to third parties."
      },
      refund: {
        title: "Refund Policy",
        content: "We strive for your total satisfaction. Refund requests can be made for technical issues we fail to resolve within 14 days of purchase, provided the service hasn't been fully consumed. Note: CV builder refunds don't apply once document creation has started."
      }
    }
  };

  const t = legalContent[lang];

  return (
    <div className="animate-in fade-in duration-700">
      <Hero lang={lang} />
      <TrustMetrics />
      <Solutions lang={lang} />
      <About lang={lang} />
      <FAQ lang={lang} />
      <Testimonials lang={lang} />
      <Contact lang={lang} />
      
      {/* Legal Sections Integrated for Smooth Scroll */}
      <section className="pb-24 bg-white dark:bg-slate-950 px-4 sm:px-6 lg:px-8 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-4xl mx-auto space-y-20 pt-20">
          <div id="terms" className="scroll-mt-24">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4 border-r-4 border-primary-600 pr-4">{t.terms.title}</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">{t.terms.content}</p>
          </div>
          
          <div id="privacy" className="scroll-mt-24">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4 border-r-4 border-primary-600 pr-4">{t.privacy.title}</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">{t.privacy.content}</p>
          </div>
          
          <div id="refund" className="scroll-mt-24">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4 border-r-4 border-primary-600 pr-4">{t.refund.title}</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">{t.refund.content}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
