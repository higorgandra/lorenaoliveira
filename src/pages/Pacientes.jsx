import React from 'react';

function Pacientes() {
  return (
    <>
      {/* Seção "Para Pacientes" (Simulação de Funcionalidades) */}
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
    </>
  );
}

export default Pacientes;