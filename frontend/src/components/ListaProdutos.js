import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListaProdutos = () => {
  const [produtosNaSacola, setProdutosNaSacola] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const idCliente = localStorage.getItem('idCliente');

    if (idCliente) {
      fetchProdutosNaSacola(idCliente);
    } else {
      setErrorMessage('ID do cliente não encontrado');
    }
  }, []);

  const fetchProdutosNaSacola = async (idCliente) => {
    try {
      const response = await axios.get(`http://localhost:5000/listar-produtos/${idCliente}`);
      setProdutosNaSacola(response.data.produtosNaSacola);
    } catch (error) {
      console.error('Erro ao buscar os produtos na sacola:', error);
      setErrorMessage('Erro ao buscar os produtos na sacola');
    }
  };

  return (
    <div className='container'>
      <h2>Produtos na Sacola</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <ul>
        {produtosNaSacola.map((produto, index) => (
          <li key={index}>{produto.nome} - Quantidade: {produto.quantidade}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaProdutos;
