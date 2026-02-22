
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', active: true },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Clientes', href: '#clientes' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Orçamento', href: '#orcamento' },
    { name: 'Loja', href: '#loja' },
    { name: 'placa', href: '#placa' },
  ];

  return (
    <header className={`fixed top-[33px] md:top-[37px] left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-end">
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[11px] font-bold transition-colors uppercase tracking-[0.2em] ${link.active ? 'text-orange-500' : 'text-white/70 hover:text-orange-500'}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <div className="lg:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
