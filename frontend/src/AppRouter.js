import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import CadastroCliente from './components/CadastroCliente';
import Home from './components/Home'; 
import ComprarProduto from './components/CompraProdutos'; 
import ComprarServico from './components/CompraServico'; 
import ListaServicos from './components/ListaServicos'; 
import ListaProdutos from './components/ListaProdutos'; 
import ListaPets from './components/ListaPet'; 
import CadastrarPet from './components/CadastroPet'; 
import CadastroProduto from './components/CadastroProduto';
import CadastroServico from './components/CadastroServico';
import AtualizarProdutos from './components/AtualizarProduto';
import AtualizarServicos from './components/AtualizarServico';
import Layout from './components/Layout';
import ADM from './components/Adm';
import './styles.css';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<CadastroCliente />} />
        <Route path="/home" element={<Home />} />
        <Route path="/comprar-produto" element={<Layout><ComprarProduto /></Layout>} />
        <Route path="/comprar-servico" element={<Layout><ComprarServico /></Layout>} />
        <Route path="/listar-servicos" element={<Layout><ListaServicos /></Layout>} />
        <Route path="/listar-produtos" element={<Layout><ListaProdutos /></Layout>} />
        <Route path="/listar-pets" element={<Layout><ListaPets /></Layout>} />
        <Route path="/cadastrar-pet" element={<Layout><CadastrarPet /></Layout>} />
        <Route path="/cadastro-produto" element={<CadastroProduto />} />
        <Route path="/cadastro-servico" element={<CadastroServico/>}/>
        <Route path="/atualizar-produto" element={<AtualizarProdutos />} />
        <Route path="/atualizar-servico" element={<AtualizarServicos />} />
        <Route path='/admin' element={<ADM></ADM>}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;
