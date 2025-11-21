import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-light">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* CORREÇÃO:
          - Removi "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-5"
          - Forcei "grid-cols-5" para ser o padrão em todos os ecrãs.
        */}
        <div className="grid grid-cols-5 gap-8">
          
          {/* Coluna 1: Logo/Nome */}
          {/* CORREÇÃO:
            - Removi "sm:col-span-2", "lg:col-span-2"
            - Forcei "col-span-2" para ser o padrão.
          */}
          <div className="col-span-2">
            <h3 className="text-xl font-bold text-white">Lorena Oliveira</h3>
            <p className="mt-2 text-sm text-brand-light text-opacity-70 max-w-xs">
              Cuidado e acolhimento em cada sessão.
            </p>
            {/* Social Media (Placeholder) */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-brand-light text-opacity-70 hover:text-white">Instagram</a>
              <a href="#" className="text-brand-light text-opacity-70 hover:text-white">LinkedIn</a>
              <a href="#" className="text-brand-light text-opacity-70 hover:text-white">YouTube</a>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h4 className="font-semibold text-white">Plataforma</h4>
            <ul className="mt-4 space-y-2">
              <li><Link to="/sobre" className="text-sm text-brand-light text-opacity-70 hover:text-white">Sobre</Link></li>
              <li><Link to="/pacientes" className="text-sm text-brand-light text-opacity-70 hover:text-white">Para Pacientes</Link></li>
              <li><Link to="/profissionais" className="text-sm text-brand-light text-opacity-70 hover:text-white">Para Profissionais</Link></li>
              <li><Link to="/blog" className="text-sm text-brand-light text-opacity-70 hover:text-white">Blog</Link></li>
            </ul>
          </div>
          
          {/* Coluna 3: Suporte */}
          <div>
            <h4 className="font-semibold text-white">Suporte</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-sm text-brand-light text-opacity-70 hover:text-white">FAQ</a></li>
              <li><a href="#" className="text-sm text-brand-light text-opacity-70 hover:text-white">Contato</a></li>
              <li><a href="#" className="text-sm text-brand-light text-opacity-70 hover:text-white">Central de Ajuda</a></li>
            </ul>
          </div>

          {/* Coluna 4: Legal */}
          <div>
            <h4 className="font-semibold text-white">Legal</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-sm text-brand-light text-opacity-70 hover:text-white">Termos de Uso</a></li>
              <li><a href="#" className="text-sm text-brand-light text-opacity-70 hover:text-white">Política de Privacidade</a></li>
              <li><a href="#" className="text-sm text-brand-light text-opacity-70 hover:text-white">Código de Ética</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-brand-light border-opacity-20 text-center text-sm text-brand-light text-opacity-50">
          <p>&copy; 2025 Lorena Oliveira. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;