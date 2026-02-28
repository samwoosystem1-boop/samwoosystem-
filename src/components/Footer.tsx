import { Phone, Mail, MapPin, Printer } from 'lucide-react';
import SamwooLogo from './SamwooLogo';

export default function Footer() {
  return (
    <footer id="contact" className="bg-deep-navy text-white pt-20 pb-10 border-t border-white/5">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <SamwooLogo className="h-10 mb-6" />
            <p className="text-gray-400 text-sm leading-relaxed">
              삼우시스템은 FA/PA 분야의 전문 솔루션 파트너로서,<br />
              최고의 제품과 엔지니어링 서비스를 통해<br />
              고객의 성공을 지원합니다.
            </p>
          </div>
          
          <div>
            <h5 className="text-lg font-bold mb-6">Quick Links</h5>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">회사 소개</a></li>
              <li><a href="#partners" className="hover:text-white transition-colors">파트너 브랜드</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">산업별 솔루션</a></li>
              <li><a href="#library" className="hover:text-white transition-colors">기술 자료실</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h5 className="text-lg font-bold mb-6">Contact Us</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-white/10 rounded-lg text-electric-blue">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold mb-1">Phone</p>
                  <p className="text-sm">061-794-2033</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-white/10 rounded-lg text-electric-blue">
                  <Printer size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold mb-1">Fax</p>
                  <p className="text-sm">061-794-2034</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-white/10 rounded-lg text-electric-blue">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold mb-1">Email</p>
                  <p className="text-sm">samwoosystem1@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-white/10 rounded-lg text-electric-blue">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold mb-1">Office</p>
                  <p className="text-sm">전남 광양시 불로로 160-6</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2024 SAMWOO SYSTEM. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">개인정보처리방침</a>
            <a href="#" className="hover:text-white">이용약관</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
