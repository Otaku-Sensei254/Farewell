import React, { useState, useRef, useEffect } from 'react';
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

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

const SongContainer = styled.div`
  min-height: calc(100vh - 80px);
  padding: clamp(1rem, 5vw, 4rem);
  max-width: var(--container-max-width);
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SongHeader = styled.div`
  text-align: center;
  margin-bottom: clamp(2rem, 6vw, 5rem);
  animation: ${fadeIn} 1s ease-out;
`;

const SongTitle = styled.h1`
  font-size: clamp(2rem, 5vw, 4.5rem);
  color: var(--primary-color);
  margin-bottom: clamp(0.5rem, 2vw, 1.5rem);
  font-weight: 200;
  letter-spacing: clamp(1px, 0.5vw, 6px);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.05);
  line-height: 1.1;
`;

const SongSubtitle = styled.p`
  font-size: clamp(1rem, 2.5vw, 2rem);
  color: #7f8c8d;
  margin-bottom: clamp(1.5rem, 4vw, 3rem);
  font-style: italic;
  font-weight: 300;
`;

const SongSelector = styled.div`
  display: flex;
  gap: clamp(1rem, 3vw, 2rem);
  margin-bottom: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const SongButton = styled.button`
  background: ${props => props.active ? 'linear-gradient(135deg, var(--secondary-color), var(--accent-color))' : 'rgba(255, 255, 255, 0.9)'};
  color: ${props => props.active ? 'white' : 'var(--primary-color)'};
  border: 2px solid var(--secondary-color);
  padding: clamp(0.8rem, 2vw, 1.5rem) clamp(1.5rem, 3vw, 2rem);
  border-radius: clamp(10px, 2vw, 20px);
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 120px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    background: linear-gradient(135deg, var(--secondary-color), var(--accent-color));
    color: white;
  }
`;

const MusicPlayer = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: clamp(20px, 4vw, 30px);
  padding: clamp(2rem, 5vw, 4rem);
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(15px);
  animation: ${fadeIn} 1.5s ease-out;
  width: 100%;
  max-width: 600px;
`;

const SongInfo = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const SongName = styled.h3`
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  color: var(--primary-color);
  margin-bottom: 1rem;
  font-weight: 300;
`;

const SongArtist = styled.p`
  font-size: clamp(1rem, 1.5vw, 1.3rem);
  color: #7f8c8d;
  margin-bottom: 2rem;
`;

const AudioElement = styled.audio`
  width: 100%;
  border-radius: 10px;
  
  &::-webkit-media-controls-panel {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
  }
`;

const LyricsContainer = styled.div`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  padding: 2rem;
  margin-top: 2rem;
  max-height: 400px;
  overflow-y: auto;
  
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: var(--secondary-color);
    border-radius: 10px;
  }
`;

const LyricsTitle = styled.h4`
  font-size: clamp(1.2rem, 2vw, 1.8rem);
  color: var(--primary-color);
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 300;
`;

const LyricsText = styled.div`
  font-size: clamp(1.2rem, 2vw, 1.6rem);
  line-height: 2;
  color: #34495e;
  text-align: center;
  white-space: pre-line;
  font-style: italic;
  font-weight: 600;
  max-width: 800px;
  margin: 0 auto;
`;

const songs = [
  {
    id: 1,
    title: "Song 2",
    artist: "WIMBO NA. 151",
    file: "/src/assets/song2.mp3",
    lyrics: `(Ayubu 14:13-15)
    1. 1.Lo! Uhai ni kama ukungu,
Leo, kesho haupo.
Watokea kisha watoweka.
Huzuni kwa napendwa.
Mtu akifa, je, ataishi?
Mungu ameahidi:
(KORASI)
Yehova ataawaita
Watoke na kuishi.
Kwani anatamani,
Kazi ya mikonoye.
Usiwe na shaka kamwe,
Mungu atamwinua,
Kisha twishi milele,
Tu mali yake yeye.
    2. 2.Rafikize Yehova wakifa,
Hawasahau kamwe.
Walalao katika Kaburi,
Watainuka tena.
Tufurahie uzima na o,
Duniani milele.
(KORASI)
Yehova ataawaita
Watoke na kuishi.
Kwani anatamani,
Kazi ya mikonoye.
Usiwe na shaka kamwe,
Mungu atamwinua,
Kisha twishi milele,
Tu mali yake yeye.
(Ona pia Yoh. 6:40; 11:43; Yak. 4:14.)`
  },
  {
    id: 2,
    title: "Song 3",
    artist: "WIMBO NA. 3",
    file: "/src/assets/song3.mp3",
    lyrics: `(Methali 14:26)
1.Yehova umetupatia
tumaini bora.
Latusimua sana,
tutalitangaza.
Mahangaiko ya maisha,
hutufanya tuhofu.
Nalo tumaini letu
Linadhoofika.
(KORASI)
Yehova ataawaita
Watoke na kuishi.
Kwani anatamani,
Kazi ya mikonoye.
Usiwe na shaka kamwe,
Mungu atamwinua,
Kisha twishi milele,
Tu mali yake yeye.
2.Ichochee mioyo yetu,
tusikusahau.
Watufariji daima,
tunapolemewa.
Kutafakari wema wako,
kunatuimarisha.
Tuwajulishe wengine
jina lako kuu.
(KORASI)
Tumaini, nguvu,
na uhakika;
zatoka kwako Yehova.
Ili tuhubiri
kwa uhakika,
twakutegemea wewe.
(Ona pia Zab. 72:13; 14; Met. 3:5.)`
  }
];

const SongPage = () => {
  const [selectedSong, setSelectedSong] = useState(songs[0]);

  const selectSong = (song) => {
    setSelectedSong(song);
  };

  return (
    <SongContainer>
      <SongHeader>
        <SongTitle>Musical Tributes</SongTitle>
        <SongSubtitle>Songs dedicated to the memory of John 'Kuka' Nyikuli Shikanga</SongSubtitle>
      </SongHeader>

      <SongSelector>
        {songs.map((song) => (
          <SongButton
            key={song.id}
            active={selectedSong.id === song.id}
            onClick={() => selectSong(song)}
          >
            {song.title}
          </SongButton>
        ))}
      </SongSelector>

      <LyricsTitle>Song Lyrics</LyricsTitle>
      <LyricsText>{selectedSong.lyrics}</LyricsText>
    </SongContainer>
  );
};

export default SongPage;
