import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AtualizarServicos = () => {
  const [servicos, setServicos] = useState([]);
  const [idServico, setIdServico] = useState('');
  const [novoNome, setNovoNome] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetchServicos();
  }, []);

  const fetchServicos = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/servicos`);
      setServicos(response.data.servicos);
    } catch (error) {
      console.error('Erro ao buscar os serviços:', error);
      setErrorMessage('Erro ao buscar os serviços');
    }
  };

  const handleIdChange = (event) => {
    setIdServico(event.target.value);
  };

  const handleNomeChange = (event) => {
    setNovoNome(event.target.value);
  };

  const atualizarServico = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/servicos/${idServico}`, { nome: novoNome });
      console.log(response.data); // Lógica adicional após a atualização do servico
      fetchServicos(); // Atualiza a lista de produtos após a atualização
    } catch (error) {
      console.error('Erro ao atualizar o serviço:', error);
      // Lógica de tratamento de erro
    }
  };

  return (
    <div className='container'>
      <h2>Serviços</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <ul>
        {servicos.map((servico, index) => (
          <li key={index}>
            {index + 1}. {servico.nome}
          </li>
        ))}
      </ul>

      <div>
        <label htmlFor="idServico">ID do Serviço:</label>
        <input type="text" id="idServico" value={idServico} onChange={handleIdChange} />
      </div>

      <div>
        <label htmlFor="novoNome">Novo Nome:</label>
        <input type="text" id="novoNome" value={novoNome} onChange={handleNomeChange} />
      </div>

      <button onClick={atualizarServico}>Atualizar Serviço</button>

      <button className="register-button">
        <Link to="/admin" className="back-button">
          Voltar
        </Link>
      </button>
    </div>
  );
};

export default AtualizarServicos;
