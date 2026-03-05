import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 1.5rem clamp(1rem, 5vw, 4rem);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;
`;

const NavContent = styled.div`
  max-width: 1800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
  }
`;

const Logo = styled.h1`
  font-size: clamp(1.2rem, 2.5vw, 2.2rem);
  color: var(--primary-color);
  font-weight: 200;
  letter-spacing: clamp(1px, 0.5vw, 4px);
  white-space: nowrap;
`;

const NavLinks = styled.div`
  display: flex;
  gap: clamp(1.5rem, 4vw, 4rem);
  align-items: center;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #34495e;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  font-size: clamp(0.9rem, 1.2vw, 1.3rem);
  white-space: nowrap;
  
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
  return (
    <NavContainer>
      <NavContent>
        <Logo>JOHN KUKA</Logo>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
        </NavLinks>
      </NavContent>
    </NavContainer>
  );
}

export default Navigation;
