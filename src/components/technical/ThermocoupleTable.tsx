import { useState } from 'react';

const tcData = {
  'K': {
    name: 'Type K (Chromel-Alumel)',
    range: '-200 to 1372 °C',
    table: [
      { temp: -200, emf: -5.891 },
      { temp: -100, emf: -3.554 },
      { temp: 0, emf: 0.000 },
      { temp: 100, emf: 4.096 },
      { temp: 200, emf: 8.138 },
      { temp: 300, emf: 12.209 },
      { temp: 400, emf: 16.397 },
      { temp: 500, emf: 20.644 },
      { temp: 600, emf: 24.905 },
      { temp: 700, emf: 29.129 },
      { temp: 800, emf: 33.275 },
      { temp: 900, emf: 37.326 },
      { temp: 1000, emf: 41.276 },
    ]
  },
  'J': {
    name: 'Type J (Iron-Constantan)',
    range: '-210 to 1200 °C',
    table: [
      { temp: -200, emf: -7.890 },
      { temp: -100, emf: -4.633 },
      { temp: 0, emf: 0.000 },
      { temp: 100, emf: 5.269 },
      { temp: 200, emf: 10.779 },
      { temp: 300, emf: 16.327 },
      { temp: 400, emf: 21.848 },
      { temp: 500, emf: 27.393 },
    ]
  },
  'T': {
    name: 'Type T (Copper-Constantan)',
    range: '-270 to 400 °C',
    table: [
      { temp: -200, emf: -5.603 },
      { temp: -100, emf: -3.379 },
      { temp: 0, emf: 0.000 },
      { temp: 100, emf: 4.279 },
      { temp: 200, emf: 9.288 },
    ]
  },
  'R': {
    name: 'Type R (Pt-13%Rh/Pt)',
    range: '0 to 1768 °C',
    table: [
      { temp: 0, emf: 0.000 },
      { temp: 200, emf: 1.469 },
      { temp: 400, emf: 3.408 },
      { temp: 600, emf: 5.583 },
      { temp: 800, emf: 7.950 },
      { temp: 1000, emf: 10.506 },
      { temp: 1200, emf: 13.228 },
      { temp: 1400, emf: 16.040 },
      { temp: 1600, emf: 18.849 },
    ]
  },
  'S': {
    name: 'Type S (Pt-10%Rh/Pt)',
    range: '0 to 1768 °C',
    table: [
      { temp: 0, emf: 0.000 },
      { temp: 200, emf: 1.441 },
      { temp: 400, emf: 3.259 },
      { temp: 600, emf: 5.239 },
      { temp: 800, emf: 7.345 },
      { temp: 1000, emf: 9.587 },
      { temp: 1200, emf: 11.951 },
      { temp: 1400, emf: 14.373 },
      { temp: 1600, emf: 16.777 },
    ]
  },
  'B': {
    name: 'Type B (Pt-30%Rh/Pt-6%Rh)',
    range: '0 to 1820 °C',
    table: [
      { temp: 600, emf: 1.792 },
      { temp: 800, emf: 3.154 },
      { temp: 1000, emf: 4.834 },
      { temp: 1200, emf: 6.786 },
      { temp: 1400, emf: 8.956 },
      { temp: 1600, emf: 11.263 },
      { temp: 1800, emf: 13.591 },
    ]
  }
};

export default function ThermocoupleTable() {
  const [type, setType] = useState<keyof typeof tcData>('K');

  const getEmf = (targetTemp: number) => {
    const table = tcData[type].table;
    let lower = table[0];
    let upper = table[table.length - 1];

    if (targetTemp <= lower.temp) return lower.emf;
    if (targetTemp >= upper.temp) return upper.emf;

    for (let i = 0; i < table.length - 1; i++) {
      if (targetTemp >= table[i].temp && targetTemp <= table[i+1].temp) {
        lower = table[i];
        upper = table[i+1];
        break;
      }
    }

    if (lower.temp === upper.temp) return lower.emf;
    const emf = lower.emf + (targetTemp - lower.temp) * (upper.emf - lower.emf) / (upper.temp - lower.temp);
    return emf;
  };

  const minTemp = Math.floor(tcData[type].table[0].temp / 100) * 100;
  const maxTemp = Math.floor(tcData[type].table[tcData[type].table.length - 1].temp / 100) * 100;
  const rows = [];
  for (let i = minTemp; i <= maxTemp; i += 100) {
    rows.push(i);
  }

  return (
    <div className="p-6 bg-deep-navy rounded-xl border border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h4 className="text-xl font-bold text-white">{tcData[type].name}</h4>
          <p className="text-sm text-gray-500">측정 범위: {tcData[type].range} (단위: mV)</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {Object.keys(tcData).map(t => (
            <button
              key={t}
              onClick={() => setType(t as any)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                type === t ? 'bg-electric-blue text-white' : 'bg-slate-blue text-gray-400 hover:text-white'
              }`}
            >
              Type {t}
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
                  const emf = getEmf(currentTemp);
                  return (
                    <td key={offset} className="p-2 text-electric-blue font-mono text-center border border-white/10">
                      {emf.toFixed(3)}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
        <p className="text-[10px] text-gray-500 italic">* 본 표는 10°C 간격의 선형 보간법을 적용한 참조용 데이터입니다. (단위: mV)</p>
        <p className="text-[10px] text-gray-600">Reference: ITS-90 Standard</p>
      </div>
    </div>
  );
}
