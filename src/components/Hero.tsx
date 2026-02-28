import { motion } from 'motion/react';
import FiberBackground from './FiberBackground';
import { PARTNERS } from '../constants';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <FiberBackground />

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h2 className="text-electric-blue font-bold tracking-widest mb-4 text-sm md:text-base">
            FA/PA SOLUTION PARTNER
          </h2>
          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight text-white">
            공정 자동화의 미래,<br />
            <span className="text-electric-blue">삼우시스템</span>이 함께합니다.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-medium">
            단순한 제품 공급을 넘어, 고객의 공정 효율을 극대화하는<br className="hidden md:block" />
            최적의 솔루션을 제안하는 스마트 파트너입니다.
          </p>
        </motion.div>
      </div>

      {/* Partner Logos Floating */}
      <div className="absolute bottom-0 left-0 w-full bg-deep-navy/95 backdrop-blur-md py-6 border-t border-white/10 z-20">
        <div className="container-custom flex flex-wrap justify-around items-center gap-8 transition-all">
          {PARTNERS.map((partner) => (
            <a
              key={partner.id}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-all hover:scale-110"
            >
              <span className="text-xl font-black text-electric-blue group-hover:text-white transition-colors tracking-tighter">
                {partner.logo}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
