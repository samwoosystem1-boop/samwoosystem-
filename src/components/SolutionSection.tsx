import { motion } from 'motion/react';
import { SOLUTIONS } from '../constants';

export default function SolutionSection() {
  return (
    <section id="solutions" className="section-padding relative">
      <div className="container-custom">
        <div className="mb-12">
          <h2 className="text-electric-blue font-bold mb-2">OUR SOLUTIONS</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">산업별 맞춤형 솔루션</h3>
          <p className="mt-4 text-gray-400 max-w-2xl">
            각 산업 현장의 특수성을 고려한 최적의 계측 및 제어 시스템을 제안합니다.<br />
            삼우시스템의 전문 엔지니어링을 통해 공정의 안정성과 효율을 높이세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SOLUTIONS.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: index * 0.2, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-2xl h-[400px] cursor-pointer"
            >
              <img
                src={solution.image}
                alt={solution.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h4 className="text-2xl font-bold text-white mb-2">{solution.title}</h4>
                <p className="text-gray-300 text-sm line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                  {solution.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
