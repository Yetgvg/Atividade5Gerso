import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import gifImage from '../images/Yasuo.gif';

const Login = () => {
  const [cpf, setCPF] = useState('');

  const handleLogin = () => {
    // Realize a verificação do CPF no backend e autentique o cliente
    // Você pode usar o mesmo padrão que usamos para o cadastro do cliente

    // Exemplo de código para autenticação no backend
    const data = { CPF: cpf };

    fetch('http://localhost:5000/autenticar-cliente', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        // Verifique o resultado da autenticação e realize as ações adequadas
        if (result.success) {
          // Armazene o idCliente no localStorage
          localStorage.setItem('idCliente', result.clientId);

          // Redirecione o usuário para a página desejada
          window.location.href = '/home';
        } else {
          // Exiba uma mensagem de erro ao usuário
          console.error('Erro de autenticação:', result.error);
        }
      })
      .catch((error) => {
        console.error('Erro:', error);
        // Lide com o erro de autenticação, exibindo uma mensagem de erro ao usuário, por exemplo
      });

    // Limpe o campo de CPF após o login
    setCPF('');
  };

  return (
    <div className="container">
      <h2>Cuide do seu Yasuo</h2>
      <div className="buttons-container">
        <button className="register-button">
          <Link to="/cadastro">Cadastrar Cliente</Link>
        </button>
        <button className="register-button">
          <Link to="/admin">ADM</Link>
        </button>
      </div>
      <div className="form-container">
        <label>
          CPF:
          <input
            type="text"
            value={cpf}
            onChange={(e) => setCPF(e.target.value)}
            className="input-field"
          />
        </label>
        <br />
        <button onClick={handleLogin} className="login-button">Logar</button>
      </div>
      <div className="gif-container">
        <img src={gifImage} alt="GIF" className="gif" />
      </div>
    </div>
  );
};

export default Login;
