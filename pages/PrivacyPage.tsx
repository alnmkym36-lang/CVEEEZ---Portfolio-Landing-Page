
import React from 'react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 text-right">
      <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-4">سياسة الخصوصية</h1>
      <p className="text-slate-500 mb-12">آخر تحديث: ١٨ فبراير ٢٠٢٦</p>

      <div className="space-y-12 text-lg text-slate-700 dark:text-slate-300 leading-loose">
        <section>
          <h2 className="text-2xl font-black mb-4">١. البيانات التي نجمعها</h2>
          <p>نجمع المعلومات التي تقدمها عند التسجيل أو بناء سيرتك الذاتية، مثل الاسم، البريد الإلكتروني، الخبرات العملية، والمهارات. كما نجمع بيانات تقنية مثل عنوان IP ونوع المتصفح لتحسين الأداء.</p>
        </section>

        <section>
          <h2 className="text-2xl font-black mb-4">٢. كيف نستخدم بياناتك</h2>
          <p>نستخدم بياناتك لتوفير خدماتنا، تخصيص تجربتك، معالجة المدفوعات، وإرسال تنبيهات الوظائف المناسبة لك. لن نقوم ببيع بياناتك لأطراف ثالثة لأغراض تسويقية.</p>
        </section>

        <section>
          <h2 className="text-2xl font-black mb-4">٣. حماية المعلومات</h2>
          <p>نستخدم تقنيات تشفير متطورة لحماية بياناتك الشخصية من الوصول غير المصرح به. يتم تخزين البيانات في خوادم سحابية مؤمنة تتبع أعلى معايير الأمان العالمية.</p>
        </section>

        <section>
          <h2 className="text-2xl font-black mb-4">٤. سياسة ملفات تعريف الارتباط</h2>
          <p>نستخدم ملفات تعريف الارتباط (Cookies) لتحسين تصفح الموقع وتذكر إعداداتك المفضلة. يمكنك التحكم في قبول أو رفض هذه الملفات من إعدادات متصفحك.</p>
        </section>

        <section>
          <h2 className="text-2xl font-black mb-4">٥. الامتثال للائحة GDPR</h2>
          <p>نحترم حقوق الخصوصية العالمية بما في ذلك اللائحة العامة لحماية البيانات (GDPR). يحق لك طلب حذف بياناتك أو الحصول على نسخة منها في أي وقت.</p>
        </section>

        <section>
          <h2 className="text-2xl font-black mb-4">٦. التغييرات على هذه السياسة</h2>
          <p>قد نقوم بتحديث سياسة الخصوصية من وقت لآخر. سيتم إخطار المستخدمين بأي تغييرات جوهرية عبر البريد الإلكتروني أو من خلال إشعار على الموقع.</p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPage;
