import { useState } from 'react';
import { Search } from 'lucide-react';

interface SteamData {
  temp: number; // °C
  pressure: number; // bar
  volume: number; // m³/kg
  enthalpy: number; // kJ/kg
}

const STEAM_DATA: SteamData[] = [
  { temp: 100, pressure: 1.013, volume: 1.673, enthalpy: 2676 },
  { temp: 110, pressure: 1.433, volume: 1.210, enthalpy: 2691 },
  { temp: 120, pressure: 1.985, volume: 0.891, enthalpy: 2706 },
  { temp: 130, pressure: 2.701, volume: 0.668, enthalpy: 2720 },
  { temp: 140, pressure: 3.614, volume: 0.508, enthalpy: 2733 },
  { temp: 150, pressure: 4.760, volume: 0.392, enthalpy: 2746 },
  { temp: 160, pressure: 6.181, volume: 0.307, enthalpy: 2757 },
  { temp: 170, pressure: 7.920, volume: 0.242, enthalpy: 2768 },
  { temp: 180, pressure: 10.02, volume: 0.194, enthalpy: 2777 },
  { temp: 190, pressure: 12.55, volume: 0.156, enthalpy: 2786 },
  { temp: 200, pressure: 15.55, volume: 0.127, enthalpy: 2793 },
  { temp: 210, pressure: 19.08, volume: 0.104, enthalpy: 2799 },
  { temp: 220, pressure: 23.20, volume: 0.086, enthalpy: 2804 },
  { temp: 230, pressure: 27.98, volume: 0.071, enthalpy: 2807 },
  { temp: 240, pressure: 33.48, volume: 0.060, enthalpy: 2810 },
  { temp: 250, pressure: 39.78, volume: 0.050, enthalpy: 2811 },
];

export default function SteamTable() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = STEAM_DATA.filter(data => 
    data.temp.toString().includes(searchTerm) || 
    data.pressure.toString().includes(searchTerm)
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h4 className="text-xl font-bold text-white mb-1">포화증기표 (Saturated Steam Table)</h4>
          <p className="text-sm text-gray-400">온도에 따른 포화증기의 압력 및 물성치 참조</p>
        </div>
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
          <input
            type="text"
            placeholder="온도 또는 압력 검색..."
            className="w-full bg-deep-navy border border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-electric-blue transition-colors"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-white/5">
        <table className="w-full text-sm text-left">
          <thead className="bg-white/5 text-gray-300 font-bold">
            <tr>
              <th className="px-6 py-4">온도 (°C)</th>
              <th className="px-6 py-4">압력 (bar)</th>
              <th className="px-6 py-4">비체적 (m³/kg)</th>
              <th className="px-6 py-4">엔탈피 (kJ/kg)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {filteredData.map((data, idx) => (
              <tr key={idx} className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4 text-electric-blue font-bold">{data.temp}</td>
                <td className="px-6 py-4 text-white">{data.pressure.toFixed(3)}</td>
                <td className="px-6 py-4 text-gray-400">{data.volume.toFixed(3)}</td>
                <td className="px-6 py-4 text-gray-400">{data.enthalpy}</td>
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan={4} className="px-6 py-12 text-center text-gray-500">
                  검색 결과가 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      <div className="bg-white/5 rounded-xl p-4 border border-white/5">
        <p className="text-xs text-gray-500 leading-relaxed">
          * 본 데이터는 표준 대기압 상태에서의 근사치이며, 실제 설계 시에는 정밀한 물성치 계산 프로그램을 사용하시기 바랍니다.<br />
          * 압력은 절대압(Absolute Pressure) 기준입니다.
        </p>
      </div>
    </div>
  );
}
