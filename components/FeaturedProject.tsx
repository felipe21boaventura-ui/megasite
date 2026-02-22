
import React from 'react';

const FeaturedProject: React.FC = () => {
  return (
    <section className="py-24 bg-[#050505] border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="w-full lg:w-[60%] order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-600/20 to-orange-400/20 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-[#111111] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="https://i.ibb.co/hRByWXDN/Captura-de-tela-2026-02-09-150101.png" 
                  alt="Projeto de Fachada em ACM" 
                  className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-[1px] w-12 bg-orange-500"></div>
                    <div className="bg-orange-500/20 backdrop-blur-md text-orange-500 text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border border-orange-500/30">
                      Projeto em Destaque
                    </div>
                  </div>
                  <div className="text-white font-black text-2xl md:text-3xl tracking-tight">Laser e Cia - Fachada Premium</div>
                  <p className="text-white/60 text-sm mt-2 max-w-md">Execução completa em ACM com letras caixa e iluminação LED.</p>
                </div>
              </div>
            </div>

            <div className="relative group mt-8">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-600/20 to-orange-400/20 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-[#111111] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="https://i.ibb.co/0p1xTNhp/fachada-em-acm-cinza-17.jpg" 
                  alt="Projeto de Fachada em ACM Cinza" 
                  className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-[1px] w-12 bg-orange-500"></div>
                    <div className="bg-orange-500/20 backdrop-blur-md text-orange-500 text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border border-orange-500/30">
                      Acabamento Cinza
                    </div>
                  </div>
                  <div className="text-white font-black text-2xl md:text-3xl tracking-tight">Fachada em ACM Cinza</div>
                  <p className="text-white/60 text-sm mt-2 max-w-md">Elegância e durabilidade para ambientes corporativos.</p>
                </div>
              </div>
            </div>

            <div className="relative group mt-8">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-600/20 to-orange-400/20 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-[#111111] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="https://i.ibb.co/CKc0ZxMC/2025-09-01.png" 
                  alt="Projeto Cartão de Todos Linhares" 
                  className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-[1px] w-12 bg-orange-500"></div>
                    <div className="bg-orange-500/20 backdrop-blur-md text-orange-500 text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border border-orange-500/30">
                      Cartão de Todos
                    </div>
                  </div>
                  <div className="text-white font-black text-2xl md:text-3xl tracking-tight">Cartão de Todos Linhares</div>
                  <p className="text-white/60 text-sm mt-2 max-w-md">Comunicação visual de alto impacto para grandes marcas.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-[40%] order-1 lg:order-2">
            <div className="text-orange-500 text-xs font-bold tracking-[0.3em] uppercase mb-4">
              Resultado Real
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-8">
              Transformação <br /> que Vende
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-lg">
              Não entregamos apenas uma placa, entregamos o novo rosto da sua empresa. Projetos como este utilizam ACM de alta durabilidade, letras caixa com iluminação indireta e acabamento milimétrico.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div className="border-l-2 border-orange-500 pl-6">
                <div className="text-3xl font-black text-white mb-1">ACM</div>
                <div className="text-gray-500 text-xs uppercase tracking-widest font-bold">Material de Elite</div>
              </div>
              <div className="border-l-2 border-orange-500 pl-6">
                <div className="text-3xl font-black text-white mb-1">LED</div>
                <div className="text-gray-500 text-xs uppercase tracking-widest font-bold">Baixo Consumo</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <a 
            href="https://wa.me/message/SSGUQTPF44IMG1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-orange-500 hover:bg-orange-600 text-white font-black py-6 px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_40px_rgba(249,115,22,0.4)] text-sm md:text-base uppercase tracking-[0.2em] group"
          >
            Quero um projeto assim
            <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
