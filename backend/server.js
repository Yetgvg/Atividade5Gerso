// Importando as dependências
const express = require('express');
const mysql = require('mysql');

// Configuração do servidor Express
const app = express();
const cors = require('cors');

// Configuração do CORS
app.use(cors());

app.use(express.json());

const port = 5000;

// Configuração do banco de dados MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'wmitra',
  database: 'Gerso',
});

// Conectando-se ao banco de dados
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Conectado ao banco de dados MySQL');
});

// Definindo rota inicial
app.get('/', (req, res) => {
  res.send('Servidor backend funcionando!');
});

// Rota para cadastrar o cliente
app.post('/cadastrar-cliente', (req, res) => {
  const {
    nome,
    nomeSocial,
    CPF,
    RGs,
    telefones,
  } = req.body;

  // Realize a lógica de inserção no banco de dados usando a conexão 'db'

  // Exemplo de inserção
  const query = `INSERT INTO Cliente (nome, nomeSocial, CPF, RGs, dataCadastro, telefones)
    VALUES (?, ?, ?, ?, CURDATE(), ?)`;

  db.query(
    query,
    [
      nome,
      nomeSocial,
      CPF,
      RGs,
      telefones,
    ],
    (error, results) => {
      if (error) {
        console.error('Erro ao cadastrar cliente:', error);
        res.status(500).json({ message: 'Erro ao cadastrar cliente' });
      } else {
        console.log('Cliente cadastrado com sucesso!');
        res.status(200).json({ message: 'Cliente cadastrado com sucesso' });
      }
    }
  );
});

// Rota para obter os produtos disponíveis
app.get('/produtos', (req, res) => {
  const idCliente = req.params.idCliente;

  // Realize a lógica de consulta no banco de dados usando a conexão 'db'

  // Exemplo de consulta
  const query = 'SELECT * FROM produto';
  db.query(query, (error, results) => {
    if (error) {
      console.error('Erro ao obter produtos:', error);
      res.status(500).json({ message: 'Erro ao obter produtos' });
    } else {
      res.status(200).json({ idCliente, produtos: results });
    }
  });
});

app.get('/servicos', (req, res) => {
  // Realize a lógica de consulta no banco de dados usando a conexão 'db'

  // Exemplo de consulta
  const query = 'SELECT * FROM servico';
  db.query(query, (error, results) => {
    if (error) {
      console.error('Erro ao obter serviços:', error);
      res.status(500).json({ message: 'Erro ao obter serviços' });
    } else {
      res.status(200).json({ servicos: results });
    }
  });
});


// Rota para autenticar o cliente
app.post('/autenticar-cliente', (req, res) => {
  const { CPF } = req.body;

  // Realize a lógica de autenticação no banco de dados usando a conexão 'db'

  // Exemplo de consulta
  const query = 'SELECT id FROM Cliente WHERE CPF = ?';
  db.query(query, [CPF], (error, results) => {
    if (error) {
      console.error('Erro ao autenticar cliente:', error);
      res.status(500).json({ success: false, error: 'Erro ao autenticar cliente' });
    } else {
      if (results.length > 0) {
        const clientId = results[0].id;
        console.log('Cliente autenticado com sucesso!');
        res.status(200).json({ success: true, clientId });
      } else {
        console.log('Cliente não encontrado!');
        res.status(404).json({ success: false, error: 'Cliente não encontrado' });
      }
    }
  });
});

// Rota para adicionar à sacola
app.post('/adicionar-sacola', (req, res) => {
  const { idCliente, idProduto, quantidade } = req.body;

  // Realize a lógica para adicionar o produto à sacola no banco de dados usando a conexão 'db'

  // Exemplo de inserção na tabela Sacola
  const query = `INSERT INTO sacolaprod (idCliente, idProduto, quantidade) VALUES (?, ?, ?)`;
  db.query(query, [idCliente, idProduto, quantidade], (error, results) => {
    if (error) {
      console.error('Erro ao adicionar produto à sacola:', error);
      res.status(500).json({ message: 'Erro ao adicionar produto à sacola' });
    } else {
      console.log('Produto adicionado à sacola com sucesso!');
      res.status(200).json({ message: 'Produto adicionado à sacola com sucesso' });
    }
  });
});

