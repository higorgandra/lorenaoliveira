// No seu arquivo App.jsx
import React from 'react';

function App() {
  return (
    <div className="antialiased">
      {/* 1. Header (Cabeçalho) */}
      <header className="bg-brand-bege shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          {/* Logo/Nome da Plataforma */}
          <div className="text-2xl font-bold text-brand-dark tracking-tight">
            Lorena Oliveira
          </div>
          
          {/* Navegação Principal (Desktop) */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-brand-medium hover:text-brand-dark transition-colors duration-200">Início</a>
            <a href="#sobre" className="text-brand-medium hover:text-brand-dark transition-colors duration-200">Sobre Mim</a>
            <a href="#pacientes" className="text-brand-medium hover:text-brand-dark transition-colors duration-200">Para Pacientes</a>
            <a href="#profissionais" className="text-brand-medium hover:text-brand-dark transition-colors duration-200">Para Profissionais</a>
            <a href="#" className="text-brand-medium hover:text-brand-dark transition-colors duration-200">Blog</a>
          </div>
          
          {/* Botões de Ação (Login/Cadastro) */}
          <div className="flex items-center space-x-3">
            <button type="button" className="hidden sm:inline-block px-5 py-2 text-sm font-medium text-brand-dark bg-transparent border border-brand-base rounded-full hover:bg-brand-light transition-colors duration-200">
              Entrar
            </button>
            <button type="button" className="px-5 py-2 text-sm font-medium text-white bg-brand-dark rounded-full hover:bg-opacity-80 transition-opacity duration-200 shadow-lg">
              Agendar Sessão
            </button>
            {/* Botão de Menu (Mobile) */}
            <button type="button" className="md:hidden p-2 rounded-md text-brand-medium hover:text-brand-dark hover:bg-brand-light">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </nav>
      </header>

      {/* 2. Hero Section (Seção Principal) */}
      <main>
        <section className="bg-brand-light">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32 grid md:grid-cols-2 gap-12 items-center">
            {/* Coluna de Texto */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-dark leading-tight tracking-tighter">
                Cuidado e acolhimento em cada sessão.
              </h1>
              <p className="mt-6 text-lg text-brand-medium max-w-xl mx-auto md:mx-0">
                Conectando você a psicoterapeutas qualificados, prontos para ouvir e guiar sua jornada de bem-estar emocional.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button type="button" className="px-8 py-3 text-base font-medium text-white bg-brand-dark rounded-full hover:bg-opacity-80 transition-opacity duration-200 shadow-lg">
                  Encontrar meu terapeuta
                </button>
                <button type="button" className="px-8 py-3 text-base font-medium text-brand-dark bg-transparent border border-brand-base rounded-full hover:bg-brand-light transition-colors duration-200">
                  Sou profissional
                </button>
              </div>
            </div>
            {/* Coluna de Imagem (Placeholder) */}
            <div className="hidden md:block">
              {/* Placeholder de imagem com a estética da plataforma */}
              <div className="w-full h-96 bg-brand-base rounded-3xl flex items-center justify-center text-brand-light text-opacity-50">
                
              </div>
            </div>
          </div>
        </section>

        {/* 3. Seção "Sobre Lorena Oliveira" */}
        <section id="sobre" className="py-24 bg-brand-bege">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-5 gap-12 items-center">
              {/* Placeholder da Foto */}
              <div className="md:col-span-2 w-full">
                <div className="aspect-square bg-brand-base rounded-3xl flex items-center justify-center text-brand-light text-opacity-50">
                  {/* Este é o link da foto que você vai adicionar depois */}
                  {/* <img src="URL_DA_SUA_FOTO_AQUI" alt="Lorena Oliveira" className="w-full h-full object-cover rounded-3xl" /> */}
                  <span className="text-center p-4">Espaço reservado para a foto de Lorena Oliveira</span>
                </div>
              </div>
              {/* Texto Sobre */}
              <div className="md:col-span-3">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">
                  Sobre Lorena Oliveira
                </h2>
                <p className="mt-6 text-lg text-brand-medium">
                  Aqui você pode escrever sobre a fundadora da plataforma. Fale sobre sua missão, sua visão para a psicoterapia e o porquê de criar este espaço.
                </p>
                <p className="mt-4 text-brand-medium">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  pellentesque, nunc ac faucibus ultrices, felis enim
                  facilisis nisl, sit amet ullamcorper purus sapien sit amet
                  turpis. Quisque id ligula eu nisl ultrices sodales.
                </p>
                <button type="button" className="mt-8 px-6 py-3 text-base font-medium text-brand-dark bg-transparent border border-brand-base rounded-full hover:bg-brand-light transition-colors duration-200">
                  Conheça minha história
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Seção "Para Pacientes" (Simulação de Funcionalidades) */}
        <section id="pacientes" className="py-24 bg-brand-light">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">
                Sua jornada de cuidado, simplificada.
              </h2>
              <p className="mt-4 text-lg text-brand-medium">
                Desenvolvemos uma área do paciente intuitiva e segura, pensada para facilitar seu processo terapêutico.
              </p>
            </div>
            
            {/* Mockup da Interface do Paciente */}
            <div className="mt-16 p-8 bg-white rounded-3xl shadow-xl max-w-5xl mx-auto border border-brand-base border-opacity-30">
              <div className="flex items-center justify-between pb-4 border-b border-brand-base border-opacity-20">
                <h3 className="text-xl font-semibold text-brand-dark">Área do Paciente</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-brand-medium">Olá, Paciente</span>
                  <div className="w-10 h-10 rounded-full bg-brand-base"></div>
                </div>
              </div>
              
              {/* Grid de Funcionalidades */}
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {/* Funcionalidade 1: Agendamentos */}
                <div className="bg-brand-light p-6 rounded-2xl">
                  <h4 className="font-bold text-brand-dark">Minhas Sessões</h4>
                  <p className="text-sm text-brand-medium mt-2">Veja suas próximas sessões e histórico.</p>
                  <button className="mt-4 text-sm font-medium text-brand-dark">Ver agenda</button>
                </div>
                {/* Funcionalidade 2: Chat */}
                <div className="bg-brand-light p-6 rounded-2xl">
                  <h4 className="font-bold text-brand-dark">Chat Seguro</h4>
                  <p className="text-sm text-brand-medium mt-2">Converse com seu terapeuta com privacidade.</p>
                  <button className="mt-4 text-sm font-medium text-brand-dark">Abrir chat</button>
                </div>
                {/* Funcionalidade 3: Diário */}
                <div className="bg-brand-light p-6 rounded-2xl">
                  <h4 className="font-bold text-brand-dark">Diário Pessoal</h4>
                  <p className="text-sm text-brand-medium mt-2">Registre seus pensamentos e emoções.</p>
                  <button className="mt-4 text-sm font-medium text-brand-dark">Acessar diário</button>
                </div>
                {/* Funcionalidade 4: Pagamentos */}
                <div className="bg-brand-light p-6 rounded-2xl">
                  <h4 className="font-bold text-brand-dark">Pagamentos</h4>
                  <p className="text-sm text-brand-medium mt-2">Gerencie seus pagamentos de forma fácil.</p>
                </div>
                {/* Funcionalidade 5: Perfil */}
                <div className="bg-brand-light p-6 rounded-2xl">
                  <h4 className="font-bold text-brand-dark">Meu Perfil</h4>
                  <p className="text-sm text-brand-medium mt-2">Atualize suas informações e preferências.</p>
                </div>
                {/* Funcionalidade 6: Sessão Online */}
                <div className="bg-brand-light p-6 rounded-2xl">
                  <h4 className="font-bold text-brand-dark">Sessão Online</h4>
                  <p className="text-sm text-brand-medium mt-2">Acesse sua vídeo-chamada segura por aqui.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Seção "Para Profissionais" (Simulação de Funcionalidades) */}
        <section id="profissionais" className="py-24 bg-brand-bege">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">
                Gestão completa para seu consultório.
              </h2>
              <p className="mt-4 text-lg text-brand-medium">
                Foque no que importa: seus pacientes. Deixe a gestão da sua agenda, finanças e prontuários conosco.
              </p>
            </div>

            {/* Lista de Funcionalidades para Profissionais */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 text-center">
              {/* Feature 1: Perfil */}
              <div className="p-6">
                <div className="w-16 h-16 bg-brand-base rounded-full flex items-center justify-center mx-auto text-white">
                  {/* Icon Placeholder */}
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                </div>
                <h3 className="mt-4 font-bold text-brand-dark">Perfil Personalizável</h3>
                <p className="mt-2 text-sm text-brand-medium">Atraia mais pacientes com um perfil completo.</p>
              </div>
              {/* Feature 2: Agenda */}
              <div className="p-6">
                <div className="w-16 h-16 bg-brand-base rounded-full flex items-center justify-center mx-auto text-white">
                  {/* Icon Placeholder */}
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                </div>
                <h3 className="mt-4 font-bold text-brand-dark">Agenda Inteligente</h3>
                <p className="mt-2 text-sm text-brand-medium">Gerencie seus horários e bloqueios facilmente.</p>
              </div>
              {/* Feature 3: Prontuário */}
              <div className="p-6">
                <div className="w-16 h-16 bg-brand-base rounded-full flex items-center justify-center mx-auto text-white">
                  {/* Icon Placeholder */}
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                </div>
                <h3 className="mt-4 font-bold text-brand-dark">Prontuário Eletrônico</h3>
                <p className="mt-2 text-sm text-brand-medium">Registre a evolução dos pacientes com segurança.</p>
              </div>
              {/* Feature 4: Financeiro */}
              <div className="p-6">
                <div className="w-16 h-16 bg-brand-base rounded-full flex items-center justify-center mx-auto text-white">
                  {/* Icon Placeholder */}
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                </div>
                <h3 className="mt-4 font-bold text-brand-dark">Gestão Financeira</h3>
                <p className="mt-2 text-sm text-brand-medium">Controle seus recebimentos e faturamento.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Seção de Login (Simulação) */}
        <section id="login" className="py-24 bg-brand-light">
          <div className="container mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-brand-base border-opacity-30">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-dark tracking-tight text-center">
                Acesse sua conta
              </h2>
              <form className="mt-8 space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-medium">Email</label>
                  <input type="email" name="email" id="email" className="mt-1 block w-full px-4 py-3 border border-brand-base border-opacity-30 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-base focus:border-transparent" placeholder="seu@email.com" />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-brand-medium">Senha</label>
                  <input type="password" name="password" id="password" className="mt-1 block w-full px-4 py-3 border border-brand-base border-opacity-30 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-base focus:border-transparent" placeholder="••••••••" />
                </div>
                <div className="flex items-center justify-between">
                  <a href="#" className="text-sm font-medium text-brand-medium hover:text-brand-dark">Esqueceu a senha?</a>
                </div>
                <div>
                  <button type="submit" className="w-full px-8 py-3 text-base font-medium text-white bg-brand-dark rounded-full hover:bg-opacity-80 transition-opacity duration-200 shadow-lg">
                    Entrar
                  </button>
                </div>
                <p className="text-center text-sm text-brand-medium">
                  Não tem uma conta? <a href="#" className="font-medium text-brand-dark hover:underline">Cadastre-se</a>
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* 7. Footer (Rodapé) */}
      <footer className="bg-brand-dark text-brand-light">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            
            {/* Coluna 1: Logo/Nome */}
            <div className="col-span-2 lg:col-span-2">
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
                <li><a href="#sobre" className="text-sm text-brand-light text-opacity-70 hover:text-white">Sobre</a></li>
                <li><a href="#pacientes" className="text-sm text-brand-light text-opacity-70 hover:text-white">Para Pacientes</a></li>
                <li><a href="#profissionais" className="text-sm text-brand-light text-opacity-70 hover:text-white">Para Profissionais</a></li>
                <li><a href="#" className="text-sm text-brand-light text-opacity-70 hover:text-white">Blog</a></li>
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
    </div>
  );
}

export default App;