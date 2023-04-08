import React, { useState } from "react";
import styles from "../styles/popup.module.css";

const PopUp = ({ onClick, title, text, isEvent, ans, options, outcomes }) => {
  const [showAns, setShow] = useState(false);
  return (
    <div className={styles.popupBack}>
      <div className={styles.popup}>
        <div className={styles.popupHeader}>
          <div className={styles.header}>{title || "Rules"}</div>
          <div className={styles.closeButton} onClick={onClick}>
            X
          </div>
        </div>
        <div
          className={styles.popupBody}
          onClick={() => {
            if (isEvent && outcomes) setShow(true);
          }}
        >
          {text && !showAns && <div>{text}</div>}
          {!text && (
            <ol>
              <li>Every player starts on the start cell.</li>
              <li>
                Every player rolls a 4-sided fair die to determine how many
                cells to move forward.
              </li>
              <li>
                The two main stats for a player are money and mental fortitude.
                Money allows you to get out in certain situations. Mental
                fortitude allows you to make tough decisions.
                <ol>
                  <li>Every player starts off with 1000 money</li>
                  <li>
                    There are certain cells that allow players to collect money.
                    When they land on a money cell, they roll a four-sided die
                    and multiply the result with 2000. That result (d4 * 2000)
                    is the amount of money they receive.
                  </li>
                  <li>Every player starts off with 5 Mental Fortitude</li>
                  <li>
                    On cells with grit, your four-sided dice roll times 2 is the
                    amount of mental fortitude you gain.
                  </li>
                  <li>
                    If the player does not have enough mental fortitude to
                    select any options in an event then they must roll a dice to
                    select.
                  </li>
                </ol>
              </li>
              <li>
                Each cell with text represents an interaction. Event cells have
                options with consequences.
              </li>
              <li>
                You finish the game when you reach the end. However to win you
                must have the most money and mental fortitude out of all
                players. If nobody has both conditions then the player who
                reached the finish first wins.
              </li>
            </ol>
          )}
          {options && !showAns && (
            <ol className={styles.scenarioText}>
              {options.map((o) => {
                return <li>{o}</li>;
              })}
            </ol>
          )}
          {showAns && outcomes && (
            <ol>
              {outcomes.map((o) => {
                return <li>{o}</li>;
              })}
            </ol>
          )}
          {text && outcomes && !showAns && (
            <div className={styles.result}>Click to show results </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopUp;
