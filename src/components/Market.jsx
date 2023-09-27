import React, { useState, useEffect } from 'react';
import { useGameContext } from '../GameContext';
import '../style.css';
import Footer from "./Footer";

const Market = () => {
  const {
    score,
    setScore,
    scorePerSecond,
    setScorePerSecond,
  } = useGameContext();

  const [creepPrice, setCreepPrice] = useState(200);
  const [sallerPrice, setSallerPrice] = useState(700);
  const [towerPrice, setTowerPrice] = useState(3000);
  const [gadzaPrice, setGadzaPrice] = useState(100000);

  const buyCreep = () => {
    if (score >= creepPrice) {
      setScore(score - creepPrice);
      setScorePerSecond(scorePerSecond + 2);
      setCreepPrice(creepPrice * 2);
    } else {
      alert("Не хватает пуджей для покупки этого товара!");
    }
  };

  const buySallerCreep = () => {
    if (score >= sallerPrice) {
      setScore(score - sallerPrice);
      setScorePerSecond(scorePerSecond + 8);
      setSallerPrice(sallerPrice * 2);
    } else {
      alert("Не хватает пуджей для покупки этого товара!");
    }
  };

  const buyTower = () => {
    if (score >= towerPrice) {
      setScore(score - towerPrice);
      setScorePerSecond(scorePerSecond + 50);
      setTowerPrice(towerPrice * 2);
    } else {
      alert("Не хватает пуджей для покупки этого товара!");
    }
  };

  const buyGadza = () => {
    if (score >= gadzaPrice) {
      setScore(score - gadzaPrice);
      setScorePerSecond(scorePerSecond + 1000);
      setGadzaPrice(gadzaPrice * 2);
    } else {
      alert("Не хватает пуджей для покупки этого товара!");
    }
  };
  return (
    <div>
      <div className="container">
        <ul className="market__list">
          <div className="store__list-container">
            <li className="store__item arcana-item" onClick={buyCreep}>
              <div className="card-container">
                <div className="creep-slot"></div>
                <h3 className="menu__title">Купить крипа раба</h3>
                <p className="menu__title-min">
                  {creepPrice} PUG, дает + 2 pug/sec
                </p>
              </div>
            </li>
            <li className="store__item arcana-item" onClick={buySallerCreep}>
              <div className="card-container">
                <div className="creep-saller-slot"></div>
                <h3 className="menu__title">Поставить торговца на счетчик</h3>
                <p className="menu__title-min">
                  {sallerPrice} PUG, дает + 8 pug/sec
                </p>
              </div>
            </li>
          </div>

          <div className="store__list-container">
            <li className="store__item " onClick={buyTower}>
              <div className="card-container">
                <div className="tower-slot"></div>
                <h3 className="menu__title">Установить вышку</h3>
                <p className="menu__title-min">
                  {towerPrice} PUG, дает + 50 pug/sec
                </p>
              </div>
            </li>
            <li className="store__item " onClick={buyGadza}>
              <div className="card-container">
                <div className="roshan-slot"></div>
                <h3 className="menu__title">Огромная гадзила</h3>
                <p className="menu__title-min">
                  {gadzaPrice} PUG, дает + 1000 pug/sec
                </p>
              </div>
            </li>
          </div>
        </ul>
      </div>
      <div className="footer__box">
        <Footer />
      </div>
    </div>
  );
};

export default Market;
