
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="bg-[#0a0a0a] text-white py-32 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div>
              <div className="text-orange-500 text-xs font-bold tracking-[0.3em] uppercase mb-4">
                Onde estamos
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-8">
                Visite Nossa <br /> Fábrica
              </h2>
              <p className="text-gray-500 max-w-md leading-relaxed">
                Estamos localizados em um ponto estratégico de Linhares para atender toda a região com agilidade e eficiência.
              </p>
            </div>

            <div className="space-y-8">
              <a href="https://wa.me/message/SSGUQTPF44IMG1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Fale Conosco</p>
                  <p className="text-2xl font-black text-white">27 99984-4966</p>
                </div>
              </a>

              <a href="mailto:megaprintlinhares@gmail.com" className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">E-mail</p>
                  <p className="text-xl font-black text-white">megaprintlinhares@gmail.com</p>
                </div>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="bg-[#111111] p-4 rounded-[2.5rem] border border-white/5 shadow-2xl overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.8821950346383!2d-40.0716656247759!3d-19.41203498186125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb62908f9180735%3A0xb3638b70743b1748!2sAv.%20Claudio%20Emanoel%20da%20Costa%2C%20Linhares%20-%20ES!5e0!3m2!1spt-BR!2sbr!4v1714150000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="450" 
                style={{ border: 0, borderRadius: '2rem' }} 
                allowFullScreen={true} 
                loading="lazy" 
              ></iframe>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-orange-500/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
