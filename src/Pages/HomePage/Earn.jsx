import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

import styles from "./styles/Earn.module.css";
import img1 from "../../Assets/earn1.webp";
import img2 from "../../Assets/earn2.webp";
import img3 from "../../Assets/earn3.webp";
import Button from "../../Components/Button/Button";
function Earn() {
  const [info, setInfo] = useState(false);
  const infoVariants = {
    intial: {
      opacity: 0,
      y: -30,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        type: "tween",
      },
    },

    exit: {
      opacity: 0,
      y: 30,
      transition: {
        duration: 1,
        type: "tween",
      },
    },
  };
  return (
    <div className={styles.earnCont}>
      <div className={styles.earn}>
        <div className={styles.leftEarn}>
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
        </div>
        <div className={styles.rightEarn}>
          <h1>
            <span>Earn</span> passive income <br /> with crypto.
          </h1>
          <p>PancakeSwap makes it easy to make your crypto work for you.</p>
          <div className={styles.btnDiv}>
            <Button text={"Explore"} />
            <a href="#">Learn</a>
          </div>
        </div>
      </div>
      <div className={styles.bottomEarn}>
        <h1>
          Top <span>{info ? "Syrup Pools" : "Farms"}</span>{" "}
          <FontAwesomeIcon
            onClick={() => setInfo((prev) => !prev)}
            icon={faRepeat}
          />
        </h1>
        <AnimatePresence exitBeforeEnter>
          {info ? (
            <motion.div
              key={info}
              variants={infoVariants}
              animate={"animate"}
              exit={"exit"}
              initial={"initial"}
              className={styles.switchDiv}
            >
              <div className={styles.switchCol}>
                <h4> Stake CAKE </h4>
                <h2>Up to 86.618%</h2>
                <p>APR</p>
              </div>
              <div className={styles.switchCol}>
                <h4>Stake CAKE - Earn ANTEX</h4>
                <h2>12.333%</h2>
                <p>APR</p>
              </div>
              <div className={styles.switchCol}>
                <h4>Stake CAKE - Earn OLE</h4>
              </div>
              <div className={styles.switchCol}>
                <h4>Stake CAKE - Earn TRIVIA</h4>
              </div>
              <div className={styles.switchCol}>
                <h4>Stake CAKE - Earn SDAO</h4>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={info}
              variants={infoVariants}
              animate={"animate"}
              exit={"exit"}
              initial={"initial"}
              className={styles.switchDiv}
            >
              <div className={styles.switchCol}>
                <h4>OLE-BUSD LP</h4>
                <h2>714.202%</h2>
                <p>APR</p>
              </div>
              <div className={styles.switchCol}>
                <h4>TRIVIA-BNB LP</h4>
                <h2>635.344%</h2>
                <p>APR</p>
              </div>
              <div className={styles.switchCol}>
                <h4>MHUNT-BNB LP</h4>
                <h2>596.692%</h2>
                <p>APR</p>
              </div>
              <div className={styles.switchCol}>
                <h4>WZRD-BUSD LP </h4>
                <h2>539.591%</h2>
                <p>APR</p>
              </div>
              <div className={styles.switchCol}>
                <h4>HOTCROSS-BNB LP</h4>
                <h2>267.606%</h2>
                <p>APR</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Earn;
