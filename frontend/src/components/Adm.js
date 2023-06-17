import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
    return (
        <div className='container'>
            <div className="admin-container">
                <h2>Painel do Administrador</h2>
                <div className="admin-links">
                    <p><Link className="register-button" to="/cadastro-produto">Cadastrar Produto</Link></p><br/>
                    <p><Link className="register-button" to="/cadastro-servico">Cadastrar Serviço</Link></p><br/>
                    <p><Link className="register-button" to="/atualizar-produto">Atualizar Produto</Link></p><br/>
                    <p><Link className="register-button" to="/atualizar-servico">Atualizar Serviço</Link></p>
                </div>
            </div>
            <button className="register-button"><Link to="/" className="back-button">Voltar</Link></button>
        </div>
    );
};

export default Admin;
