/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  PawPrint, 
  MapPin, 
  Phone, 
  Search, 
  Calendar, 
  ChevronRight, 
  Heart, 
  Stethoscope, 
  Activity, 
  Eye, 
  Sparkles, 
  Award,
  Instagram,
  Youtube,
  MessageCircle,
  Menu,
  X,
  Clock,
  ArrowUp
} from 'lucide-react';
import { AnimatePresence } from 'motion/react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: "easeOut" }
};

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="font-sans antialiased">
      {/* HEADER */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-black/5' 
            : 'bg-transparent py-4 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
          <a href="#" className={`flex items-center gap-3 text-2xl font-extrabold tracking-tight transition-colors ${scrolled ? 'text-primary-dark' : 'text-white'}`}>
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${scrolled ? 'bg-primary text-white' : 'bg-white/20 text-white shadow-lg'}`}>
              <PawPrint size={24} />
            </div>
            해피동물병원
          </a>

          <nav className="hidden md:flex items-center gap-12">
            {['병원소개', '진료과목', '이용안내', '오시는길', '예약하기'].map((item) => (
              <a 
                key={item} 
                href={`#${item}`} 
                className={`text-lg font-bold transition-colors ${scrolled ? 'text-text-mid hover:text-primary' : 'text-white hover:text-white/80'}`}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a 
              href="#예약하기" 
              className={`hidden sm:block px-6 py-2.5 rounded-lg text-[13px] font-semibold transition-all transform hover:-translate-y-px active:translate-y-0 ${
                scrolled ? 'bg-bg-dark text-white hover:bg-primary-dark' : 'bg-white text-primary-dark hover:bg-white/90'
              }`}
            >
              온라인 예약
            </a>
            <button 
              className={`md:hidden z-[60] transition-colors ${scrolled || mobileMenuOpen ? 'text-text-mid' : 'text-white'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileMenuOpen(false)}
                className="fixed inset-0 bg-black/50 z-[55] md:hidden"
              />
              <motion.div 
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed right-0 top-0 bottom-0 w-[40%] bg-white z-[58] md:hidden shadow-2xl flex flex-col p-8"
              >
                <div className="flex flex-col gap-6 mt-16">
                  {['병원소개', '진료과목', '이용안내', '오시는길', '예약하기'].map((item) => (
                    <a 
                      key={item} 
                      href={`#${item}`} 
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-lg font-bold text-text-mid hover:text-primary transition-colors border-b border-gray-100 pb-2"
                    >
                      {item}
                    </a>
                  ))}
                  <a 
                    href="#예약하기" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="bg-primary text-white text-center py-4 rounded-xl font-bold mt-4 shadow-lg active:scale-95 transition-transform"
                  >
                    온라인 예약
                  </a>
                </div>
                <div className="mt-auto flex justify-center gap-6 text-text-light">
                  <Instagram size={20} />
                  <Youtube size={20} />
                  <MessageCircle size={20} />
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen pt-40 sm:pt-48 flex items-end overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
          style={{ backgroundImage: `url('https://mydrim.net/img/happydoggy.png')` }}
        ></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-[10%] right-[8%] w-[380px] h-[380px] rounded-full bg-white/5 border border-white/10 hidden lg:block"></div>
        <div className="absolute top-[25%] right-[14%] w-48 h-48 rounded-full bg-primary/20 hidden lg:block"></div>
        
        <div className="absolute right-[6%] top-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-[220px_220px_180px_180px] overflow-hidden border-3 border-white/15 bg-gradient-to-br from-white/10 to-primary/30 hidden lg:flex items-center justify-center">
            <PawPrint size={240} className="text-white opacity-20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 pb-20 sm:pb-28 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-white/15 border border-white/25 text-white/90 text-[12px] font-bold tracking-[1.5px] px-3.5 py-1.5 rounded-full mb-6 uppercase">
              since 2008 · 해피동물병원
            </div>
            <h1 className="text-3xl sm:text-6xl md:text-7xl font-extrabold text-white leading-[1.2] tracking-tighter mb-5">
              사랑하는 반려동물,<br />
              <span className="text-[#D4A373]">건강한 하루</span>를 선물하세요.
            </h1>
            <p className="text-white/70 max-w-md text-base sm:text-lg leading-relaxed mb-9">
              15년 이상의 임상 경험을 갖춘 전담 수의사가<br />
              반려동물의 작은 신호도 놓치지 않겠습니다.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#예약하기" className="bg-white text-primary-dark px-7 py-3.5 rounded-xl text-base font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                지금 예약하기
              </a>
              <a href="#진료과목" className="text-white/85 text-sm font-medium flex items-center gap-1.5 border-b border-white/30 pb-0.5 hover:border-white transition-all">
                진료 안내 보기 <ChevronRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 1: ABOUT */}
      <section className="bg-white py-24 sm:py-32 px-6 sm:px-10" id="병원소개">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div {...fadeInUp} className="order-2 lg:order-1">
              <div className="text-[11px] font-bold tracking-[2px] text-primary uppercase mb-4">our promise</div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6">
                처음 오시는 분도<br />전담 수의사가 함께합니다.
              </h2>
              <div className="space-y-6 text-text-mid text-base leading-relaxed mb-8">
                <p>
                  해피동물병원에서는 진료 첫날부터 담당 수의사가 지정되어,
                  반려동물의 성장과 건강 이력을 처음부터 끝까지 함께 관리합니다.
                  단순한 치료를 넘어, 평생 건강 파트너가 되어 드립니다.
                </p>
                <p>
                  내과·외과·피부과·치과·안과 전문의가 상주하며,
                  당일 검사 결과 즉시 확인이 가능합니다.
                </p>
              </div>
              <a href="#about" className="inline-flex items-center gap-1.5 text-primary text-sm font-bold border-b-2 border-primary pb-0.5">
                의료진 소개 <ChevronRight size={16} />
              </a>
            </motion.div>
            <motion.div 
              {...fadeInUp}
              className="order-1 lg:order-2 h-80 sm:h-[420px] rounded-3xl overflow-hidden relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800" 
                alt="병원 소개 이미지" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AWARD BANNER */}
      <div className="bg-bg-warm py-16 px-6 sm:px-10 text-center">
        <motion.div 
          {...fadeInUp}
          className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
            <Award size={36} className="text-white" />
          </div>
          <div className="text-left sm:text-left text-center">
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight mb-1 text-primary-dark">농림축산식품부 장관상 수상</h3>
            <p className="text-sm sm:text-base text-text-mid leading-relaxed">
              2022년 반려동물 의료서비스 품질 부문 — 전국 동물병원 최초 수상, 3년 연속 고객만족도 1위 인정
            </p>
          </div>
        </motion.div>
      </div>

      {/* SECTION 2: PREMIUM */}
      <section className="bg-[#FAFAF8] py-24 sm:py-32 px-6 sm:px-10" id="진료과목">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div 
              {...fadeInUp}
              className="h-80 sm:h-[520px] rounded-3xl overflow-hidden relative shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=800" 
                alt="프리미엄 진료 시설" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-white max-w-xs">
                <div className="text-3xl font-black mb-0.5 tracking-tight">98%</div>
                <div className="text-[11px] opacity-80 uppercase tracking-wider font-bold">보호자 재방문율 · 2026 기준</div>
              </div>
            </motion.div>
            <motion.div {...fadeInUp}>
              <div className="text-[11px] font-bold tracking-[2px] text-primary uppercase mb-4">premium care</div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6">
                소중한 반려동물을 위한<br />프리미엄 의료 서비스
              </h2>
              <p className="text-text-mid text-base leading-relaxed mb-10">
                최신 의료 장비와 전문 수의사의 정밀한 진단으로 반려동물의 건강을 지킵니다.
              </p>
              
              <div className="space-y-6 mb-12">
                {[
                  { icon: <Activity />, text: "3테슬라 MRI · CT · 디지털 X-RAY 완비 — 당일 정밀검사 결과 확인" },
                  { icon: <Clock />, text: "24시간 응급 진료 · 야간 입원 모니터링 상시 운영" },
                  { icon: <Heart />, text: "수술 전후 전담 간호사 배치 · 회복실 분리 운영" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-9 h-9 shrink-0 bg-primary-light text-primary rounded-xl flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className="text-text-mid text-[15px] leading-relaxed pt-1.5">{item.text}</span>
                  </div>
                ))}
              </div>

              <a href="#예약하기" className="inline-flex items-center gap-1.5 text-primary text-sm font-bold border-b-2 border-primary pb-0.5">
                진료 예약하기 <ChevronRight size={16} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PROCESS */}
      <section className="bg-white py-24 sm:py-32 px-6 sm:px-10" id="이용안내">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <motion.div {...fadeInUp}>
              <div className="text-[11px] font-bold tracking-[2px] text-primary uppercase mb-4">clinical focus</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                중요한 순간을<br />놓치지 않게 도와드립니다.
              </h2>
            </motion.div>
            <a href="#예약하기" className="text-sm font-bold text-primary flex items-center gap-1">전체 진료과 보기 <ChevronRight size={16} /></a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "내과 · 일반 검진", desc: "소화기, 호흡기, 심장, 신장 질환 전반을 전문으로 다루며 혈액검사·초음파를 당일 진행합니다.", img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=500" },
              { title: "외과 · 정형외과", desc: "최소침습 수술(복강경)부터 정형외과 수술까지 전문 외과팀이 안전하게 집도합니다.", img: "https://images.unsplash.com/photo-1599443015574-be5fe8a05783?auto=format&fit=crop&q=80&w=500" },
              { title: "피부과 · 귀 질환", desc: "아토피, 알레르기, 외이염 등 반복되는 피부 트러블을 근본 원인부터 치료합니다.", img: "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?auto=format&fit=crop&q=80&w=500" },
              { title: "치과 · 스케일링", desc: "마취 없는 스케일링부터 발치, 치주 치료까지. 입 냄새·잇몸 염증을 초기에 잡아드립니다.", img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=500" },
              { title: "안과 · 눈 질환", desc: "결막염, 백내장, 안압 이상 등 반려동물 눈 건강을 세밀하게 진단·치료합니다.", img: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&q=80&w=500" },
              { title: "예방접종 · 건강검진", desc: "연령별 맞춤 백신 스케줄 관리와 종합건강검진으로 질병을 미리 예방합니다.", img: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&q=80&w=500" }
            ].map((card, idx) => (
              <motion.div 
                key={idx}
                {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: idx * 0.1 }}
                className="group bg-white rounded-3xl border border-border-custom overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-48 flex items-center justify-center relative overflow-hidden">
                  <img 
                    src={card.img} 
                    alt={card.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-[10px] font-bold text-primary">DEPARTMENT</div>
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-lg font-bold mb-3 tracking-tight">{card.title}</h3>
                  <p className="text-text-mid text-[13px] leading-relaxed mb-6">{card.desc}</p>
                  <a href="#예약하기" className="text-xs font-bold text-primary flex items-center gap-1">예약하기 <ChevronRight size={14} /></a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="bg-bg-dark py-20 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div {...fadeInUp} className="text-white/75 text-base leading-relaxed text-center md:text-left">
            <strong className="block text-xl text-white mb-2">수많은 반려동물 보호자들이<br />해피동물병원을 신뢰합니다.</strong>
            누적 진료 건수 기준 · 2024년 12월 기준
          </motion.div>
          <motion.div {...fadeInUp} className="text-right flex flex-col items-center md:items-end">
            <div className="text-7xl sm:text-8xl font-black text-white tracking-tighter leading-none">
              52<span className="text-accent">,</span>000<span className="text-2xl sm:text-4xl align-middle ml-2">+</span>
            </div>
            <div className="text-sm uppercase tracking-widest text-white/40 font-bold mt-4">cumulative clinic cases</div>
          </motion.div>
        </div>
      </div>

      {/* PRODUCT HIGHLIGHT */}
      <section className="bg-white py-24 sm:py-32 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div {...fadeInUp} className="lg:col-span-12 xl:col-span-5">
              <div className="text-[11px] font-bold tracking-[2px] text-primary uppercase mb-4">care package</div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6">
                해피케어 패키지로<br />평생 건강을 지켜주세요.
              </h2>
              <p className="text-text-mid text-base leading-relaxed mb-8">
                반려동물의 생애 주기에 맞춘 연간 건강 관리 프로그램으로, 
                합리적인 비용으로 최상의 의료 서비스를 제공합니다.
              </p>
              <div className="space-y-4 mb-10">
                {['퍼피·키튼 스타터 패키지', '성견·성묘 정기 검진', '시니어 특화 정밀 케어'].map((pkg, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-primary-light/50 rounded-xl border border-primary/10">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-primary-dark font-bold text-[15px]">{pkg}</span>
                  </div>
                ))}
              </div>
              <a href="#예약하기" className="inline-flex items-center gap-1.5 text-primary text-sm font-bold border-b-2 border-primary pb-0.5">
                자세히 보기 <ChevronRight size={16} />
              </a>
            </motion.div>
            <motion.div 
              {...fadeInUp}
              className="lg:col-span-12 xl:col-span-7 h-[480px] rounded-3xl overflow-hidden shadow-2xl relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&q=80&w=800" 
                alt="행복한 반려동물" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-bg-warm py-24 sm:py-32 px-6 sm:px-10" id="예약하기">
        <div className="max-w-2xl mx-auto text-center">
            <motion.div {...fadeInUp}>
              <div className="text-[11px] font-bold tracking-[2px] text-primary uppercase mb-4">online booking</div>
              <h2 className="text-xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                중요한 진료를 놓치지 않도록,<br />꼼꼼하게 안내해 드립니다.
              </h2>
              <p className="text-text-mid text-base mb-12">원하시는 날짜와 진료과목을 선택하시면 담당 수의사가 바로 연락드립니다.</p>
            </motion.div>

            <motion.form {...fadeInUp} className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="보호자 성함" className="w-full px-5 py-4 border-2 border-border-custom rounded-xl outline-none focus:border-primary transition-colors hover:border-text-light/20 bg-white" />
              <input type="tel" placeholder="연락처 (010-XXXX-XXXX)" className="w-full px-5 py-4 border-2 border-border-custom rounded-xl outline-none focus:border-primary transition-colors hover:border-text-light/20 bg-white" />
              <select className="w-full px-5 py-4 border-2 border-border-custom rounded-xl outline-none focus:border-primary transition-colors hover:border-text-light/20 bg-white appearance-none text-text-mid">
                <option value="" disabled selected>진료 과목 선택</option>
                <option>내과 · 일반 검진</option>
                <option>외과 · 수술 상담</option>
                <option>피부 · 귀 질환</option>
                <option>치과 · 스케일링</option>
                <option>안과 · 눈 질환</option>
              </select>
              <input type="text" placeholder="반려동물 이름 · 종" className="w-full px-5 py-4 border-2 border-border-custom rounded-xl outline-none focus:border-primary transition-colors hover:border-text-light/20 bg-white" />
              <textarea placeholder="증상이나 문의사항을 간단히 적어주세요." rows={4} className="w-full px-5 py-4 border-2 border-border-custom rounded-xl outline-none focus:border-primary transition-colors hover:border-text-light/20 bg-white resize-none"></textarea>
              <button className="w-full bg-primary text-white py-5 rounded-xl text-lg font-bold shadow-lg hover:bg-primary-dark transform active:scale-[0.98] transition-all">
                예약 신청하기
              </button>
            </motion.form>
        </div>
      </section>

      {/* LOCATION */}
      <section className="bg-white py-24 sm:py-32 px-6 sm:px-10" id="오시는길">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="mb-16">
            <div className="text-[11px] font-bold tracking-[2px] text-primary uppercase mb-4">location</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              갑작스러운 응급 상황에도,<br />해피동물병원이 가까운 곳에 있습니다.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: 1, name: "본점", img: "https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&q=80&w=500" },
              { id: 2, name: "팔달점", img: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&q=80&w=500" },
              { id: 3, name: "권선점", img: "https://images.unsplash.com/photo-1548191265-cc70d3d45ba1?auto=format&fit=crop&q=80&w=500" }
            ].map((loc) => (
              <motion.div key={loc.id} {...fadeInUp} transition={{ ...fadeInUp.transition, delay: loc.id * 0.1 }} className="border border-border-custom rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-52 relative overflow-hidden">
                  <img 
                    src={loc.img} 
                    alt={loc.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary-dark/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/30">
                    <MapPin size={48} className="text-white" />
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold mb-3 tracking-tight">🏥 해피동물병원 {loc.name}</h4>
                  <div className="text-text-mid text-sm leading-relaxed mb-6">
                    <p className="flex items-center gap-2 mb-1"><MapPin size={14} className="text-primary"/> 경기도 수원시 {loc.id === 1 ? '영통구 영통로 123 1층' : loc.id === 2 ? '팔달구 정조로 45 2층' : '권선구 권선로 88 1층'}</p>
                    <p className="flex items-center gap-2 mb-1"><Phone size={14} className="text-primary"/> 031-000-000{loc.id}</p>
                    <p className="flex items-center gap-2"><Clock size={14} className="text-primary"/> 연중무휴 09:00–21:00</p>
                  </div>
                  <a href="#" className="text-sm font-bold text-primary flex items-center gap-1.5">지도로 보기 <ChevronRight size={16} /></a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* FOOTER */}
      <footer className="bg-bg-brown text-white/50 py-20 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 pb-16 border-b border-white/5">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 text-xl font-extrabold text-white tracking-tight mb-8">
                🐾 해피동물병원
              </div>
              <p className="text-sm leading-relaxed max-w-sm mb-8">
                반려동물의 건강한 하루를 위해 15년 이상 함께해온 동물병원입니다. 
                작은 신호도 놓치지 않는 전문 의료팀이 항상 곁에 있습니다.
              </p>
              <div className="text-[11px] leading-6 uppercase tracking-wider font-bold">
                대표원장: 김해피 | 동물병원개설신고번호: 수원-0001<br />
                사업자번호: 123-45-67890
              </div>
            </div>
            
            <div>
                <h4 className="text-white text-xs font-black uppercase tracking-widest mb-6">진료과목</h4>
                <ul className="space-y-4 text-sm">
                  {['내과 · 일반검진', '외과 · 정형외과', '피부과 · 귀질환', '치과 · 스케일링', '안과 · 눈질환'].map(item => (
                    <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
                  ))}
                </ul>
            </div>

            <div>
                <h4 className="text-white text-xs font-black uppercase tracking-widest mb-6">이용안내</h4>
                <ul className="space-y-4 text-sm">
                  {['온라인 예약', '헬스케어 패키지', '의료진 소개', '병원 시설', '응급 진료'].map(item => (
                    <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
                  ))}
                </ul>
            </div>

            <div>
                <h4 className="text-white text-xs font-black uppercase tracking-widest mb-6">고객센터</h4>
                <ul className="space-y-4 text-sm font-bold text-white/80">
                  <li className="text-lg">031-000-0001</li>
                  <li>카카오 채널 @해피동물</li>
                  <li><a href="#" className="font-normal text-white/50 hover:text-white transition-colors">자주 묻는 질문</a></li>
                </ul>
            </div>
          </div>

          <div className="pt-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-[12px]">© 2024 해피동물병원. All rights reserved.</div>
            <div className="flex gap-4">
              {[<Instagram />, <Youtube />, <MessageCircle />].map((icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors">
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <AnimatePresence>
        {scrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-[100] w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-xl hover:bg-primary-dark transition-colors focus:outline-none"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
