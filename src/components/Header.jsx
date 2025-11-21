import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'react-feather';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Efeito para bloquear o scroll da página quando o menu estiver aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Função de limpeza para garantir que o scroll seja reativado
    return () => { document.body.style.overflow = 'unset' };
  }, [isMenuOpen]);

  return (
    <header className="bg-brand-bege shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo/Nome da Plataforma */}
        <Link to="/" className="text-2xl font-bold text-brand-dark tracking-tight">
          Lorena Oliveira
        </Link>

        {/* Navegação Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-brand-medium hover:text-brand-dark transition-colors duration-200">Início</Link>
          <Link to="/sobre" className="text-brand-medium hover:text-brand-dark transition-colors duration-200">Sobre Mim</Link>
          <Link to="/pacientes" className="text-brand-medium hover:text-brand-dark transition-colors duration-200">Para Pacientes</Link>
          <Link to="/profissionais" className="text-brand-medium hover:text-brand-dark transition-colors duration-200">Para Profissionais</Link>
          <Link to="/blog" className="text-brand-medium hover:text-brand-dark transition-colors duration-200">Blog</Link>
        </div>

        {/* Botões de Ação Desktop */}
        <div className="hidden md:flex items-center space-x-3">
          <Link to="/login" className="px-5 py-2 text-sm font-medium text-brand-dark bg-transparent border border-brand-base rounded-full hover:bg-brand-light transition-colors duration-200">Entrar</Link>
          <button type="button" className="px-5 py-2 text-sm font-medium text-white bg-brand-dark rounded-full hover:bg-opacity-80 transition-opacity duration-200 shadow-lg">Agendar Sessão</button>
        </div>

        {/* Botão de Menu Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(true)} className="p-2 rounded-md text-brand-medium hover:text-brand-dark hover:bg-brand-light">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Menu Mobile (Tela Cheia) */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-brand-bege z-50 flex flex-col items-center justify-center">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6 p-2 rounded-md text-brand-medium hover:text-brand-dark hover:bg-brand-light">
            <X size={30} />
          </button>

          <nav className="flex flex-col items-center space-y-8">
            <Link onClick={() => setIsMenuOpen(false)} to="/" className="text-2xl text-brand-dark hover:opacity-70">Início</Link>
            <Link onClick={() => setIsMenuOpen(false)} to="/sobre" className="text-2xl text-brand-dark hover:opacity-70">Sobre Mim</Link>
            <Link onClick={() => setIsMenuOpen(false)} to="/pacientes" className="text-2xl text-brand-dark hover:opacity-70">Para Pacientes</Link>
            <Link onClick={() => setIsMenuOpen(false)} to="/profissionais" className="text-2xl text-brand-dark hover:opacity-70">Para Profissionais</Link>
            <Link onClick={() => setIsMenuOpen(false)} to="/blog" className="text-2xl text-brand-dark hover:opacity-70">Blog</Link>
          </nav>

          <div className="mt-12 flex flex-col items-center space-y-4 w-4/5 max-w-xs">
            <Link onClick={() => setIsMenuOpen(false)} to="/login" className="w-full text-center px-5 py-3 font-medium text-brand-dark bg-transparent border border-brand-base rounded-full hover:bg-brand-light">
              Entrar
            </Link>
            <button onClick={() => setIsMenuOpen(false)} type="button" className="w-full text-center px-5 py-3 font-medium text-white bg-brand-dark rounded-full hover:bg-opacity-80 shadow-lg">
              Agendar Sessão
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;