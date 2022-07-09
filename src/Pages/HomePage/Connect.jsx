import React from "react";
import styles from "./styles/Connect.module.css";
import leftBean1 from "../../Assets/beans/leftBean1.webp";
import leftBean2 from "../../Assets/beans/leftBean2.webp";
import leftBean3 from "../../Assets/beans/leftBean3.webp";
import rightBean3 from "../../Assets/beans/rightBean3.webp";
import rightBean2 from "../../Assets/beans/rightBean2.webp";
import rightBean1 from "../../Assets/beans/rightBean1.webp";
import img from "../../Assets/radialGr.svg";
import Button from "../../Components/Button/Button";
function Connect() {
  return (
    <div className={styles.connectCont}>
      <img src={img} className={styles.radial} alt="" />
      <div className={styles.connect}>
        <div className={styles.beanDiv}>
          <img src={leftBean1} alt="" />
          <img src={leftBean2} alt="" />
          <img src={leftBean3} alt="" />
        </div>
        <div className={styles.beanDiv}>
          <img src={rightBean1} alt="" />
          <img src={rightBean2} alt="" />
          <img src={rightBean3} alt="" />
        </div>
        <div className={styles.textPart}>
          <h1>Start in seconds.</h1>
          <h2>
            Connect your crypto wallet to start using the app in seconds. <br />
            <strong>No registration needed.</strong>
          </h2>
          <div className={styles.buttonDiv}>
            <a href="#">Learn how to start</a>
            <Button text={"Connect Wallet"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connect;
