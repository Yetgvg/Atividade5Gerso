import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ComprarServico = () => {
  const [servicos, setServicos] = useState([]);
  const [selectedServico, setSelectedServico] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetchServicos();
  }, []);

  const fetchServicos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/servicos');
      setServicos(response.data.servicos);
    } catch (error) {
      console.error('Erro ao buscar os serviços:', error);
      setErrorMessage('Erro ao buscar os serviços');
    }
  };

  const handleServicoChange = (event) => {
    setSelectedServico(event.target.value);
  };

  const handleCompraClick = async () => {
    const idCliente = localStorage.getItem('idCliente');

    if (!idCliente) {
      setErrorMessage('ID do cliente não encontrado');
      return;
    }

    if (!selectedServico) {
      setErrorMessage('Selecione um serviço');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/adicionar-servico-sacola', {
        idCliente,
        idServico: selectedServico,
      });
      setSuccessMessage(response.data.message);
    } catch (error) {
      console.error('Erro ao adicionar o serviço à sacola:', error);
      setErrorMessage('Erro ao adicionar o serviço à sacola');
    }
  };

  return (
    <div>
      <h2>Comprar Serviço</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
      <div>
        <label htmlFor="servico">Selecione um serviço:</label>
        <select id="servico" value={selectedServico} onChange={handleServicoChange}>
          <option value="">Selecione</option>
          {servicos.map((servico) => (
            <option key={servico.id} value={servico.id}>
              {servico.nome}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleCompraClick}>Comprar</button>
    </div>
  );
};

export default ComprarServico;
