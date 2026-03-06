import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import eulogyContent from '../content/eulogy-content.json';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
`;

const HomeContainer = styled.div`
  min-height: calc(100vh - 80px);
  padding: clamp(1rem, 5vw, 4rem);
  max-width: var(--container-max-width);
  margin: 0 auto;
  width: 100%;
`;

const HeroSection = styled.section`
  text-align: center;
  padding: clamp(2rem, 8vw, 6rem) 0;
  animation: ${fadeIn} 1s ease-out;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroTitle = styled.h1`
  font-size: clamp(1.8rem, 6vw, 5rem);
  color: var(--primary-color);
  margin-bottom: clamp(0.5rem, 2vw, 1.5rem);
  font-weight: 200;
  letter-spacing: clamp(1px, 0.5vw, 6px);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.05);
  line-height: 1.1;
  max-width: 90%;
`;

const HeroSubtitle = styled.p`
  font-size: clamp(1rem, 2.5vw, 2rem);
  color: #7f8c8d;
  margin-bottom: clamp(1.5rem, 4vw, 3rem);
  font-style: italic;
  font-weight: 300;
`;

const MainImage = styled.img`
  width: clamp(150px, 30vw, 450px);
  height: clamp(150px, 30vw, 450px);
  border-radius: 50%;
  object-fit: cover;
  border: clamp(4px, 1vw, 12px) solid white;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.25);
  animation: ${float} 6s ease-in-out infinite;
  margin-bottom: clamp(1.5rem, 4vw, 3rem);
`;

const ContentSection = styled.section`
  background: rgba(255, 255, 255, 0.95);
  border-radius: clamp(10px, 3vw, 30px);
  padding: clamp(1.5rem, 6vw, 5rem);
  margin: clamp(1rem, 5vw, 4rem) 0;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(15px);
  animation: ${fadeIn} 1.5s ease-out;
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.8rem, 4vw, 3.5rem);
  color: var(--primary-color);
  margin-bottom: clamp(2rem, 5vw, 4rem);
  text-align: center;
  font-weight: 200;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: clamp(-10px, -2vw, -20px);
    left: 50%;
    transform: translateX(-50%);
    width: clamp(60px, 15vw, 180px);
    height: clamp(2px, 0.4vw, 5px);
    background: linear-gradient(90deg, var(--secondary-color), var(--accent-color));
    border-radius: 3px;
  }
`;

const EulogyText = styled.div`
  font-size: clamp(1rem, 1.4vw, 1.4rem);
  line-height: 1.8;
  color: #34495e;
  text-align: justify;
  white-space: pre-line;
  margin-bottom: 2rem;
  column-count: 2;
  column-gap: clamp(2rem, 5vw, 4rem);
  column-rule: 1px solid rgba(0,0,0,0.05);
  
  @media (max-width: 1024px) {
    column-count: 1;
    text-align: left;
  }
`;

const TributeSection = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: clamp(1.5rem, 6vw, 4rem);
  border-radius: clamp(10px, 3vw, 25px);
  margin-top: clamp(2rem, 5vw, 4rem);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
`;

const TributeTitle = styled.h3`
  font-size: clamp(1.4rem, 3vw, 2.5rem);
  margin-bottom: clamp(1rem, 3vw, 2rem);
  text-align: center;
  font-weight: 300;
`;

const TributeText = styled.div`
  font-size: clamp(1rem, 1.3vw, 1.3rem);
  line-height: 1.8;
  white-space: pre-line;
  text-align: justify;
  font-style: italic;
  
  @media (max-width: 768px) {
    text-align: left;
  }
`;

const Dates = styled.div`
  text-align: center;
  font-size: clamp(0.9rem, 1.5vw, 1.5rem);
  color: #7f8c8d;
  margin-top: clamp(1rem, 3vw, 2rem);
  font-weight: 300;
  letter-spacing: 2px;
`;

function HomePage() {
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    // Set a default main image from the available images
    setMainImage('/src/images/WhatsApp Image 2026-03-04 at 14.20.10.jpeg');
  }, []);

  return (
    <HomeContainer>
      <HeroSection>
        <HeroTitle> CELEBRATING THE LIFE OF</HeroTitle>
        <HeroSubtitle>JOHN 'KUKA' NYIKULI SHIKANGA</HeroSubtitle>
        {mainImage && <MainImage src={mainImage} alt="John Kuka" />}
        <Dates>August 8, 1942 - March 1, 2026</Dates>
      </HeroSection>

      <ContentSection>
        <SectionTitle>Eulogy</SectionTitle>
        <EulogyText>
          {eulogyContent.eulogy}
        </EulogyText>
      </ContentSection>

      <TributeSection>
        <TributeTitle>A Son's Tribute</TributeTitle>
        <TributeText>
          {eulogyContent.tribute}
        </TributeText>
      </TributeSection>
    </HomeContainer>
  );
}

export default HomePage;
