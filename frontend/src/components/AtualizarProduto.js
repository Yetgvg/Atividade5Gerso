import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AtualizarProdutos = () => {
  const [produtos, setProdutos] = useState([]);
  const [idProduto, setIdProduto] = useState('');
  const [novoNome, setNovoNome] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetchProdutos();
  }, []);

  const fetchProdutos = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/produtos`);
      setProdutos(response.data.produtos);
    } catch (error) {
      console.error('Erro ao buscar os produtos:', error);
      setErrorMessage('Erro ao buscar os produtos');
    }
  };

  const handleIdChange = (event) => {
    setIdProduto(event.target.value);
  };

  const handleNomeChange = (event) => {
    setNovoNome(event.target.value);
  };

  const atualizarProduto = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/produtos/${idProduto}`, { nome: novoNome });
      console.log(response.data); // Lógica adicional após a atualização do produto
      fetchProdutos(); // Atualiza a lista de produtos após a atualização
    } catch (error) {
      console.error('Erro ao atualizar o produto:', error);
      // Lógica de tratamento de erro
    }
  };

  return (
    <div className='container'>
      <h2>Produtos</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <ul>
        {produtos.map((produto, index) => (
          <li key={index}>
            {index + 1}. {produto.nome}
          </li>
        ))}
      </ul>

      <div>
        <label htmlFor="idProduto">ID do Produto:</label>
        <input type="text" id="idProduto" value={idProduto} onChange={handleIdChange} />
      </div>

      <div>
        <label htmlFor="novoNome">Novo Nome:</label>
        <input type="text" id="novoNome" value={novoNome} onChange={handleNomeChange} />
      </div>

      <button onClick={atualizarProduto}>Atualizar Produto</button>

      <button className="register-button">
        <Link to="/admin" className="back-button">
          Voltar
        </Link>
      </button>
    </div>
  );
};

export default AtualizarProdutos;
