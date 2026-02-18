
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface ContactProps {
  lang: 'ar' | 'en';
}

const Contact: React.FC<ContactProps> = ({ lang }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const translations = {
    ar: {
      newsTitle: "اشترك في نشرتنا البريدية",
      newsDesc: "كن أول من يعرف عن أحدث الوظائف وخدمات الذكاء الاصطناعي الجديدة.",
      newsBtn: "اشترك الآن",
      newsSuccess: "تم الاشتراك بنجاح!",
      title: "لنبدأ محادثة",
      desc: "فريقنا جاهز للرد على استفساراتك ومساعدتك في رحلتك المهنية.",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف",
      location: "الموقع",
      locationVal: "القاهرة، مصر",
      nameLabel: "الاسم الكامل",
      emailLabel: "البريد الإلكتروني",
      msgLabel: "الرسالة",
      send: "إرسال الرسالة",
      placeholders: { name: "أدخل اسمك", email: "mail@example.com", msg: "كيف يمكننا مساعدتك؟" }
    },
    en: {
      newsTitle: "Subscribe to Our Newsletter",
      newsDesc: "Be the first to know about the latest jobs and new AI services.",
      newsBtn: "Subscribe Now",
      newsSuccess: "Subscribed Successfully!",
      title: "Let's Start a Conversation",
      desc: "Our team is ready to answer your questions and help you in your career journey.",
      email: "Email",
      phone: "Phone Number",
      location: "Location",
      locationVal: "Cairo, Egypt",
      nameLabel: "Full Name",
      emailLabel: "Email Address",
      msgLabel: "Message",
      send: "Send Message",
      placeholders: { name: "Enter your name", email: "mail@example.com", msg: "How can we help you?" }
    }
  };

  const t = translations[lang];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 5000);
      setNewsletterEmail('');
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Message from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;
    window.location.href = `mailto:cveeez@cveeez.online?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 dark:bg-primary-900/20 rounded-[3rem] p-10 md:p-16 mb-24 relative overflow-hidden">
          <div className="max-w-2xl mx-auto text-center relative z-10">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-6">{t.newsTitle}</h3>
            <p className="text-slate-400 mb-10 text-lg">{t.newsDesc}</p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4">
              <input type="email" required placeholder={t.placeholders.email} value={newsletterEmail} onChange={(e) => setNewsletterEmail(e.target.value)} className="flex-grow px-6 py-5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-left" dir="ltr" />
              <button type="submit" className="px-10 py-5 bg-primary-600 hover:bg-primary-700 text-white rounded-2xl font-black text-lg transition-all shadow-xl shadow-primary-500/25">
                {isSubscribed ? t.newsSuccess : t.newsBtn}
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className={`${lang === 'en' ? 'order-1' : 'order-1'}`}>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-8">{t.title}</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-12">{t.desc}</p>

            <div className="space-y-8">
              <a href="mailto:cveeez@cveeez.online" className="flex items-center gap-6 p-6 bg-slate-50 dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 hover:border-primary-500 transition-all group">
                <div className="w-14 h-14 bg-white dark:bg-slate-700 rounded-2xl flex items-center justify-center text-primary-600 shadow-sm group-hover:scale-110 transition-transform">
                  <Mail size={28} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-1">{t.email}</p>
                  <p className="text-xl font-black text-slate-900 dark:text-white">cveeez@cveeez.online</p>
                </div>
              </a>
              <a href="tel:+201065236963" className="flex items-center gap-6 p-6 bg-slate-50 dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 hover:border-primary-500 transition-all group">
                <div className="w-14 h-14 bg-white dark:bg-slate-700 rounded-2xl flex items-center justify-center text-green-600 shadow-sm group-hover:scale-110 transition-transform">
                  <Phone size={28} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-1">{t.phone}</p>
                  <p className="text-xl font-black text-slate-900 dark:text-white" dir="ltr">+20 106 523 6963</p>
                </div>
              </a>
              <div className="flex items-center gap-6 p-6 bg-slate-50 dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 transition-all">
                <div className="w-14 h-14 bg-white dark:bg-slate-700 rounded-2xl flex items-center justify-center text-red-500 shadow-sm">
                  <MapPin size={28} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-1">{t.location}</p>
                  <p className="text-xl font-black text-slate-900 dark:text-white">{t.locationVal}</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleContactSubmit} className={`bg-slate-50 dark:bg-slate-800 p-8 md:p-12 rounded-[3rem] border border-slate-100 dark:border-slate-700 shadow-sm ${lang === 'en' ? 'order-2' : 'order-2'}`}>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">{t.nameLabel}</label>
                <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all" placeholder={t.placeholders.name} />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">{t.emailLabel}</label>
                <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all" placeholder={t.placeholders.email} dir="ltr" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">{t.msgLabel}</label>
                <textarea required rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none" placeholder={t.placeholders.msg}></textarea>
              </div>
              <button type="submit" className="w-full py-5 bg-primary-600 hover:bg-primary-700 text-white rounded-2xl font-black text-lg transition-all shadow-xl shadow-primary-500/25 flex items-center justify-center gap-3">
                {t.send}
                <Send size={20} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
