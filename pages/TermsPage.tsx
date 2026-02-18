
import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 text-right">
      <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-4">شروط الاستخدام</h1>
      <p className="text-slate-500 mb-12">آخر تحديث: ١٨ فبراير ٢٠٢٦</p>

      <div className="space-y-12 text-lg text-slate-700 dark:text-slate-300 leading-loose">
        <section>
          <h2 className="text-2xl font-black mb-4">١. شروط الاستخدام</h2>
          <p>باستخدامك لمنصة CVEEEZ، فإنك توافق على الالتزام بالشروط والأحكام الموضحة هنا. تهدف هذه الشروط إلى حماية حقوقك وحقوق المنصة وضمان تجربة آمنة لجميع المستخدمين.</p>
        </section>

        <section>
          <h2 className="text-2xl font-black mb-4">٢. حقوق المستخدم ومسؤولياته</h2>
          <p>يتحمل المستخدم مسؤولية دقة المعلومات المدخلة في السيرة الذاتية. يمنع استخدام المنصة في أغراض غير قانونية أو انتحال صفات الغير. تظل البيانات الشخصية ملكاً للمستخدم، بينما تظل تصاميم القوالب ملكية فكرية لـ CVEEEZ.</p>
        </section>

        <section>
          <h2 className="text-2xl font-black mb-4">٣. سياسة الدفع والاسترداد</h2>
          <p>تتم عمليات الدفع من خلال بوابات دفع آمنة. يخضع استرداد المبالغ للشروط الموضحة في سياسة الاسترداد الخاصة بنا. يرجى العلم أن بعض الخدمات الرقمية التي يتم استهلاكها فوراً قد لا تكون قابلة للاسترداد.</p>
        </section>

        <section>
          <h2 className="text-2xl font-black mb-4">٤. قيود العمر</h2>
          <p>يجب أن يكون المستخدم قد بلغ السن القانوني للعمل في بلده لاستخدام خدمات التوظيف. يُمنع استخدام المنصة من قبل الأطفال دون سن ١٣ عاماً دون رقابة الوالدين.</p>
        </section>

        <section>
          <h2 className="text-2xl font-black mb-4">٥. القانون الحاكم</h2>
          <p>تخضع هذه الشروط لقوانين جمهورية مصر العربية، وأي نزاع ينشأ عنها يتم حله أمام المحاكم المختصة في القاهرة.</p>
        </section>
      </div>
    </div>
  );
};

export default TermsPage;
