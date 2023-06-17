import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import yasuoLogo from '../images/Yasuo.webp';

const Navbar = () => {
  const [showServicosMenu, setShowServicosMenu] = useState(false);
  const [showProdutosMenu, setShowProdutosMenu] = useState(false);
  const [showPetsMenu, setShowPetsMenu] = useState(false);

  const toggleServicosMenu = () => {
    setShowServicosMenu(!showServicosMenu);
  };

  const toggleProdutosMenu = () => {
    setShowProdutosMenu(!showProdutosMenu);
  };

  const togglePetsMenu = () => {
    setShowPetsMenu(!showPetsMenu);
  };

  const handleSubmenuClick = (event) => {
    event.stopPropagation();
    // Fecha o submenu ao clicar em um item
    setShowServicosMenu(false);
    setShowProdutosMenu(false);
    setShowPetsMenu(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={yasuoLogo} alt="Yasuo Logo" className="navbar-logo-image" />
          Sair
        </Link>
        <ul className="nav-menu">
          <li
            className="nav-item"
            onMouseEnter={toggleServicosMenu}
            onMouseLeave={toggleServicosMenu}
            onClick={handleSubmenuClick}
          >
            <div className="nav-links">Serviços</div>
            {showServicosMenu && (
              <ul className="submenu">
                <li>
                  <Link to="/comprar-servico" className="submenu-link" onClick={handleSubmenuClick}>
                    Comprar
                  </Link>
                </li>
                <li>
                  <Link to="/listar-servicos" className="submenu-link" onClick={handleSubmenuClick}>
                    Listar
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className="nav-item"
            onMouseEnter={toggleProdutosMenu}
            onMouseLeave={toggleProdutosMenu}
            onClick={handleSubmenuClick}
          >
            <div className="nav-links">Produtos</div>
            {showProdutosMenu && (
              <ul className="submenu">
                <li>
                  <Link to="/comprar-produto" className="submenu-link" onClick={handleSubmenuClick}>
                    Comprar
                  </Link>
                </li>
                <li>
                  <Link to="/listar-produtos" className="submenu-link" onClick={handleSubmenuClick}>
                    Listar
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className="nav-item"
            onMouseEnter={togglePetsMenu}
            onMouseLeave={togglePetsMenu}
            onClick={handleSubmenuClick}
          >
            <div className="nav-links">Pets</div>
            {showPetsMenu && (
              <ul className="submenu">
                <li>
                  <Link to="/cadastrar-pet" className="submenu-link" onClick={handleSubmenuClick}>
                    Cadastrar
                  </Link>
                </li>
                <li>
                  <Link to="/listar-pets" className="submenu-link" onClick={handleSubmenuClick}>
                    Listar
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
