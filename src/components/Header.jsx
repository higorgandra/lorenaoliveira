import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-brand-bege shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo/Nome da Plataforma */}
        <Link to="/" className="text-2xl font-bold text-brand-dark tracking-tight">
          Lorena Oliveira
        </Link>
        
        {/* Navegação Principal (Desktop) 
            CORREÇÃO: Removi "hidden" e "md:flex". Forcei "flex".
        */}
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-brand-medium hover:text-brand-dark transition-colors duration-200">Início</Link>
          <Link to="/sobre" className="text-brand-medium hover:text-brand-dark transition-colors duration-200">Sobre Mim</Link>
          <Link to="/pacientes" className="text-brand-medium hover:text-brand-dark transition-colors duration-200">Para Pacientes</Link>
          <Link to="/profissionais" className="text-brand-medium hover:text-brand-dark transition-colors duration-200">Para Profissionais</Link>
          <Link to="/blog" className="text-brand-medium hover:text-brand-dark transition-colors duration-200">Blog</Link>
        </div>
        
        {/* Botões de Ação (Login/Cadastro) */}
        <div className="flex items-center space-x-3">
          {/* CORREÇÃO: Removi "hidden" e "sm:inline-block". Forcei "inline-block". */}
          <Link to="/login" className="inline-block px-5 py-2 text-sm font-medium text-brand-dark bg-transparent border border-brand-base rounded-full hover:bg-brand-light transition-colors duration-200">
            Entrar
          </Link>
          <button type="button" className="px-5 py-2 text-sm font-medium text-white bg-brand-dark rounded-full hover:bg-opacity-80 transition-opacity duration-200 shadow-lg">
            Agendar Sessão
          </button>
          
          {/* Botão de Menu (Mobile) 
              CORREÇÃO: Removi "md:hidden". Forcei "hidden".
          */}
          <button type="button" className="hidden p-2 rounded-md text-brand-medium hover:text-brand-dark hover:bg-brand-light">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;