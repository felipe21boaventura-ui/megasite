
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-dark">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=2070&auto=format&fit=crop" 
          alt="Storefront Background" 
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-20 pb-32">
        <div className="max-w-4xl">
          {/* Logo and Subtitle */}
          <div className="mb-12">
            <div className="text-3xl md:text-4xl font-black tracking-tighter text-white flex items-center gap-1">
              MEGAPRINT
            </div>
            <div className="text-orange-500 text-xs md:text-sm font-bold tracking-[0.3em] uppercase mt-1">
              Comunicação Visual Linhares
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-8 text-white">
            A Fachada da Sua Loja <span className="text-orange-500">Atrai Clientes</span> ou Afasta Vendas?
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl font-medium">
            Transforme a imagem do seu negócio e transmita credibilidade imediata com uma fachada em ACM de alto padrão. Projetos de comunicação visual sob medida para empresas que exigem excelência — em Linhares e região.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col items-start gap-4">
            <a 
              href="https://wa.me/message/SSGUQTPF44IMG1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-black py-5 px-8 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(37,211,102,0.3)] text-sm md:text-base uppercase tracking-wider"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Quero um orçamento rápido pelo WhatsApp
            </a>
            <p className="text-gray-400 text-sm font-medium ml-2">
              Atendimento rápido e focado em empresários e donos de lojas.
            </p>
          </div>
        </div>
      </div>

      {/* Values Bar at the bottom of Hero */}
      <div className="absolute bottom-0 left-0 w-full bg-[#111111]/80 backdrop-blur-md border-t border-white/5 py-6 z-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <div className="text-white text-xs md:text-sm font-bold">Orçamento em 24h</div>
                <div className="text-gray-500 text-[10px] md:text-xs">Sem enrolação.</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <div className="text-white text-xs md:text-sm font-bold">Acabamento Impecável</div>
                <div className="text-gray-500 text-[10px] md:text-xs">Qualidade premium.</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <div>
                <div className="text-white text-xs md:text-sm font-bold">Garantia no Produto</div>
                <div className="text-gray-500 text-[10px] md:text-xs">Seu investimento seguro.</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div>
                <div className="text-white text-xs md:text-sm font-bold">Especialistas Locais</div>
                <div className="text-gray-500 text-[10px] md:text-xs">Instalação rápida em Linhares.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
