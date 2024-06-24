// src/Pages/Home.js
import React from 'react';
import styled from 'styled-components';
import background from '../Assets/background.png';
import logo from '../Assets/logo.png';

const HomeContainer = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const BackgroundBlur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(10px);
  z-index: 1;
`;

const HomeContent = styled.div`
  position: relative;
  z-index: 2;
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
      <BackgroundBlur />
      <HomeContent>
        <Logo src={logo} alt="My Service Pal Logo" />
        <h1>Welcome to My Service Pal</h1>
        <p>Discover and book the best services in town.</p>
      </HomeContent>
    </HomeContainer>
  );
};

export default Home;
