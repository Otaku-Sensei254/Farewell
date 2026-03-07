import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

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

const TributesContainer = styled.div`
  min-height: calc(100vh - 80px);
  padding: clamp(1rem, 5vw, 4rem);
  max-width: var(--container-max-width);
  margin: 0 auto;
  width: 100%;
`;

const TributesHeader = styled.div`
  text-align: center;
  margin-bottom: clamp(2rem, 6vw, 5rem);
  animation: ${fadeIn} 1s ease-out;
`;

const TributesTitle = styled.h1`
  font-size: clamp(2rem, 5vw, 4.5rem);
  color: var(--primary-color);
  margin-bottom: clamp(0.5rem, 2vw, 1.5rem);
  font-weight: 200;
  letter-spacing: clamp(1px, 0.5vw, 6px);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.05);
  line-height: 1.1;
  max-width: 90%;
`;

const TributesSubtitle = styled.p`
  font-size: clamp(1rem, 2.5vw, 2rem);
  color: #7f8c8d;
  margin-bottom: clamp(1.5rem, 4vw, 3rem);
  font-style: italic;
  font-weight: 300;
`;

const TributesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: clamp(2rem, 5vw, 4rem);
  padding: 2rem 0;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 1rem 0;
  }
`;

const TributeCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: clamp(15px, 3vw, 25px);
  padding: clamp(2rem, 5vw, 3rem);
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(15px);
  animation: ${fadeIn} 1.5s ease-out;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  }
`;

const TributeAuthor = styled.h3`
  font-size: clamp(1.4rem, 3vw, 2.5rem);
  color: var(--primary-color);
  margin-bottom: clamp(1rem, 3vw, 2rem);
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

const TributeContent = styled.div`
  font-size: clamp(1rem, 1.4vw, 1.4rem);
  line-height: 1.8;
  color: #34495e;
  text-align: justify;
  white-space: pre-line;
  font-style: italic;
  
  @media (max-width: 768px) {
    text-align: left;
  }
`;

const TributeRelation = styled.div`
  text-align: center;
  font-size: clamp(0.9rem, 1.5vw, 1.5rem);
  color: #7f8c8d;
  margin-top: clamp(1rem, 3vw, 2rem);
  font-weight: 300;
  letter-spacing: 2px;
`;

const AddTributeButton = styled.button`
  background: linear-gradient(135deg, var(--secondary-color), var(--accent-color));
  color: white;
  border: none;
  padding: clamp(1rem, 3vw, 2rem) clamp(2rem, 5vw, 3rem);
  border-radius: clamp(10px, 2vw, 25px);
  font-size: clamp(1rem, 1.5vw, 1.3rem);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 3rem auto;
  display: block;
  max-width: 300px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
`;

function TributesPage() {
  const [tributes, setTributes] = useState([
    {
      id: 1,
      author: "HELEN MULAGOLI",
      relation: "First Wife",
      content: `My dear husband John 'Kuka',

You were the rock of our family and the love of my life. Your dedication to our son Willingstone and your unwavering faith in Jehovah were the foundation of our home. I remember the early days in Nairobi when you worked as a Van Salesman, always coming home with stories that made us laugh.

Your patience and wisdom guided us through every challenge. When you joined Jehovah's Witnesses in 1967, I saw a new light in your eyes - a purpose that gave you strength. You served faithfully as an Elder, touching so many lives with your Bible teachings.

Though you are no longer with us physically, your love continues to guide us. Thank you for being the best husband and father anyone could ask for. Your legacy lives on through our son and the generations to come.

Until we meet again in paradise, your loving wife,
Helen`
    },
    {
      id: 2,
      author: "MARGARET ALOYA LUNANI",
      relation: "Daughter-in-law",
      content: `Dear Father Kuka,

You welcomed me into your family with open arms and treated me as your own daughter. I am forever grateful for the wisdom you shared and the example you set. Your stories of serving Jehovah across the West region of Kenya inspired us all.

Watching you with our children Samuel and Hellen showed us what true grandfatherly love looks like. You had patience, kindness, and time for every question they asked. Your mastery of Bible teachings made complex truths simple to understand.

Thank you for showing us how to live a life of faith and service. Your legacy of generosity and love will continue through our family. We miss you deeply but find comfort in knowing you are in Jehovah's memory.

With love and respect,
Margaret`
    },
    {
      id: 3,
      author: "SAMUEL NYIKULI LUNANI",
      relation: "Grandson",
      content: `My dear Grandfather Kuka,

You were my hero and my best friend. I will always remember your smile and the way you made time for me no matter how busy you were. Your stories about serving Jehovah and your work at Cadbury Schweppes and BRITAM were my favorite.

You taught me more than just Bible truths - you taught me how to be a man of integrity, how to work hard, and how to love Jehovah with all my heart. Your patience when I asked endless questions showed your true character.

Thank you for being the best grandfather anyone could have. Your faith inspires me to continue serving Jehovah faithfully. I promise to make you proud and honor your legacy.

I love you and miss you every day,
Your grandson Samuel`
    }
  ]);

  return (
    <TributesContainer>
      <TributesHeader>
        <TributesTitle>Family Tributes</TributesTitle>
        <TributesSubtitle>Heartfelt memories and loving words from those who knew John 'Kuka' best</TributesSubtitle>
      </TributesHeader>

      <TributesGrid>
        {tributes.map((tribute) => (
          <TributeCard key={tribute.id}>
            <TributeAuthor>{tribute.author}</TributeAuthor>
            <TributeContent>{tribute.content}</TributeContent>
            <TributeRelation>{tribute.relation}</TributeRelation>
          </TributeCard>
        ))}
      </TributesGrid>

      <AddTributeButton>
        Add Your Tribute
      </AddTributeButton>
    </TributesContainer>
  );
}

export default TributesPage;
