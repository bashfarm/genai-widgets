import React from "react";
import styles from "./liquid-potion-loader.module.scss";

function LiquidPotionLoader() {
  return (
    <div className={styles.container}>
      <div className={styles["potion-top"]}>
        <div className={styles["potion-top-line"]}></div>
      </div>
      <div className={styles["potion-neck"]}></div>
      <div className={styles["potion-body"]}>
        <div className={styles["potion-content"]}>
          <div className={styles["blob-container"]}>
            <div className={styles["blob-one"]}></div>
            <div className={styles["blob-two"]}></div>
            <div className={styles["blob-three"]}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiquidPotionLoader;
