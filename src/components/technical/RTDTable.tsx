import { useState } from 'react';

const rtdData = {
  'Pt100': {
    name: 'Pt100 (Platinum 100Ω)',
    alpha: '0.003851',
    table: [
      { temp: -50, res: 80.31 },
      { temp: 0, res: 100.00 },
      { temp: 50, res: 119.40 },
      { temp: 100, res: 138.51 },
      { temp: 150, res: 157.33 },
      { temp: 200, res: 175.86 },
      { temp: 250, res: 194.10 },
      { temp: 300, res: 212.05 },
    ]
  },
  'Pt1000': {
    name: 'Pt1000 (Platinum 1000Ω)',
    alpha: '0.003851',
    table: [
      { temp: -50, res: 803.1 },
      { temp: 0, res: 1000.0 },
      { temp: 50, res: 1194.0 },
      { temp: 100, res: 1385.1 },
      { temp: 150, res: 1573.3 },
      { temp: 200, res: 1758.6 },
    ]
  }
};

export default function RTDTable() {
  const [type, setType] = useState<keyof typeof rtdData>('Pt100');

  const getRes = (targetTemp: number) => {
    const table = rtdData[type].table;
    let lower = table[0];
    let upper = table[table.length - 1];

    if (targetTemp <= lower.temp) return lower.res;
    if (targetTemp >= upper.temp) return upper.res;

    for (let i = 0; i < table.length - 1; i++) {
      if (targetTemp >= table[i].temp && targetTemp <= table[i+1].temp) {
        lower = table[i];
        upper = table[i+1];
        break;
      }
    }

    if (lower.temp === upper.temp) return lower.res;
    const res = lower.res + (targetTemp - lower.temp) * (upper.res - lower.res) / (upper.temp - lower.temp);
    return res;
  };

  const minTemp = Math.floor(rtdData[type].table[0].temp / 100) * 100;
  const maxTemp = Math.floor(rtdData[type].table[rtdData[type].table.length - 1].temp / 100) * 100;
  const rows = [];
  for (let i = minTemp; i <= maxTemp; i += 100) {
    rows.push(i);
  }

  return (
    <div className="p-6 bg-deep-navy rounded-xl border border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h4 className="text-xl font-bold text-white">{rtdData[type].name}</h4>
          <p className="text-sm text-gray-500">온도계수 (α): {rtdData[type].alpha} (단위: Ω)</p>
        </div>
        <div className="flex gap-2">
          {Object.keys(rtdData).map(t => (
            <button
              key={t}
              onClick={() => setType(t as any)}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                type === t ? 'bg-electric-blue text-white' : 'bg-slate-blue text-gray-400 hover:text-white'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-[10px] md:text-xs text-left border-collapse">
          <thead className="text-gray-500 uppercase bg-white/5">
            <tr>
              <th className="p-2 border border-white/10 text-center bg-white/10">°C</th>
              {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90].map(v => (
                <th key={v} className="p-2 border border-white/10 text-center">+{v}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {rows.map((baseTemp) => (
              <tr key={baseTemp} className="hover:bg-white/5 transition-colors">
                <td className="p-2 font-bold text-gray-400 bg-white/5 text-center border border-white/10">{baseTemp}</td>
                {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90].map(offset => {
                  const currentTemp = baseTemp + offset;
                  const res = getRes(currentTemp);
                  return (
                    <td key={offset} className="p-2 text-electric-blue font-mono text-center border border-white/10">
                      {res.toFixed(2)}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
        <p className="text-[10px] text-gray-500 italic">* 본 표는 10°C 간격의 선형 보간법을 적용한 참조용 데이터입니다. (단위: Ω)</p>
        <p className="text-[10px] text-gray-600">Reference: DIN EN 60751 Standard</p>
      </div>
    </div>
  );
}
