import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CadastroServico = () => {
  const [nome, setNome] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Realize o envio dos dados do produto para o backend e lide com o processo de cadastro aqui

    // Exemplo de código para enviar os dados do produto para o backend
    const data = { nome};

    fetch('http://localhost:5000/cadastrar-servico', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        // Realize as ações adequadas após o cadastro do produto
      })
      .catch((error) => {
        console.error('Erro:', error);
        // Lide com o erro de cadastro do produto aqui
      });

    // Limpe os campos após o cadastro do produto
    setNome('');
  };

  return (
    <div className="container">
      <div className="cadastro-servico-container">
        <h2>Cadastro de Serviço</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="nome">Nome do Serviço:</label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <button type="submit">Cadastrar</button>
        </form>
      </div>
      <button className="register-button">
        <Link to="/admin" className="back-button">Voltar</Link>
      </button>
    </div>
  );
};

export default CadastroServico;
