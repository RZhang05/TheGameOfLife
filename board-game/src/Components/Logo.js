import React from "react";
import styles from "../styles/logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <div className={styles.logoText}>The Game Of Life</div>
    </div>
  );
};

export default Logo;
