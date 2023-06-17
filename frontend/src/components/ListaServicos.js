import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListaServicos = () => {
  const [servicosComprados, setServicosComprados] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const idCliente = localStorage.getItem('idCliente');

    if (idCliente) {
      fetchServicosComprados(idCliente);
    } else {
      setErrorMessage('ID do cliente não encontrado');
    }
  }, []);

  const fetchServicosComprados = async (idCliente) => {
    try {
      const response = await axios.get(`http://localhost:5000/listar-servicos/${idCliente}`);
      setServicosComprados(response.data.servicosComprados);
    } catch (error) {
      console.error('Erro ao buscar os serviços comprados:', error);
      setErrorMessage('Erro ao buscar os serviços comprados');
    }
  };

  return (
    <div>
      <h2>Serviços Comprados</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <ul>
        {servicosComprados.map((servico, index) => (
          <li key={index}>{servico.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaServicos;
