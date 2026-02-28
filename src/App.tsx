/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PartnerSection from './components/PartnerSection';
import SolutionSection from './components/SolutionSection';
import LibrarySection from './components/LibrarySection';
import Footer from './components/Footer';
import QuickInquiry from './components/QuickInquiry';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* About Section Short */}
        <section id="about" className="section-padding relative">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-electric-blue font-bold mb-2">ABOUT SAMWOO SYSTEM</h2>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  미래를 선도하는<br />
                  FA/PA Solution Partner
                </h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  삼우시스템은 단순한 제품 공급을 넘어, 고객의 공정 효율을 극대화하는 최적의 솔루션을 제안합니다. 
                  세계적인 메이커들과의 파트너십을 통해 검증된 기술력과 신뢰를 바탕으로 산업 현장의 혁신을 이끌어갑니다.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-3xl font-bold text-electric-blue mb-1">10+</p>
                    <p className="text-sm text-gray-500">Years Experience</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-electric-blue mb-1">100+</p>
                    <p className="text-sm text-gray-500">Numerous projects</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img 
                  src="https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=1200" 
                  alt="Samwoo System Vision" 
                  className="rounded-2xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -right-6 bg-slate-blue p-8 rounded-2xl text-white hidden md:block">
                  <p className="text-xl font-bold">Trust & Innovation</p>
                  <p className="text-sm opacity-80">Since 2013</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <PartnerSection />
        <SolutionSection />
        <LibrarySection />
      </main>

      <Footer />
      <QuickInquiry />
    </div>
  );
}
