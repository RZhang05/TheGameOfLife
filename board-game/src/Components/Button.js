import React from "react";
import styles from "../styles/button.module.css";

const Logo = ({ text, onClick }) => {
  return (
    <div className={styles.button} onClick={onClick}>
      {text}
    </div>
  );
};

export default Logo;
