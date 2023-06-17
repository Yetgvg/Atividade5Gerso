import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CompraProduto = () => {
  const [produtos, setProdutos] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [quantity, setQuantity] = useState(1);
  const idCliente = localStorage.getItem('idCliente');

  useEffect(() => {
    fetchProdutos();
  }, []);

  const fetchProdutos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/produtos');
      setProdutos(response.data.produtos);
    } catch (error) {
      console.error('Erro ao obter produtos:', error);
    }
  };

  const handleProductChange = (event) => {
    const productId = event.target.value;
    setSelectedProduct(productId);
    setQuantity(1);
  };

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const adicionarSacola = async () => {
    try {
      const response = await axios.post('http://localhost:5000/adicionar-sacola', {
        idCliente: idCliente, // Usando o idCliente obtido do localStorage
        idProduto: selectedProduct, // Id do produto selecionado
        quantidade: quantity, // Quantidade desejada
      });
      console.log(response.data.message);
      // Resto do código aqui, se necessário
    } catch (error) {
      console.error('Erro ao adicionar à sacola:', error);
    }
  };

  return (
    <div className='container'>
      <h2>Produtos Disponíveis</h2>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            <label>
              <input
                type="radio"
                name="produto"
                value={produto.id}
                checked={selectedProduct === produto.id}
                onChange={handleProductChange}
              />
              {produto.nome}
            </label>
          </li>
        ))}
      </ul>
      <div>
        <label>
          Produto selecionado: {selectedProduct}
        </label>
        <br />
        <label>
          Quantidade:
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
            disabled={!selectedProduct}
          />
        </label>
      </div>
      <button onClick={adicionarSacola} disabled={!selectedProduct}>
        Adicionar à Sacola
      </button>
    </div>
  );
};

export default CompraProduto;
