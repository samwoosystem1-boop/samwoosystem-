import React from 'react';

const pipeData = [
  { a: '6A', b: '1/8"', od: 10.5, sch10: 1.2, sch40: 1.7, sch80: 2.4, sch160: '-' },
  { a: '8A', b: '1/4"', od: 13.8, sch10: 1.65, sch40: 2.2, sch80: 3.0, sch160: '-' },
  { a: '10A', b: '3/8"', od: 17.3, sch10: 1.65, sch20: 2.0, sch40: 2.3, sch80: 3.2, sch160: '-' },
  { a: '15A', b: '1/2"', od: 21.7, sch10: 2.1, sch20: 2.5, sch40: 2.8, sch80: 3.7, sch160: 4.7 },
  { a: '20A', b: '3/4"', od: 27.2, sch10: 2.1, sch20: 2.5, sch40: 2.9, sch80: 3.9, sch160: 5.5 },
  { a: '25A', b: '1"', od: 34.0, sch10: 2.8, sch20: 3.0, sch40: 3.4, sch80: 4.5, sch160: 6.4 },
  { a: '32A', b: '1 1/4"', od: 42.7, sch10: 2.8, sch20: 3.0, sch40: 3.6, sch80: 4.9, sch160: 6.4 },
  { a: '40A', b: '1 1/2"', od: 48.6, sch10: 2.8, sch20: 3.0, sch40: 3.7, sch80: 5.1, sch160: 7.1 },
  { a: '50A', b: '2"', od: 60.5, sch10: 2.8, sch20: 3.5, sch40: 3.9, sch80: 5.5, sch160: 8.7 },
  { a: '65A', b: '2 1/2"', od: 76.3, sch10: 3.0, sch20: 4.2, sch40: 5.2, sch80: 7.0, sch160: 9.5 },
  { a: '80A', b: '3"', od: 89.1, sch10: 3.0, sch20: 4.5, sch40: 5.5, sch80: 7.6, sch160: 11.1 },
  { a: '90A', b: '3 1/2"', od: 101.6, sch10: 3.0, sch20: 4.8, sch40: 5.7, sch80: 8.1, sch160: 12.7 },
  { a: '100A', b: '4"', od: 114.3, sch10: 3.0, sch20: 4.9, sch40: 6.0, sch80: 8.6, sch160: 13.5 },
  { a: '125A', b: '5"', od: 139.8, sch10: 3.4, sch20: 5.1, sch40: 6.6, sch80: 9.5, sch160: 15.9 },
  { a: '150A', b: '6"', od: 165.2, sch10: 3.4, sch20: 5.5, sch40: 7.1, sch80: 11.0, sch160: 18.2 },
  { a: '200A', b: '8"', od: 216.3, sch10: 4.0, sch20: 6.4, sch40: 8.2, sch80: 12.7, sch160: 23.0 },
];

export default function PipeScheduleTable() {
  return (
    <div className="p-6 bg-deep-navy rounded-xl border border-white/5">
      <div className="mb-8">
        <h4 className="text-xl font-bold text-white">배관호칭경 및 스케쥴(Sch)표</h4>
        <p className="text-sm text-gray-500">강관의 외경 및 스케쥴별 두께 (단위: mm)</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-[10px] md:text-xs text-left border-collapse">
          <thead className="text-gray-500 uppercase bg-white/5">
            <tr>
              <th className="p-2 border border-white/10 text-center bg-white/10" rowSpan={2}>호칭경 (A)</th>
              <th className="p-2 border border-white/10 text-center bg-white/10" rowSpan={2}>호칭경 (B)</th>
              <th className="p-2 border border-white/10 text-center bg-white/10" rowSpan={2}>외경 (OD)</th>
              <th className="p-2 border border-white/10 text-center" colSpan={4}>스케쥴별 두께 (Wall Thickness)</th>
            </tr>
            <tr>
              <th className="p-2 border border-white/10 text-center">Sch 10</th>
              <th className="p-2 border border-white/10 text-center">Sch 40</th>
              <th className="p-2 border border-white/10 text-center">Sch 80</th>
              <th className="p-2 border border-white/10 text-center">Sch 160</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {pipeData.map((pipe) => (
              <tr key={pipe.a} className="hover:bg-white/5 transition-colors">
                <td className="p-2 font-bold text-gray-400 bg-white/5 text-center border border-white/10">{pipe.a}</td>
                <td className="p-2 text-gray-300 text-center border border-white/10">{pipe.b}</td>
                <td className="p-2 text-white font-mono text-center border border-white/10">{pipe.od.toFixed(1)}</td>
                <td className="p-2 text-electric-blue font-mono text-center border border-white/10">{pipe.sch10}</td>
                <td className="p-2 text-electric-blue font-mono text-center border border-white/10">{pipe.sch40}</td>
                <td className="p-2 text-electric-blue font-mono text-center border border-white/10">{pipe.sch80}</td>
                <td className="p-2 text-electric-blue font-mono text-center border border-white/10">{pipe.sch160}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4">
        <p className="text-[10px] text-gray-500 italic">* 본 데이터는 KS/JIS/ANSI 규격을 기준으로 작성된 참조용 자료입니다.</p>
      </div>
    </div>
  );
}
