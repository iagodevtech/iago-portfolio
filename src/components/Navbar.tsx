import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Detectar scroll para mudar estilo do navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fechar menu mobile quando a rota mudar
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Toggle menu mobile
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Fechar menu mobile ao clicar em um link
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Scroll suave para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Função para navegar para home e ir para o topo
  const handleHomeClick = () => {
    closeMobileMenu();
    if (location.pathname === '/') {
      scrollToTop();
    }
  };

  // Verificar se o link está ativo
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="nav-logo">
          <Link to="/" onClick={handleHomeClick}>
            <span className="logo-text">Iago</span>
            <span className="logo-text-secondary">Dev</span>
          </Link>
        </div>

        {/* Menu Desktop - Centralizado */}
        <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <Link
              to="/"
              className={`navbar-link ${isActive('/') ? 'active' : ''}`}
              onClick={handleHomeClick}
            >
              <span className="nav-icon">🏠</span>
              INÍCIO
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to="/sobre"
              className={`navbar-link ${isActive('/sobre') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              <span className="nav-icon">👤</span>
              SOBRE
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to="/projetos"
              className={`navbar-link ${isActive('/projetos') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              <span className="nav-icon">💻</span>
              PROJETOS
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to="/contato"
              className={`navbar-link ${isActive('/contato') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              <span className="nav-icon">✉️</span>
              CONTATO
            </Link>
          </li>
        </ul>

        {/* Botão Menu Mobile */}
        <div className="navbar-controls">
          <button
            className="mobile-menu-button"
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
