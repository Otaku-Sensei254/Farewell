import React from 'react';
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

const ProgramContainer = styled.div`
  min-height: calc(100vh - 80px);
  padding: clamp(1rem, 5vw, 4rem);
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
`;

const ProgramHeader = styled.div`
  text-align: center;
  margin-bottom: clamp(2rem, 6vw, 4rem);
  animation: ${fadeIn} 1s ease-out;
`;

const ProgramTitle = styled.h1`
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: var(--primary-color);
  margin-bottom: 1rem;
  font-weight: 200;
  letter-spacing: 2px;
`;

const ProgramSubtitle = styled.p`
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  color: #7f8c8d;
  font-style: italic;
`;

const ProgramCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: clamp(1.5rem, 5vw, 3rem);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  animation: ${fadeIn} 1.2s ease-out;
  border-left: 5px solid var(--secondary-color);
`;

const ProgramItem = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const Label = styled.span`
  font-weight: 600;
  color: var(--primary-color);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Value = styled.div`
  font-size: 1.2rem;
  color: #34495e;
  line-height: 1.6;
`;

const HighlightValue = styled(Value)`
  color: var(--secondary-color);
  font-weight: 500;
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background: rgba(0,0,0,0.05);
  margin: 1.5rem 0;
`;

function ProgramPage() {
  return (
    <ProgramContainer>
      <ProgramHeader>
        <ProgramTitle>Programu ya Mazishi</ProgramTitle>
        <ProgramSubtitle>Ndugu John Nyikuli Shikanga</ProgramSubtitle>
      </ProgramHeader>

      <ProgramCard>
        <ProgramItem>
          <Label>Tarehe ya kuzaliwa</Label>
          <Value>8th August 1942</Value>
        </ProgramItem>

        <ProgramItem>
          <Label>Tarehe alipokufa</Label>
          <Value>1st March 2026</Value>
        </ProgramItem>

        <Divider />

        <ProgramItem>
          <Label>Mwenyekiti</Label>
          <Value>Laban Wanjira</Value>
        </ProgramItem>

        <ProgramItem>
          <Label>Wimbo na Sala</Label>
          <Value>Wimbo 156 na Sala</Value>
        </ProgramItem>

        <ProgramItem>
          <Label>Historia ya Marehemu</Label>
          <Value>(Ndugu Lunani atachagua mtu wa kusoma)</Value>
        </ProgramItem>

        <ProgramItem>
          <Label>Hotuba ya Maziko</Label>
          <HighlightValue>Timothy Nagweya</HighlightValue>
        </ProgramItem>

        <ProgramItem>
          <Label>Maelezo kutoka kwa Familia</Label>
          <Value>Ndugu Lunani au Dada Monicah</Value>
        </ProgramItem>

        <ProgramItem>
          <Label>Wimbo</Label>
          <Value>Wimbo 151</Value>
        </ProgramItem>

        <Divider />

        <ProgramItem style={{ textAlign: 'center', marginTop: '1rem' }}>
          <HighlightValue style={{ fontStyle: 'italic' }}>[Kuelekea kaburini]</HighlightValue>
        </ProgramItem>

        <ProgramItem>
          <Label>Sala ya Mwisho</Label>
          <Value>Nelson Muhetsi</Value>
        </ProgramItem>
      </ProgramCard>
    </ProgramContainer>
  );
}

export default ProgramPage;
