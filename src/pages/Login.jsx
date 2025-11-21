import React from 'react';

function Login() {
  return (
    <>
      {/* Seção de Login (Simulação) */}
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
    </>
  );
}

export default Login;