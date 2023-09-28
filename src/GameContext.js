import React, {createContext, useContext, useEffect, useState} from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [scorePerClick, setScorePerClick] = useState(1);
  const [scorePerSecond, setScorePerSecond] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showAchievement1, setShowAchievement1] = useState(false);
  const [showAchievement2, setShowAchievement2] = useState(false);
  const [showAchievement3, setShowAchievement3] = useState(false);
  const [showAchievement4, setShowAchievement4] = useState(false);
  const [showAchievement5, setShowAchievement5] = useState(false);
  const [showModalAchievement1, setShowModalAchievement1] = useState(false);
  const [showModalAchievement2, setShowModalAchievement2] = useState(false);
  const [showModalAchievement3, setShowModalAchievement3] = useState(false);
  const [showModalAchievement4, setShowModalAchievement4] = useState(false);
  const [showModalAchievement5, setShowModalAchievement5] = useState(false);
  const [creepPrice, setCreepPrice] = useState(200);
  const [sallerPrice, setSallerPrice] = useState(700);
  const [towerPrice, setTowerPrice] = useState(3000);
  const [gadzaPrice, setGadzaPrice] = useState(100000);
  const [arcanaPrice, setArcanaPrice] = useState(20000);
  const [bottlePrice, setBottlePrice] = useState(20);
  const [maskPrice, setMaskPrice] = useState(100);
  const [hookPrice, setHookPrice] = useState(10000);


  useEffect(() => {
    const interval = setInterval(() => {
      setScore((prevScore) => prevScore + scorePerSecond);
    }, 1000);
    return () => clearInterval(interval);
  }, [scorePerSecond]);


  return (
    <GameContext.Provider value={{
      score,
      setScore,
      scorePerClick,
      setScorePerClick,
      scorePerSecond,
      setScorePerSecond,
      setShowModal,
      showModal,
      showAchievement1,
      showAchievement2,
      showAchievement3,
      showAchievement4,
      showAchievement5,
      setShowAchievement1,
      setShowAchievement2,
      setShowAchievement3,
      setShowAchievement4,
      setShowAchievement5,
      showModalAchievement1,
      showModalAchievement2,
      showModalAchievement3,
      showModalAchievement4,
      showModalAchievement5,
      setShowModalAchievement1,
      setShowModalAchievement2,
      setShowModalAchievement3,
      setShowModalAchievement4,
      setShowModalAchievement5,
      creepPrice,
      towerPrice,
      sallerPrice,
      gadzaPrice,
      arcanaPrice,
      bottlePrice,
      maskPrice,
      hookPrice,
      setCreepPrice,
      setSallerPrice,
      setTowerPrice,
      setGadzaPrice,
      setArcanaPrice,
      setBottlePrice,
      setMaskPrice,
      setHookPrice
    }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => useContext(GameContext);
