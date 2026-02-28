import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, CheckCircle } from 'lucide-react';

export default function QuickInquiry() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  React.useEffect(() => {
    const handleOpenEvent = () => setIsOpen(true);
    window.addEventListener('open-quick-inquiry', handleOpenEvent);
    return () => window.removeEventListener('open-quick-inquiry', handleOpenEvent);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.currentTarget;
    const data = new FormData(form);
    
    try {
      const response = await fetch('https://formspree.io/f/mjgejjqr', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => {
          setStatus('idle');
          setIsOpen(false);
        }, 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-20 right-0 w-[350px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
          >
            <div className="bg-primary-blue p-6 text-white">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-xl font-bold">빠른 상담 문의</h4>
                <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded">
                  <X size={20} />
                </button>
              </div>
              <p className="text-blue-100 text-sm">전문가와 가장 빠르게 상담하세요.</p>
            </div>
            
            <div className="p-6">
              {status === 'success' ? (
                <div className="text-center py-8">
                  <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                  <h5 className="text-lg font-bold text-gray-800 mb-2">문의가 접수되었습니다.</h5>
                  <p className="text-sm text-gray-500">확인 후 빠르게 연락드리겠습니다.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">이름 / 회사명</label>
                    <input 
                      name="name"
                      type="text" 
                      required
                      className="w-full px-4 py-2 bg-soft-gray border-none rounded-lg text-sm text-gray-800 focus:ring-2 focus:ring-primary-blue"
                      placeholder="홍길동 / 삼우시스템"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">연락처</label>
                    <input 
                      name="phone"
                      type="text" 
                      required
                      className="w-full px-4 py-2 bg-soft-gray border-none rounded-lg text-sm text-gray-800 focus:ring-2 focus:ring-primary-blue"
                      placeholder="010-0000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">이메일</label>
                    <input 
                      name="email"
                      type="email" 
                      required
                      className="w-full px-4 py-2 bg-soft-gray border-none rounded-lg text-sm text-gray-800 focus:ring-2 focus:ring-primary-blue"
                      placeholder="example@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">관심 제품</label>
                    <select 
                      name="product"
                      className="w-full px-4 py-2 bg-soft-gray border-none rounded-lg text-sm text-gray-800 focus:ring-2 focus:ring-primary-blue"
                    >
                      <option>유량계</option>
                      <option>압력 전송기</option>
                      <option>온도/레벨 센서</option>
                      <option>기타</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">문의 내용</label>
                    <textarea 
                      name="message"
                      rows={3}
                      required
                      className="w-full px-4 py-2 bg-soft-gray border-none rounded-lg text-sm text-gray-800 focus:ring-2 focus:ring-primary-blue resize-none"
                      placeholder="상담 내용을 입력해주세요."
                    />
                  </div>
                  {status === 'error' && (
                    <p className="text-xs text-red-500">오류가 발생했습니다. 다시 시도해주세요.</p>
                  )}
                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {status === 'submitting' ? '전송 중...' : (
                      <>
                        <Send size={16} /> 문의하기
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-primary-blue text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform active:scale-95 z-50"
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </button>
    </div>
  );
}
