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
      author: "WILLINGSTONE NYIKULI LUNANI",
      relation: "Son",
      content: `I am humbled on this day when paying tribute to my late Father and Brother Mzee John Nyikuli Shikanga. In my heart I refer to him as ‘John Best’ Why? Because he endeavored to give me the best things in life:

He ensured that he got the best formal education in prestigious Nursery, Primary, Secondary and College Institutions available.

The best gift ‘John Best’ gave me was Christian Education in Jehovah’s organization. He patiently waited for me to dedicate my life to Jehovah and get baptized and travelled to Nairobi to Witness it. On paper I was born alone however in reality I find myself surrounded by many genuine brothers and sisters - corner to corner, world over courtesy of him.

He inculcated in me a spirit of fairness, reasonableness and perseverance when times are hard for which you can see and I say thank you.

As we lay him to rest today, I boldly take over the mantle from him so as to ensure that his dreams and wishes for the family are upheld. My sincere acknowledgements to Mama Monica for taking care of ‘John Best’ in his last 10yrs of life. 

Special thanks to our brothers and sisters at Butali and the surrounding Congregations. May Jehovah bless the good work of your hands – Asante sana!

‘’ Kusudi la Yehova Litatimizwa” Isa 46; 11 | Yoh 11:25`
    },
    {
      id: 2,
      author: "HELLEN AYUMA LUNANI",
      relation: "Granddaughter",
      content: `I have been blessed to enjoy almost 3 decades of being Kuka’s granddaughter. Kuka was a very present grandfather. He taught me so much and was very supportive in various aspects of my life. One of the fondest memories I shall cherish of Kuka was when he would punctually pick us up from school and take us home. Together with my grandmother they would ensure our holidays began in the very best way possible. Every day at exactly 6am he would wake us up to read the daily text and pray with and for us.

My grandfather set the standard for so many things in my life including my spirituality, education and day-to-day skills. I will really miss Kuka. I will most especially miss hearing his voice anytime I’d call and he would answer the phone by saying “ello my dear/koko/kuka”.

We thank Jehovah for the promise of a wonderful future where we will get the chance of welcoming our loved ones whom we have lost in death (Isaiah 26:19) for then I will get the chance to welcome Kuka with the cake flavor that he really loved.`
    },
    {
      id: 3,
      author: "MARGARET LUNANI",
      relation: "Daughter-in-law",
      content: `I have had the privilege of knowing Kuka for the last fifty years. Thirty of these as his daughter-in-law. While growing up in my homestead, we referred to him as ‘Papa Nyikuli’, a reference that is still used to date. He merited that honor because he was my dad’s Bible teacher.

I will miss him dearly because of the way he embraced me when I joined his family. He became my friend and confidant. He ensured that he practiced Bible principles by refusing to submit to customs that degrade daughters-in-law. I had a very good relationship with him. Together with my mother-in-law, they loved my children and actively participated in nurturing them. I will forever be grateful to them.

I will miss the way he loved my cooking, especially chapatis, chicken, fish and cakes. It always gave me a lot of satisfaction and pleasure to watch him enjoying my cakes. I ominously noticed that something was amiss when he did not find the usual pleasure in the chocolate cake that I last baked for him.

Jehovah’s promise of the near future when we shall receive our dead loved ones strengthens our hope of having great times together again with him (Hosea 13 :14).`
    },
    {
      id: 4,
      author: "SAMUEL LUNANI",
      relation: "Grandson",
      content: `Kuka was a man of many firsts in my life. It is through him I have learnt a lot. He taught me the art of slaughter amongst other skills. He was the one who took me to my circumcision when he lured me using a packet of biscuits in 2001.

All in all he was a teacher, a mentor and a guide in my spiritual life. That is one gap, ‘man of Israel ‘ ,as he called me when whenever met that would be hard to fill.

No matter the pain of losing kuka, I hope to see my grandfather in the new world where we will enjoy to see you back stronger healthier and all smiles (Isa 65:20).`
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
