
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
          const offset = 100; // Offset for sticky navbar
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

    // Delay to ensure components are rendered
    const timer = setTimeout(handleScroll, 300);
    return () => clearTimeout(timer);
  }, [search, hash]);

  const legalContent = {
    ar: {
      sections: [
        {
          id: "terms",
          title: "شروط الاستخدام",
          content: "باستخدامك لمنصة CVEEEZ، فإنك توافق على الالتزام بالشروط والأحكام الموضحة هنا. تهدف هذه الشروط إلى حماية حقوقك وحقوق المنصة وضمان تجربة آمنة لجميع المستخدمين. يتحمل المستخدم مسؤولية دقة المعلومات المدخلة في السيرة الذاتية. يمنع استخدام المنصة في أغراض غير قانونية أو انتحال صفات الغير."
        },
        {
          id: "privacy",
          title: "سياسة الخصوصية",
          content: "نحن نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. نجمع المعلومات التي تقدمها عند التسجيل أو بناء سيرتك الذاتية مثل الاسم والبريد الإلكتروني لتحسين تجربة الخدمة. نستخدم تقنيات تشفير متطورة لضمان أمان معلوماتك ولن نقوم ببيع بياناتك لأطراف ثالثة لأغراض تسويقية."
        },
        {
          id: "refund",
          title: "سياسة الاسترداد",
          content: "نحن نسعى لرضاكم التام. يمكن طلب الاسترداد في حال وجود خلل فني في الخدمة لم نتمكن من حله خلال 14 يوماً من تاريخ الشراء، بشرط عدم استهلاك الخدمة بشكل كامل. يرجى الملاحظة أن استرداد مبالغ صانع السيرة الذاتية لا ينطبق بعد البدء الفعلي في إنشاء الملف نظراً لطبيعة المنتجات الرقمية الفورية."
        }
      ]
    },
    en: {
      sections: [
        {
          id: "terms",
          title: "Terms of Use",
          content: "By using CVEEEZ, you agree to comply with the terms and conditions outlined here. These terms aim to protect your rights and the platform's rights. Users are responsible for the accuracy of info in their CV. Using the platform for illegal purposes or impersonation is strictly prohibited."
        },
        {
          id: "privacy",
          title: "Privacy Policy",
          content: "We respect your privacy and are committed to protecting your personal data. We collect information you provide during registration or CV building to improve service experience. We use advanced encryption to ensure data security and will never sell your data to third parties for marketing."
        },
        {
          id: "refund",
          title: "Refund Policy",
          content: "We strive for your total satisfaction. Refund requests can be made for technical issues we fail to resolve within 14 days of purchase, provided the service hasn't been fully consumed. Note: CV builder refunds don't apply once document creation has started due to the instant nature of digital products."
        }
      ]
    }
  };

  const currentLegal = legalContent[lang].sections;

  return (
    <div className="animate-in fade-in duration-700">
      <Hero lang={lang} />
      <TrustMetrics />
      <Solutions lang={lang} />
      <About lang={lang} />
      <FAQ lang={lang} />
      <Testimonials lang={lang} />
      <Contact lang={lang} />
      
      {/* Integrated Legal Sections */}
      <section className="py-24 bg-white dark:bg-slate-950 px-4 sm:px-6 lg:px-8 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-4xl mx-auto space-y-24">
          {currentLegal.map((section) => (
            <div key={section.id} id={section.id} className="scroll-mt-32">
              <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-6 flex items-center gap-4">
                <span className="w-1.5 h-8 bg-primary-600 rounded-full block"></span>
                {section.title}
              </h2>
              <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800">
                <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  {section.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
