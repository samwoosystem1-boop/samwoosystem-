import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, Table2, Thermometer, Ruler } from 'lucide-react';
import UnitConverter from './technical/UnitConverter';
import ThermocoupleTable from './technical/ThermocoupleTable';
import RTDTable from './technical/RTDTable';
import PipeScheduleTable from './technical/PipeScheduleTable';
import SteamTable from './technical/SteamTable';

export default function LibrarySection() {
  const [activeTab, setActiveTab] = useState('Unit');
  
  const tabs = [
    { id: 'Unit', name: '공학단위변환', icon: Calculator },
    { id: 'TC', name: '열전대 열기전력표', icon: Thermometer },
    { id: 'RTD', name: 'RTD저항표', icon: Table2 },
    { id: 'Pipe', name: '배관호칭경 및 스케쥴(sch)표', icon: Ruler },
    { id: 'Steam', name: '포화증기표', icon: Table2 },
  ];

  return (
    <section id="library" className="section-padding relative">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-electric-blue font-bold mb-2">TECHNICAL TOOLS</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">기술 자료 및 도구</h3>
          <p className="mt-4 text-gray-400">
            산업 현장에서 필요한 정밀 계산 및 참조 데이터를 실시간으로 확인하세요.
          </p>
        </div>

        <div className="bg-slate-blue rounded-3xl shadow-2xl border border-white/5 overflow-hidden">
          {/* Tabs */}
          <div className="flex flex-col md:flex-row border-b border-white/5">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center gap-3 py-6 px-4 text-sm font-bold transition-all border-b-2 ${
                    activeTab === tab.id 
                      ? 'bg-white/5 text-electric-blue border-electric-blue' 
                      : 'text-gray-500 border-transparent hover:text-gray-300 hover:bg-white/5'
                  }`}
                >
                  <Icon size={20} />
                  {tab.name}
                </button>
              );
            })}
          </div>

          {/* Content */}
          <div className="p-4 md:p-8 min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === 'Unit' && <UnitConverter />}
                {activeTab === 'TC' && <ThermocoupleTable />}
                {activeTab === 'RTD' && <RTDTable />}
                {activeTab === 'Pipe' && <PipeScheduleTable />}
                {activeTab === 'Steam' && <SteamTable />}
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="p-6 bg-deep-navy/50 text-center border-t border-white/5">
            <p className="text-sm text-gray-500">
              더 자세한 기술 상담이 필요하신가요? <a href="#contact" className="text-electric-blue font-bold underline">전문가에게 문의하기</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