// Rota para adicionar serviço à sacola
app.post('/adicionar-servico-sacola', (req, res) => {
  const { idCliente, idServico } = req.body;

  // Realize a lógica para adicionar o serviço à sacola no banco de dados usando a conexão 'db'

  // Exemplo de inserção na tabela SacolaServ
  const query = `INSERT INTO sacolaserv (idCliente, idServico) VALUES (?, ?)`;
  db.query(query, [idCliente, idServico], (error, results) => {
    if (error) {
      console.error('Erro ao adicionar serviço à sacola:', error);
      res.status(500).json({ message: 'Erro ao adicionar serviço à sacola' });
    } else {
      console.log('Serviço adicionado à sacola com sucesso!');
      res.status(200).json({ message: 'Serviço adicionado à sacola com sucesso' });
    }
  });
});

// Rota para cadastrar um Pet
app.post('/cadastrar-pet', (req, res) => {
  const { nome, tipo, raca, genero, clienteId } = req.body;

  // Realize a lógica de inserção no banco de dados usando a conexão 'db'

  // Exemplo de inserção
  const query = `INSERT INTO Pet (nome, tipo, raca, genero, clienteId) VALUES (?, ?, ?, ?, ?)`;
  db.query(query, [nome, tipo, raca, genero, clienteId], (error, results) => {
    if (error) {
      console.error('Erro ao cadastrar pet:', error);
      res.status(500).json({ message: 'Erro ao cadastrar pet' });
    } else {
      console.log('Pet cadastrado com sucesso!');
      res.status(200).json({ message: 'Pet cadastrado com sucesso' });
    }
  });
});


// Rota para listar os serviços comprados por um cliente
app.get('/listar-servicos/:idCliente', (req, res) => {
  const idCliente = req.params.idCliente;

  // Realize a lógica de consulta no banco de dados usando a conexão 'db'

  // Exemplo de consulta
  const query = `
    SELECT s.nome
    FROM sacolaserv ss
    JOIN servico s ON ss.idServico = s.id
    WHERE ss.idCliente = ?;
  `;
  
  db.query(query, [idCliente], (error, results) => {
    if (error) {
      console.error('Erro ao obter serviços comprados:', error);
      res.status(500).json({ message: 'Erro ao obter serviços comprados' });
    } else {
      res.status(200).json({ servicosComprados: results });
    }
  });
});

// Rota para listar os produtos na sacola de um cliente
app.get('/listar-produtos/:idCliente', (req, res) => {
  const idCliente = req.params.idCliente;

  // Realize a lógica de consulta no banco de dados usando a conexão 'db'

  // Exemplo de consulta
  const query = `SELECT p.nome,sp.quantidade FROM produto AS p
    INNER JOIN sacolaprod AS sp ON p.id = sp.idProduto
    WHERE sp.idCliente = ?`;

  db.query(query, [idCliente], (error, results) => {
    if (error) {
      console.error('Erro ao obter os produtos na sacola:', error);
      res.status(500).json({ message: 'Erro ao obter os produtos na sacola' });
    } else {
      res.status(200).json({ produtosNaSacola: results });
    }
  });
});

// Rota para listar os Pets de um cliente
app.get('/listar-pets/:idCliente', (req, res) => {
  const idCliente = req.params.idCliente;

  // Realize a lógica de consulta no banco de dados usando a conexão 'db'

  // Exemplo de consulta
  const query = `SELECT * FROM Pet WHERE clienteId = ?`;
  db.query(query, [idCliente], (error, results) => {
    if (error) {
      console.error('Erro ao listar os pets:', error);
      res.status(500).json({ message: 'Erro ao listar os pets' });
    } else {
      console.log('Pets listados com sucesso!');
      res.status(200).json({ pets: results });
    }
  });
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor backend iniciado na porta ${port}`);
});
