import { motion } from 'motion/react';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { PARTNERS } from '../constants';

export default function PartnerSection() {
  return (
    <section id="partners" className="section-padding relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-electric-blue font-bold mb-2">GLOBAL PARTNERS</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">Global Partner Leadership</h3>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            삼우시스템은 세계 최고의 기술력을 보유한 글로벌 메이커들과 함께<br />
            국내 산업 현장에 최적화된 솔루션을 공급합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PARTNERS.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: index * 0.3, ease: "easeOut" }}
              className="bg-slate-blue p-8 rounded-2xl border border-white/5 card-hover flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-1">{partner.name}</h4>
                    <p className="text-electric-blue text-sm font-semibold">{partner.slogan}</p>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 flex-grow">
                {partner.description}
              </p>

              <div className="mb-8">
                <h5 className="text-sm font-bold text-gray-300 mb-3 uppercase tracking-wider">주요 제품군</h5>
                <div className="grid grid-cols-2 gap-2">
                  {partner.products.map((product) => (
                    <div key={product} className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle2 size={14} className="text-electric-blue" />
                      {product}
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 border border-electric-blue text-electric-blue rounded-lg font-medium hover:bg-electric-blue hover:text-white transition-all"
              >
                상세 사양 및 매뉴얼 확인 <ExternalLink size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
