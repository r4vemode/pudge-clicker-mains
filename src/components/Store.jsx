import React, {useEffect} from 'react';
import { useGameContext } from '../GameContext';
import './Menu';
import ShopItems from '../UI/ShopItem';

const Store = () => {
  const {
    score,
    setScore,
    scorePerClick,
    setScorePerClick,
    scorePerSecond,
    setScorePerSecond
  } = useGameContext();

  return (
    <div>
      <div className="store-container">
        <ShopItems
          score={score}
          setScore={setScore}
          scorePerClick={scorePerClick}
          setScorePerClick={setScorePerClick}
          scorePerSecond={scorePerSecond}
          setScorePerSecond={setScorePerSecond}
        />
      </div>
    </div>
  );
};

export default Store;
