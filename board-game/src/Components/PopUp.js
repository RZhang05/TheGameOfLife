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
            if (isEvent)
              setShow((prev) => {
                return true;
              });
          }}
        >
          {text && !showAns && <div>{text}</div>}
          {!text && (
            <ol>
              <li>Rule 1</li>
              <li>Rule 2</li>
              <li>Rule 3</li>
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
          {text && !showAns && (
            <div className={styles.result}>Click to show results </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopUp;
