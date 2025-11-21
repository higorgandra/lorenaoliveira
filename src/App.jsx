import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Pacientes from './pages/Pacientes';
import Profissionais from './pages/Profissionais';
import Blog from './pages/Blog';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="pacientes" element={<Pacientes />} />
        <Route path="profissionais" element={<Profissionais />} />
        <Route path="blog" element={<Blog />} />
        <Route path="login" element={<Login />} />
        {/* Adicione outras rotas aqui, como uma página 404 */}
      </Route>
    </Routes>
  );
}

export default App;