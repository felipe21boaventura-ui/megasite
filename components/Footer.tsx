
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] text-white pt-32 pb-12 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <div className="text-3xl font-black tracking-tighter mb-6">MEGAPRINT</div>
            <p className="text-gray-500 max-w-sm leading-relaxed mb-8">
              Especialistas em transformar a fachada do seu negócio em uma máquina de atrair clientes. Tecnologia de ponta e acabamento premium em Linhares e região.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors text-gray-400 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors text-gray-400 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-white">Navegação</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#home" className="hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="#servicos" className="hover:text-orange-500 transition-colors">Serviços</a></li>
              <li><a href="#contato" className="hover:text-orange-500 transition-colors">Contato</a></li>
              <li><a href="#orcamento" className="hover:text-orange-500 transition-colors">Orçamento</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-white">Localização</h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              Av. Claudio Emanoel da Costa, 945 <br />
              Bairro Interlagos, Linhares - ES <br />
              Próximo ao Campo do Vasquinho
            </p>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-600 text-xs">
            &copy; 2025 MegaPrint Comunicação Visual. Todos os direitos reservados.
          </div>
          <div className="text-gray-600 text-xs uppercase tracking-widest font-bold">
            Excelência em Comunicação Visual
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
