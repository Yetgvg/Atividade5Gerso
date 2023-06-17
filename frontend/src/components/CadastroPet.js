import React, { useState } from 'react';
import axios from 'axios';

const CadastroPet = () => {
  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('');
  const [raca, setRaca] = useState('');
  const [genero, setGenero] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleCadastroClick = async () => {
    try {
      const response = await axios.post('http://localhost:5000/cadastrar-pet', {
        nome,
        tipo,
        raca,
        genero,
        clienteId: localStorage.getItem('idCliente'),
      });
      setSuccessMessage(response.data.message);
      setNome('');
      setTipo('');
      setRaca('');
      setGenero('');
    } catch (error) {
      console.error('Erro ao cadastrar pet:', error);
      setErrorMessage('Erro ao cadastrar pet');
    }
  };

  return (
    <div>
      <h2>Cadastro de Pet</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
      <div>
        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
      </div>
      <div>
        <label htmlFor="tipo">Tipo:</label>
        <input type="text" id="tipo" value={tipo} onChange={(e) => setTipo(e.target.value)} />
      </div>
      <div>
        <label htmlFor="raca">Raça:</label>
        <input type="text" id="raca" value={raca} onChange={(e) => setRaca(e.target.value)} />
      </div>
      <div>
        <label htmlFor="genero">Gênero:</label>
        <input type="text" id="genero" value={genero} onChange={(e) => setGenero(e.target.value)} />
      </div>
      <button onClick={handleCadastroClick}>Cadastrar</button>
    </div>
  );
};

export default CadastroPet;
