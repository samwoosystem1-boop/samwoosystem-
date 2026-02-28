import { useState } from 'react';

const units = {
  pressure: {
    name: '압력 (Pressure)',
    conversions: {
      'Pa': 1,
      'kPa': 1000,
      'MPa': 1000000,
      'bar': 100000,
      'mbar': 100,
      'psi': 6894.76,
      'kgf/cm2': 98066.5,
      'atm': 101325,
      'mmHg': 133.322,
      'mmH2O': 9.80665,
    }
  },
  temperature: {
    name: '온도 (Temperature)',
    special: true,
  },
  length: {
    name: '길이 (Length)',
    conversions: {
      'mm': 1,
      'cm': 10,
      'm': 1000,
      'km': 1000000,
      'in': 25.4,
      'ft': 304.8,
    }
  },
  area: {
    name: '면적 (Area)',
    conversions: {
      'm2': 1,
      'cm2': 0.0001,
      'mm2': 0.000001,
      'ft2': 0.092903,
      'in2': 0.000645,
    }
  },
  volume: {
    name: '체적 (Volume)',
    conversions: {
      'm3': 1,
      'l': 0.001,
      'cm3': 0.000001,
      'ft3': 0.028317,
      'gal(US)': 0.003785,
    }
  },
  mass: {
    name: '질량 (Mass)',
    conversions: {
      'kg': 1,
      'g': 0.001,
      't': 1000,
      'lb': 0.453592,
      'oz': 0.028349,
    }
  },
  density: {
    name: '밀도 (Density)',
    conversions: {
      'kg/m3': 1,
      'g/cm3': 1000,
      'lb/ft3': 16.01846,
    }
  },
  force: {
    name: '힘 (Force)',
    conversions: {
      'N': 1,
      'kN': 1000,
      'kgf': 9.80665,
      'lbf': 4.44822,
    }
  },
  viscosity: {
    name: '점도 (Viscosity)',
    conversions: {
      'Pa·s': 1,
      'cP': 0.001,
      'P': 0.1,
    }
  },
  kinematic_viscosity: {
    name: '동점도 (Kinematic Viscosity)',
    conversions: {
      'm2/s': 1,
      'cSt': 0.000001,
      'St': 0.0001,
    }
  },
  flow_rate: {
    name: '체적유량 (Volumetric Flow)',
    conversions: {
      'm3/h': 1,
      'm3/min': 60,
      'l/h': 0.001,
      'l/min': 0.06,
    }
  },
  energy: {
    name: '에너지 및 열량 (Energy)',
    conversions: {
      'J': 1,
      'kJ': 1000,
      'cal': 4.1868,
      'kcal': 4186.8,
      'kWh': 3600000,
      'BTU': 1055.056,
    }
  },
  power: {
    name: '동력 (Power)',
    conversions: {
      'W': 1,
      'kW': 1000,
      'hp': 745.7,
      'PS': 735.5,
    }
  }
};

export default function UnitConverter() {
  const [category, setCategory] = useState<keyof typeof units>('pressure');
  const [value, setValue] = useState<string>('1');
  const [fromUnit, setFromUnit] = useState<string>('bar');
  const [toUnit, setToUnit] = useState<string>('psi');

  const convert = () => {
    const num = parseFloat(value);
    if (isNaN(num)) return '0';

    if (category === 'temperature') {
      if (fromUnit === 'C' && toUnit === 'F') return (num * 9/5 + 32).toFixed(2);
      if (fromUnit === 'F' && toUnit === 'C') return ((num - 32) * 5/9).toFixed(2);
      if (fromUnit === 'C' && toUnit === 'K') return (num + 273.15).toFixed(2);
      if (fromUnit === 'K' && toUnit === 'C') return (num - 273.15).toFixed(2);
      return num.toString();
    }

    const cat = units[category];
    if ('conversions' in cat) {
      const baseValue = num * (cat.conversions[fromUnit as keyof typeof cat.conversions] || 1);
      const result = baseValue / (cat.conversions[toUnit as keyof typeof cat.conversions] || 1);
      return result.toLocaleString(undefined, { maximumFractionDigits: 4 });
    }
    return '0';
  };

  const currentUnits = category === 'temperature' 
    ? ['C', 'F', 'K'] 
    : Object.keys((units[category] as any).conversions);

  return (
    <div className="p-6 bg-deep-navy rounded-xl border border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase mb-2">분류</label>
          <select 
            value={category} 
            onChange={(e) => {
              const newCat = e.target.value as keyof typeof units;
              setCategory(newCat);
              if (newCat === 'temperature') {
                setFromUnit('C');
                setToUnit('F');
              } else {
                const keys = Object.keys((units[newCat] as any).conversions);
                setFromUnit(keys[0]);
                setToUnit(keys[1] || keys[0]);
              }
            }}
            className="w-full bg-slate-blue border border-white/10 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-electric-blue outline-none"
          >
            {Object.entries(units).map(([key, val]) => (
              <option key={key} value={key}>{val.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase mb-2">입력 값</label>
          <input 
            type="number" 
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full bg-slate-blue border border-white/10 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-electric-blue outline-none"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="flex-1 w-full">
          <select 
            value={fromUnit} 
            onChange={(e) => setFromUnit(e.target.value)}
            className="w-full bg-slate-blue border border-white/10 rounded-lg px-4 py-2 text-white outline-none"
          >
            {currentUnits.map(u => <option key={u} value={u}>{u}</option>)}
          </select>
        </div>
        <div className="text-electric-blue font-bold">TO</div>
        <div className="flex-1 w-full">
          <select 
            value={toUnit} 
            onChange={(e) => setToUnit(e.target.value)}
            className="w-full bg-slate-blue border border-white/10 rounded-lg px-4 py-2 text-white outline-none"
          >
            {currentUnits.map(u => <option key={u} value={u}>{u}</option>)}
          </select>
        </div>
      </div>

      <div className="mt-8 p-6 bg-white/5 rounded-xl text-center">
        <p className="text-sm text-gray-400 mb-1">변환 결과</p>
        <p className="text-4xl font-bold text-electric-blue">
          {convert()} <span className="text-xl text-white font-normal">{toUnit}</span>
        </p>
      </div>
    </div>
  );
}
