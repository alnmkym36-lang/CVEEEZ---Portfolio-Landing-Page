
import React from 'react';
import { Cpu, CheckCircle, Shield, FileOutput, Award } from 'lucide-react';

const TrustMetrics: React.FC = () => {
  const metrics = [
    { label: "تحليل ذكي", value: "98/100 Score", icon: <Cpu size={20} /> },
    { label: "متوافق ATS", value: "ATS Friendly", icon: <CheckCircle size={20} /> },
    { label: "موثوق", value: "Verified", icon: <Shield size={20} /> },
    { label: "تصدير PDF", value: "PDF Export", icon: <FileOutput size={20} /> },
    { label: "جودة عالية", value: "High Quality", icon: <Award size={20} /> },
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 py-10 overflow-x-auto whitespace-nowrap">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center gap-8 md:gap-4">
        {metrics.map((m, i) => (
          <div key={i} className="flex flex-col md:flex-row items-center gap-2 min-w-[120px]">
            <div className="text-primary-500">{m.icon}</div>
            <div className="text-center md:text-right">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{m.label}</p>
              <p className="text-sm font-black text-slate-900 dark:text-white">{m.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustMetrics;
