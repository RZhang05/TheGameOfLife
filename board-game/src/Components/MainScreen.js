import React, { useState } from "react";
import styles from "../styles/main.module.css";

import Logo from "./Logo";
import Button from "./Button";
import PopUp from "./PopUp";
import Board from "./Board";

const MainScreen = () => {
  // screen 0 = main screen, 1 = game board
  const [screen, setScreen] = useState(0);
  const [showRules, setRules] = useState(false);
  return (
    <div className={styles.fullScreen}>
      {screen == 0 && (
        <div>
          <Logo />
          <div className={styles.buttonHolder}>
            <Button
              text="Play"
              onClick={() => {
                setScreen(1);
              }}
            />
            <Button
              text="Rules"
              onClick={() => {
                setRules((prev) => {
                  return !prev;
                });
              }}
            />
          </div>
        </div>
      )}
      {showRules && (
        <PopUp
          onClick={() => {
            setRules((prev) => {
              return !prev;
            });
          }}
        />
      )}
      {screen == 1 && <Board />}
    </div>
  );
};

export default MainScreen;
