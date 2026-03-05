import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import HomePage from './components/HomePage';
import GalleryPage from './components/GalleryPage';
import Navigation from './components/Navigation';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --accent-color: #9b59b6;
    --text-color: #333;
    --bg-gradient: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    --container-max-width: 1800px;
    --section-padding: clamp(2rem, 5vw, 6rem);
  }
  
  body {
    font-family: 'Georgia', 'Times New Roman', serif;
    line-height: 1.6;
    color: var(--text-color);
    background: var(--bg-gradient);
    min-height: 100vh;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
    scroll-behavior: smooth;
    font-size: 16px;
    
    @media (min-width: 1920px) {
      font-size: 18px;
    }
    
    @media (max-width: 1200px) {
      font-size: 15px;
    }
    
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <AppContainer>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;
