import React from 'react';

function Sobre() {
  return (
    <>
      {/* Seção "Sobre Lorena Oliveira" */}
      <section id="sobre" className="py-24 bg-brand-bege">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            {/* Placeholder da Foto */}
            <div className="md:col-span-2 w-full">
              <div className="aspect-square bg-brand-base rounded-3xl flex items-center justify-center text-brand-light text-opacity-50">
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque, nunc ac faucibus ultrices, felis enim facilisis nisl, sit amet ullamcorper purus sapien sit amet turpis. Quisque id ligula eu nisl ultrices sodales.
              </p>
              <button type="button" className="mt-8 px-6 py-3 text-base font-medium text-brand-dark bg-transparent border border-brand-base rounded-full hover:bg-brand-light transition-colors duration-200">
                Conheça minha história
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sobre;