import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import CadastroCliente from './components/CadastroCliente';
import Home from './components/Home'; 
import ComprarProduto from './components/CompraProdutos'; 
import ComprarServico from './components/CompraServico'; 
import CadastroPet from './components/CadastroPet';
import ListaServicos from './components/ListaServicos';
import ListaProdutos from './components/ListaProdutos';
import ListaPets from './components/ListaPet';
import './styles.css';

const AppRouter = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<CadastroCliente />} />
        <Route path="/home" element={<Home />} />
        <Route path="/comprar-produto" element={<ComprarProduto />} />
        <Route path="/comprar-servico" element={<ComprarServico />} />
        <Route path="/listar-servicos" element={<ListaServicos />} />
        <Route path="/listar-produtos" element={<ListaProdutos />} />
        <Route path="/cadastrar-pet" element={<CadastroPet />} />
        <Route path="/listar-pets" element={<ListaPets />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
