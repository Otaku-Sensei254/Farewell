import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: clamp(1rem, 3vw, 1.5rem);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const NavContent = styled.div`
  max-width: var(--container-max-width);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 clamp(1rem, 3vw, 2rem);
`;

const Logo = styled.h1`
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  color: var(--primary-color);
  font-weight: 200;
  letter-spacing: clamp(1px, 0.5vw, 3px);
  white-space: nowrap;
`;

const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: clamp(1.5rem, 4vw, 2rem);
  color: var(--primary-color);
  cursor: pointer;
  padding: 0.5rem;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: clamp(1.5rem, 3vw, 3rem);
  align-items: center;
  
  @media (max-width: 768px) {
    ${props => props.isOpen ? `
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: rgba(255, 255, 255, 0.98);
      backdrop-filter: blur(10px);
      padding: 2rem;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
      gap: 1rem;
    ` : `
      display: none;
    `}
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: var(--primary-color);
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  padding: 0.5rem 0;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 0.8rem 0;
  }
  
  &:hover {
    color: var(--secondary-color);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 0;
    height: 3px;
    background: var(--secondary-color);
    transition: width 0.3s ease;
    border-radius: 2px;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <NavContainer>
      <NavContent>
        <Logo>JOHN KUKA</Logo>
        
        <Hamburger onClick={toggleMenu}>
          ☰
        </Hamburger>
        
        <NavLinks isOpen={isMenuOpen}>
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/gallery" onClick={closeMenu}>Gallery</NavLink>
          <NavLink to="/tributes" onClick={closeMenu}>Tributes</NavLink>
          <NavLink to="/song" onClick={closeMenu}>Song</NavLink>
        </NavLinks>
      </NavContent>
    </NavContainer>
  );
}

export default Navigation;
