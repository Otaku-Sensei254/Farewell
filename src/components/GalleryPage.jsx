import React, { useState, useEffect } from 'react';
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

const float = keyframes`
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  25% {
    transform: translateY(-10px) rotate(1deg);
  }
  50% {
    transform: translateY(-20px) rotate(0deg);
  }
  75% {
    transform: translateY(-10px) rotate(-1deg);
  }
`;

const GalleryContainer = styled.div`
  min-height: calc(100vh - 80px);
  padding: clamp(1rem, 5vw, 4rem);
  max-width: var(--container-max-width);
  margin: 0 auto;
  width: 100%;
`;

const GalleryHeader = styled.div`
  text-align: center;
  margin-bottom: clamp(2rem, 6vw, 5rem);
  animation: ${fadeIn} 1s ease-out;
`;

const GalleryTitle = styled.h1`
  font-size: clamp(2rem, 5vw, 4.5rem);
  color: var(--primary-color);
  margin-bottom: clamp(0.5rem, 2vw, 1.5rem);
  font-weight: 200;
  letter-spacing: clamp(1px, 0.5vw, 4px);
`;

const GallerySubtitle = styled.p`
  font-size: clamp(1rem, 1.8vw, 1.8rem);
  color: #7f8c8d;
  font-style: italic;
  font-weight: 300;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(clamp(250px, 20vw, 400px), 1fr));
  gap: clamp(1.5rem, 4vw, 4rem);
  padding: 1rem 0;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FloatingImage = styled.div`
  position: relative;
  border-radius: clamp(10px, 2vw, 20px);
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  animation: ${float} ${props => props.duration}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  background: white;
  padding: clamp(6px, 1.5vw, 12px);
  cursor: pointer;
  
  &:hover {
    transform: scale(1.03) translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
    z-index: 10;
  }
  
  @media (hover: none) {
    animation: none;
    &:hover {
      transform: none;
    }
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: clamp(200px, 25vw, 400px);
  object-fit: cover;
  object-position: center 30%;
  border-radius: clamp(6px, 1.5vw, 12px);
  display: block;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
  }
`;

const ImageCaption = styled.div`
  padding: clamp(0.8rem, 1.5vw, 1.5rem);
  text-align: center;
  color: #34495e;
  font-size: clamp(0.8rem, 1.1vw, 1.1rem);
  font-style: italic;
  font-weight: 500;
`;

const Modal = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isOpen'
})`
  display: ${props => props.isOpen ? 'flex' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.95);
  z-index: 2000;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: clamp(1rem, 5vw, 4rem);
  backdrop-filter: blur(5px);
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease;
`;

const CloseButton = styled.div`
  position: absolute;
  top: clamp(10px, 4vw, 30px);
  right: clamp(15px, 5vw, 50px);
  color: white;
  font-size: clamp(2rem, 5vw, 3.5rem);
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 2001;
  
  &:hover {
    transform: scale(1.2);
    color: var(--secondary-color);
  }
`;

function GalleryPage() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    // List of all available images
    const imageList = [
      'WhatsApp Image 2026-03-04 at 12.58.25.jpeg',
      'WhatsApp Image 2026-03-04 at 12.58.42.jpeg',
      'WhatsApp Image 2026-03-04 at 14.19.55.jpeg',
      'WhatsApp Image 2026-03-04 at 14.20.10 (1).jpeg',
      'WhatsApp Image 2026-03-04 at 14.20.10.jpeg',
      'WhatsApp Image 2026-03-04 at 14.20.11 (1).jpeg',
      'WhatsApp Image 2026-03-04 at 14.20.11.jpeg',
      'WhatsApp Image 2026-03-04 at 14.20.12 (1).jpeg',
      'WhatsApp Image 2026-03-04 at 14.20.12 (2).jpeg',
      'WhatsApp Image 2026-03-04 at 14.20.12 (3).jpeg',
      'WhatsApp Image 2026-03-04 at 14.20.12.jpeg',
      'WhatsApp Image 2026-03-04 at 14.20.13 (1).jpeg',
      'WhatsApp Image 2026-03-04 at 14.20.13.jpeg',
      'WhatsApp Image 2026-03-04 at 23.36.57 (1).jpeg',
      'WhatsApp Image 2026-03-04 at 23.36.57.jpeg',
      'WhatsApp Image 2026-03-04 at 23.36.59 (1).jpeg',
      'WhatsApp Image 2026-03-04 at 23.36.59 (2).jpeg',
      'WhatsApp Image 2026-03-04 at 23.36.59.jpeg',
      'WhatsApp Image 2026-03-04 at 23.37.00.jpeg',
      'WhatsApp Image 2026-03-04 at 23.37.06.jpeg',
      'WhatsApp Image 2026-03-05 at 08.25.10.jpeg',
      'WhatsApp Image 2026-03-05 at 08.25.23 (1).jpeg',
      'WhatsApp Image 2026-03-05 at 08.25.23.jpeg',
      'WhatsApp Image 2026-03-05 at 08.25.24 (1).jpeg',
      'WhatsApp Image 2026-03-05 at 08.25.24 (2).jpeg',
      'WhatsApp Image 2026-03-05 at 08.25.24.jpeg',
      'WhatsApp Image 2026-03-05 at 08.25.25 (1).jpeg',
      'WhatsApp Image 2026-03-05 at 08.25.25 (2).jpeg',
      'WhatsApp Image 2026-03-05 at 08.25.25.jpeg',
      'WhatsApp Image 2026-03-05 at 08.25.29.jpeg',
      'WhatsApp Image 2026-03-05 at 08.25.57 (1).jpeg',
      'WhatsApp Image 2026-03-05 at 08.25.57.jpeg',
    ];

    setImages(imageList.map((img, index) => {
      // Specific captions for each image based on provided information
      const captions = [
        "Family collage",
        "John with His Father",
        "John ",
        "With second wife",
        "In Ngata",
        "Grandson",
        "John",
        "During Son's baptism",
        " With Friends",
        "John",
        "Family Time",
        "With family",
        "Random pic",
        "Family",
        "John with workmates",
        "Young John",
        "With Hellen",
        "In the Kh",
        "John ",
        "John getting baptised as a witness",
        "John with Grandchildren",
        "Family Time",
        "John ",
        "John's Memory",
        "John's Family",
        "John's Memoroy4",
        "John with second wife and family",
        "John with Hellen and Son",
        "John Memory",
        "Memory 8 ",
      ];
      
      return {
        src: `/images/${img}`,
        caption: captions[index] || `John's Memorial ${index + 1}`,
        id: index
      };
    }));
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <GalleryContainer>
      <GalleryHeader>
        <GalleryTitle>Gallery of Memories</GalleryTitle>
        <GallerySubtitle>Celebrating the life and moments of John 'Kuka' Nyikuli Shikanga</GallerySubtitle>
      </GalleryHeader>

      <ImageGrid>
        {images.map((image, index) => (
          <FloatingImage
            key={image.id}
            duration={4 + (index % 3) * 2}
            delay={index * 0.2}
            onClick={() => openModal(image)}
          >
            <GalleryImage src={image.src} alt={image.caption} />
            <ImageCaption>{image.caption}</ImageCaption>
          </FloatingImage>
        ))}
      </ImageGrid>

      <Modal isOpen={modalOpen} onClick={closeModal}>
        <CloseButton onClick={closeModal}>&times;</CloseButton>
        {selectedImage && (
          <ModalImage src={selectedImage.src} alt={selectedImage.caption} />
        )}
      </Modal>
    </GalleryContainer>
  );
}

export default GalleryPage;
