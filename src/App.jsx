import React, { useState, useEffect } from "react";
import "./App.css";
import casting from "./img/castingLogo.png";
import awardPlatform from "./img/awardPlatform.png";
import girl from "./img/girlClap.png";
import background from "./img/award_bg.png";
import count from "./img/main-heart.png";
import arrow from "./img/arrow.png";
import avatar from "./img/avtar2.png";
export const App = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [hide, setHide] = useState(true);
  const [show, setShow] = useState(false);
  const [qoute, setQute] = useState(false);
  const [countNum, setCountNum] = useState(15000);
  const [intervalId, setIntervalId] = useState(null);
  const handleArrowClick = () => {
    setQute(true);
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    } else {
      const id = setInterval(() => {
        setCountNum(prevNumber => {
          if (prevNumber >= 40000) {
            clearInterval(id);
            setIntervalId(null);
            return prevNumber;
          } else {
            return prevNumber + 1000;
          }
        });
      }, 100);
      setIntervalId(id);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date().toLocaleTimeString();
      setCurrentTime(time);
    }, 1000);

    setTimeout(() => {
      setHide(false);
      setShow(true);
      console.log("rendering");
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-container">
      <div className="background-container">
        <img src={background} alt="Background" />
      </div>
      {show ? (
        <div className="user-container">
          <img src={avatar} />
          <div className="username-container">
            <h2>D-Lister</h2>
            <p style={{ color: "white" }}>Sally</p>
          </div>
        </div>
      ) : null}
      {show ? (
        <div className="qoute-container">
          {qoute ? (
            <p style={{ color: "gold" }}>4 Friends Gave U Some Love</p>
          ) : (
            <p style={{ color: "gold" }}>Gave U Some Love</p>
          )}
        </div>
      ) : null}
      {show ? (
        <div
          className="count-container"
          onClick={() => {
            console.log("rendering");
          }}
        >
          <img src={count} />
          <p>{countNum}</p>
        </div>
      ) : null}
      {hide ? (
        <div className="casting-container">
          <img src={casting} alt="Casting" />
          <p>{currentTime}</p>
        </div>
      ) : null}
      {hide ? (
        <div className="result-container">
          <p style={{ fontSize: "1.1rem", color: "gold" }}>The Results R In!</p>
        </div>
      ) : null}

      <div className="girl-container">
        <img src={girl} alt="Girl" />
      </div>
      {show ? (
        <div className="arrow-container">
          <img src={arrow} onClick={handleArrowClick} />
        </div>
      ) : null}
      <div className="stage-container">
        <img src={awardPlatform} alt="Award Platform" />
      </div>
    </div>
  );
};
