import React, { useState, useEffect } from "react";
import styles from "../styles/cell.module.css";

import PopUp from "./PopUp";

const Cell = ({
  visible,
  options,
  text,
  onClick,
  colour,
  scenarioText,
  outcomes,
}) => {
  const [popup, setPopup] = useState(false);
  return (
    <>
      <div
        className={visible ? styles.cell : styles.empty}
        style={
          visible
            ? { backgroundColor: colour }
            : { backgroundColor: "transparent" }
        }
        onClick={
          options.length > 0
            ? () => {
                setPopup(true);
                onClick();
              }
            : () => {}
        }
      >
        <div className={styles.text}>{text}</div>
      </div>
      {popup && (
        <PopUp
          title="Scenario"
          onClick={() => {
            setPopup(false);
          }}
          isEvent
          text={scenarioText}
          outcomes={outcomes}
          options={options}
        />
      )}
    </>
  );
};

export default Cell;
