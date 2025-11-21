import React from 'react';
import {
  Search,
  Shield,
  Calendar,
  Video
} from 'react-feather';
import Star from 'react-feather/dist/icons/star';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-primary to-brand-primary/80 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Encontre o Psicoterapeuta Ideal para Você
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Conecte-se com profissionais qualificados para atendimento online e cuide da sua saúde mental
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#search" className="bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition duration-300">
                Buscar Terapeutas
              </a>
              <a href="/login" className="border-2 border-gray-800 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition duration-300">
                Fazer Login
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section id="search" className="py-24 bg-white">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-dark mb-12">
            Encontre Seu Psicoterapeuta
          </h2>

          {/* Search Filters */}
          <div className="bg-brand-primary/20 rounded-2xl p-6 md:p-8 mb-12">
            <div className="grid grid-cols-4 gap-6 items-end">
              <div>
                <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 mb-2">Especialidade</label>
                <select id="specialty" className="w-full rounded-lg border-gray-300 shadow-sm focus:border-brand-primary focus:ring-brand-primary">
                  <option>Todas as especialidades</option>
                  <option>Ansiedade</option>
                  <option>Depressão</option>
                  <option>Terapia Cognitivo-Comportamental</option>
                  <option>Psicanálise</option>
                  <option>Casais e Família</option>
                </select>
              </div>
              <div>
                <label htmlFor="modality" className="block text-sm font-medium text-gray-700 mb-2">Modalidade</label>
                <select id="modality" className="w-full rounded-lg border-gray-300 shadow-sm focus:border-brand-primary focus:ring-brand-primary">
                  <option>Todas as modalidades</option>
                  <option>Online</option>
                  <option>Presencial</option>
                  <option>Híbrido</option>
                </select>
              </div>
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">Valor da Consulta</label>
                <select id="price" className="w-full rounded-lg border-gray-300 shadow-sm focus:border-brand-primary focus:ring-brand-primary">
                  <option>Qualquer valor</option>
                  <option>Até R$ 100</option>
                  <option>R$ 100 - R$ 200</option>
                  <option>R$ 200 - R$ 300</option>
                  <option>Acima de R$ 300</option>
                </select>
              </div>
              <div className="w-full">
                <button type="button" className="w-full bg-brand-primary text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-brand-primary/80 transition duration-300 flex items-center justify-center gap-2">
                  <Search size={20} />
                  Buscar
                </button>
              </div>
            </div>
          </div>

          {/* Therapists Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((id) => (
              <div key={id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 min-w-[300px] md:min-w-0">
                <div className="h-48 bg-gradient-to-br from-brand-primary to-brand-primary/60"></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center text-gray-800 font-bold text-xl">
                      DR
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-lg text-gray-800">Dra. Maria Silva</h3>
                      <p className="text-gray-600 text-sm">Psicóloga Clínica</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="text-sm font-medium">4.9 (128 avaliações)</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Especialista em terapia cognitivo-comportamental com 8 anos de experiência.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-800">R$ 180/sessão</span>
                    <a href={`/therapist/${id}`} className="bg-brand-primary text-gray-800 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-brand-primary/80 transition duration-300">
                      Ver Perfil
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-brand-primary/20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Por que Escolher a Plataforma?</h2>
          <div className="grid grid-cols-3 gap-10 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4"><Shield size={32} className="text-gray-800" /></div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">Segurança e Privacidade</h3>
              <p className="text-gray-600">Sessões criptografadas e total confidencialidade dos seus dados.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4"><Calendar size={32} className="text-gray-800" /></div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">Agendamento Flexível</h3>
              <p className="text-gray-600">Encontre horários que se adequem à sua rotina.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4"><Video size={32} className="text-gray-800" /></div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">Atendimento Online</h3>
              <p className="text-gray-600">Conecte-se de qualquer lugar através de videochamada segura.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;