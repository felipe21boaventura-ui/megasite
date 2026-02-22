
import React from 'react';

const Values: React.FC = () => {
  const values = [
    {
      title: 'Nossa Essência',
      icon: (
        <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center text-orange mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        </div>
      ),
      items: [
        'Nosso foco é criar relacionamentos duradouros com nossos clientes, permitindo que possamos oferecer soluções criativas e inovadoras que superem as expectativas.',
        'Acreditamos que uma experiência inesquecível é o resultado de um trabalho em equipe e estamos prontos para ser parte da sua equipe de sucesso.'
      ]
    },
    {
      title: 'Propósito Inovador',
      icon: (
        <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center text-orange mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
        </div>
      ),
      items: [
        'Na nossa perspectiva, ser referência não é suficiente. Nós queremos ser a conexão perfeita entre o serviço e o cliente, oferecendo uma experiência única e inesquecível.',
        'O resultado final será o reflexo do nosso compromisso com a excelência.'
      ]
    },
    {
      title: 'Nosso DNA Criativo',
      icon: (
        <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center text-orange mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
        </div>
      ),
      items: [
        'Nossos valores moldam nossa cultura. Nosso relacionamento é baseado na empatia, transparência e honestidade.',
        'A humildade nos mantém abertos para aprender e crescer.',
        'Nossa competência é aprimorada pela paixão, ética e dedicação em tudo que fazemos.',
        'Juntos, these values form our culture and guide us towards success.'
      ]
    }
  ];

  return (
    <section className="py-32 bg-[#0d0d0d] text-white border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-3 gap-16">
          {values.map((v, i) => (
            <div key={i} className="flex flex-col">
              <div className="mb-8">
                {v.icon}
              </div>
              <h3 className="text-2xl font-black mb-8 text-white uppercase tracking-wider">{v.title}</h3>
              <ul className="space-y-6">
                {v.items.map((item, idx) => (
                  <li key={idx} className="flex gap-4 text-gray-400 text-sm leading-relaxed">
                    <span className="text-orange-500 font-bold">/</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
