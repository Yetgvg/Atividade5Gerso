import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListaPets = () => {
  const [pets, setPets] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const idCliente = localStorage.getItem('idCliente');

    if (idCliente) {
      fetchPets(idCliente);
    } else {
      setErrorMessage('ID do cliente não encontrado');
    }
  }, []);

  const fetchPets = async (idCliente) => {
    try {
      const response = await axios.get(`http://localhost:5000/listar-pets/${idCliente}`);
      setPets(response.data.pets);
    } catch (error) {
      console.error('Erro ao buscar os pets:', error);
      setErrorMessage('Erro ao buscar os pets');
    }
  };

  return (
    <div className='container'>
      <h2>Lista de Pets</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <ul>
        {pets.map((pet) => (
          <li key={pet.id}>
            {pet.id}.
            Nome: {pet.nome} -
            Tipo: {pet.tipo} -
            Raça: {pet.raca} -
            Gênero: {pet.genero}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaPets;
