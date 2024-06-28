// src/Pages/Home.js
import React from 'react';
import styled from 'styled-components';
import logo from '../Assets/logo.png';

const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
`;

const Logo = styled.img`
  height: 100px;
  margin-bottom: 20px;
`;

const Home = () => {
  return (
    <HomeContainer>
      <div>
        <Logo src={logo} alt="My Service Pal Logo" />
        <h1>Welcome to My Service Pal</h1>
        <p>Discover and book the best services in town.</p>
      </div>
    </HomeContainer>
  );
};

export default Home;

