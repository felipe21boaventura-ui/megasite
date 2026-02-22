
import React, { useState, useEffect } from 'react';

const TopBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`bg-[#111111] text-white py-2 px-4 border-b border-white/5 fixed top-0 left-0 w-full z-[60] transition-transform duration-300 ${isScrolled ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="container mx-auto text-center text-[10px] md:text-xs font-medium tracking-wide flex items-center justify-center gap-2">
        <span className="text-orange-500">⚡</span>
        <span>Orçamento <span className="text-orange-500 font-bold">100% Gratuito</span> em até 24h — Fachadas em ACM, Letreiros e Comunicação Visual em Linhares</span>
      </div>
    </div>
  );
};

export default TopBar;
