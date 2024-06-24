// src/Components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../Assets/logo.png'; // Ensure this path is correct

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-size: 1em;
  margin: 0 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const Logo = styled.img`
  height: 40px;
`;

const Navbar = () => {
  return (
    <Nav>
      <Link to="/">
        <Logo src={logo} alt="My Service Pal Logo" />
      </Link>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Signup</NavLink>
      </div>
    </Nav>
  );
};

export default Navbar;
