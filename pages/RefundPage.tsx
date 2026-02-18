
import React from 'react';

const RefundPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 text-right">
      <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-4">سياسة الاسترداد</h1>
      <p className="text-slate-500 mb-12">آخر تحديث: ١٨ فبراير ٢٠٢٦</p>

      <div className="space-y-12 text-lg text-slate-700 dark:text-slate-300 leading-loose">
        <section>
          <h2 className="text-2xl font-black mb-4">١. شروط الاسترداد</h2>
          <p>نحن نسعى لرضاكم التام. يمكن طلب الاسترداد في حال وجود خلل فني في الخدمة لم نتمكن من حله، أو إذا لم تبدأ في استخدام الخدمة الرقمية المدفوعة بعد.</p>
        </section>

        <section>
          <h2 className="text-2xl font-black mb-4">٢. فترة الاسترداد (١٤ يوماً)</h2>
          <p>يحق للمستخدم طلب استرداد المبلغ خلال ١٤ يوماً من تاريخ الشراء، بشرط عدم استهلاك الخدمة بشكل كامل. يرجى الملاحظة أن استرداد مبالغ "صانع السيرة الذاتية بالذكاء الاصطناعي" لا ينطبق بعد البدء فعلياً في إنشاء السيرة الذاتية نظراً لطبيعة الخدمة الفورية.</p>
        </section>

        <section>
          <h2 className="text-2xl font-black mb-4">٣. كيفية طلب استرداد</h2>
          <p>
            لتقديم طلب استرداد، يرجى مراسلتنا على{' '}
            <a 
              href="mailto:support@cveeez.online" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary-600 font-bold hover:underline"
            >
              support@cveeez.online
            </a>{' '}
            مع إرفاق رقم العملية وسبب الطلب. سنقوم بالرد على طلبك خلال ٣-٥ أيام عمل.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black mb-4">٤. معالجة المبالغ المستردة</h2>
          <p>بمجرد الموافقة على الطلب، سيتم استرداد المبلغ إلى نفس وسيلة الدفع الأصلية. قد تستغرق عملية ظهور المبلغ في حسابك من ٥ إلى ١٠ أيام عمل حسب سياسة البنك الخاص بك.</p>
        </section>
      </div>
    </div>
  );
};

export default RefundPage;
