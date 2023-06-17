create database Gerso;
use Gerso;

CREATE TABLE Cliente (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    nomeSocial VARCHAR(100),
    CPF VARCHAR(11) UNIQUE,
    RGs VARCHAR(255),
    dataCadastro DATE,
    telefones VARCHAR(255)
);

create table Pet (
	id int auto_increment primary key,
    nome varchar(100) not null,
    tipo varchar(100),
    raca varchar(100),
    genero varchar(100),
    clienteId int,
    foreign key (clienteId) references cliente(id)
);

create table produto (
	id int auto_increment primary key,
	nome varchar(100) not null
);

create table servico (
	id int auto_increment primary key,
	nome varchar(100) not null
);

CREATE TABLE SacolaProd (
  id INT AUTO_INCREMENT PRIMARY KEY,
  idCliente INT,
  idProduto INT,
  quantidade INT,
  FOREIGN KEY (idCliente) REFERENCES Cliente(id),
  FOREIGN KEY (idProduto) REFERENCES produto(id)
);

CREATE TABLE SacolaServ (
  id INT AUTO_INCREMENT PRIMARY KEY,
  idCliente INT,
  idServico INT,
  FOREIGN KEY (idCliente) REFERENCES Cliente(id),
  FOREIGN KEY (idServico) REFERENCES servico(id)
);

INSERT INTO produto (nome) VALUES ('Ração para cães');
INSERT INTO produto (nome) VALUES ('Ração para gatos');
INSERT INTO produto (nome) VALUES ('Shampoo para cachorros');
INSERT INTO produto (nome) VALUES ('Shampoo para gatos');
INSERT INTO produto (nome) VALUES ('Brinquedo para cães');
INSERT INTO produto (nome) VALUES ('Brinquedo para gatos');
INSERT INTO produto (nome) VALUES ('Coleira para cães');
INSERT INTO produto (nome) VALUES ('Coleira para gatos');
INSERT INTO produto (nome) VALUES ('Cama para cachorros');
INSERT INTO produto (nome) VALUES ('Cama para gatos');

INSERT INTO servico (nome) VALUES ('Banho e Tosa');
INSERT INTO servico (nome) VALUES ('Corte de Unhas');
INSERT INTO servico (nome) VALUES ('Limpeza de Ouvidos');
INSERT INTO servico (nome) VALUES ('Consulta Veterinária');
INSERT INTO servico (nome) VALUES ('Vacinação');
INSERT INTO servico (nome) VALUES ('Hospedagem');
INSERT INTO servico (nome) VALUES ('Creche para Pets');
INSERT INTO servico (nome) VALUES ('Passeio com Cães');
INSERT INTO servico (nome) VALUES ('Tratamento de Pele');
INSERT INTO servico (nome) VALUES ('Odontologia para Pets');

