
import React from 'react';

const servicesData = [
  {
    title: 'Fachadas',
    desc: 'Fachadas bem estruturadas e criativas são investimentos que fazem toda diferença e dão credibilidade, além agregar mais valor aos seus produtos. A MEGAPRINT possui equipe, estrutura e experiência de sobra para fazer um projeto para sua empresa de forma mais criativa, eficiente e com a maior qualidade possível.',
    icon: (
      <svg className="w-full h-full text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z" />
      </svg>
    )
  },
  {
    title: 'Letras Caixa',
    desc: 'Os letreiros em letras caixa são uma opção moderna e sofisticada para a identificação da sua empresa ou comércio. Com a utilização de materiais como ACM, metal, PVC, acrílico, aço galvanizado e PVC expandido, as letras caixa ganham ainda mais beleza e durabilidade.',
    icon: (
      <svg className="w-full h-full text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z" />
      </svg>
    )
  },
  {
    title: 'Adesivos',
    desc: 'Com a tecnologia avançada, o adesivo vinil de parede se tornou uma excelente opção para personalizar ambientes com elegância e sofisticação. Ao contrário dos papéis de parede, o adesivo vinil permite que você crie estampas únicas e exclusivas.',
    icon: (
      <svg className="w-full h-full text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
      </svg>
    )
  },
  {
    title: 'Luminosos',
    desc: 'Com o painel luminoso, é possível explorar diversas possibilidades de design e iluminação, proporcionando um resultado visual incrível. Utilizando materiais de alta qualidade, garantimos a durabilidade e resistência do seu painel.',
    icon: (
      <svg className="w-full h-full text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" />
      </svg>
    )
  },
  {
    title: 'Envelopamento de Frotas',
    desc: 'O envelopamento de frota é uma das formas mais eficientes de divulgar a sua empresa. Ele personaliza a sua frota e torna a sua marca visível por onde quer que os veículos circulem, transmitindo profissionalismo e credibilidade.',
    icon: (
      <svg className="w-full h-full text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.27-3.82c.14-.4.52-.68.95-.68h9.56c.43 0 .81.28.95.68L19 11H5z" />
      </svg>
    )
  },
  {
    title: 'Sinalização',
    desc: 'Na MEGAPRINT Comunicação Visual, estamos comprometidos em fornecer soluções completas de sinalização para seus ambientes comerciais. Oferecemos uma ampla variedade de placas, incluindo placas fotoluminescentes.',
    icon: (
      <svg className="w-full h-full text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 7l-9-5-9 5v10l9 5 9-5V7zM12 4.13L18.97 8 12 11.87 5.03 8 12 4.13zM5 10.13l6 3.33v6.41l-6-3.33v-6.41zm8 9.74v-6.41l6-3.33v6.41l-6 3.33z" />
      </svg>
    )
  }
];

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-32 bg-[#0a0a0a] border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-20">
          <div className="text-orange-500 text-xs font-bold tracking-[0.3em] uppercase mb-4">
            O que fazemos
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
            Soluções Visuais <br /> de Alto Padrão
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="group p-8 bg-[#111111] border border-white/5 rounded-3xl hover:border-orange-500/50 transition-all duration-500 flex flex-col h-full">
              <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500 mb-8 group-hover:scale-110 transition-transform duration-500">
                <div className="w-8 h-8">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                {service.desc}
              </p>
              <div className="pt-6 border-t border-white/5 mt-auto">
                <a href="#orcamento" className="text-xs font-bold uppercase tracking-widest text-orange-500 flex items-center gap-2 hover:gap-4 transition-all">
                  Saiba Mais 
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
