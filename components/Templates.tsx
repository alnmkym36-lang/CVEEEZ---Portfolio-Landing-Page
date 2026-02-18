
import React from 'react';
import { Palette, Layers, CheckCircle } from 'lucide-react';

const Templates: React.FC = () => {
  return (
    <section id="templates" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img src="https://picsum.photos/400/550?template=1" alt="CV Template 1" className="rounded-2xl shadow-xl hover:scale-[1.02] transition-transform" />
                <img src="https://picsum.photos/400/550?template=2" alt="CV Template 2" className="rounded-2xl shadow-xl hover:scale-[1.02] transition-transform" />
              </div>
              <div className="space-y-4">
                <img src="https://picsum.photos/400/550?template=3" alt="CV Template 3" className="rounded-2xl shadow-xl hover:scale-[1.02] transition-transform" />
                <img src="https://picsum.photos/400/550?template=4" alt="CV Template 4" className="rounded-2xl shadow-xl hover:scale-[1.02] transition-transform" />
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2">
            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6">قوالب عصرية تواكب عام 2025</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              لقد درسنا مئات التصاميم لنقدم لك الأفضل. قوالبنا ليست مجرد "جميلة"، بل هي ذكية ومصممة هندسياً لتجذب انتباه مديري التوظيف.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "قالب 2025 الجديد كلياً للمحترفين",
                "تحكم كامل بالألوان والخطوط",
                "متوافق 100% مع أنظمة ATS الذكية",
                "تصدير PDF بجودة طباعة عالية"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-lg font-bold text-slate-700 dark:text-slate-200">
                  <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={16} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="https://www.cveeez.net/services/ai-cv-builder"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 bg-primary-600 hover:bg-primary-700 text-white rounded-2xl font-black text-lg transition-all shadow-xl shadow-primary-500/25"
            >
              ابدأ الآن مجاناً
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Templates;
