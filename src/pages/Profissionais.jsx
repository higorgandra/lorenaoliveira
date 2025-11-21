import React from 'react';

function Profissionais() {
  return (
    <>
      {/* Seção "Para Profissionais" (Simulação de Funcionalidades) */}
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
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              </div>
              <h3 className="mt-4 font-bold text-brand-dark">Perfil Personalizável</h3>
              <p className="mt-2 text-sm text-brand-medium">Atraia mais pacientes com um perfil completo.</p>
            </div>
            {/* Feature 2: Agenda */}
            <div className="p-6">
              <div className="w-16 h-16 bg-brand-base rounded-full flex items-center justify-center mx-auto text-white">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="mt-4 font-bold text-brand-dark">Agenda Inteligente</h3>
              <p className="mt-2 text-sm text-brand-medium">Gerencie seus horários e bloqueios facilmente.</p>
            </div>
            {/* Feature 3: Prontuário */}
            <div className="p-6">
              <div className="w-16 h-16 bg-brand-base rounded-full flex items-center justify-center mx-auto text-white">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              </div>
              <h3 className="mt-4 font-bold text-brand-dark">Prontuário Eletrônico</h3>
              <p className="mt-2 text-sm text-brand-medium">Registre a evolução dos pacientes com segurança.</p>
            </div>
            {/* Feature 4: Financeiro */}
            <div className="p-6">
              <div className="w-16 h-16 bg-brand-base rounded-full flex items-center justify-center mx-auto text-white">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </div>
              <h3 className="mt-4 font-bold text-brand-dark">Gestão Financeira</h3>
              <p className="mt-2 text-sm text-brand-medium">Controle seus recebimentos e faturamento.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profissionais;