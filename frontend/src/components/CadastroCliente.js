import React, { useState } from 'react';

const CadastroCliente = () => {
  const [nome, setNome] = useState('');
  const [nomeSocial, setNomeSocial] = useState('');
  const [CPF, setCPF] = useState('');
  const [RGs, setRGs] = useState('');
  const [telefones, setTelefones] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      nome,
      nomeSocial,
      CPF,
      RGs,
      telefones,
    };

    fetch('http://localhost:5000/cadastrar-cliente', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        // Aqui você pode realizar alguma ação, como exibir uma mensagem de sucesso ao usuário
      })
      .catch((error) => {
        console.error('Erro:', error);
        // Aqui você pode lidar com o erro, exibindo uma mensagem de erro ao usuário, por exemplo
      });

    // Resetar os campos do formulário após o envio
    setNome('');
    setNomeSocial('');
    setCPF('');
    setRGs('');
    setTelefones('');
  };

  return (
    <div>
      <h2>Tela de Cadastro de Cliente</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </label>
        <br />
        <label>
          Nome Social:
          <input
            type="text"
            value={nomeSocial}
            onChange={(e) => setNomeSocial(e.target.value)}
          />
        </label>
        <br />
        <label>
          CPF:
          <input
            type="text"
            value={CPF}
            onChange={(e) => setCPF(e.target.value)}
          />
        </label>
        <br />
        <label>
          RGs:
          <input
            type="text"
            value={RGs}
            onChange={(e) => setRGs(e.target.value)}
          />
        </label>
        <br />
        <label>
          Telefones:
          <input
            type="text"
            value={telefones}
            onChange={(e) => setTelefones(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroCliente;
