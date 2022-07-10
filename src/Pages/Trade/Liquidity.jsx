import React, { useState } from "react";

import styles from "./styles/Liquidity.module.css";
import Button from "../../Components/Button/Button";
import swapStyles from "./styles/Swap.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faClockRotateLeft,
  faClose,
  faArrowLeft,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";

export default function Liquidity() {
  const [card, setCard] = useState("card1");

  const [showTransactions, setShowTransactions] = useState(false);

  return (
    <div className={styles.liquidity}>
      <div
        onClick={() => {
          setShowTransactions(false);
        }}
        className={`${swapStyles.overlay} ${
          showTransactions && swapStyles.openOverlay
        }`}
      ></div>
      <div className={`${styles.card} ${card === "card1" && styles.showCard}`}>
        <div className={styles.cardHeader}>
          <div className={styles.headerContent}>
            <h1>Your Liquidity</h1>
            <p>Remove liquidity to recieve tokens back</p>
          </div>
          <div className={styles.icons}>
            <FontAwesomeIcon icon={faGear} />
            <FontAwesomeIcon
              icon={faClockRotateLeft}
              onClick={() => {
                setShowTransactions(true);
              }}
            />
          </div>
        </div>
        <div className={styles.cardContent}>
          <div className={styles.connectWallet}>
            <p>Connect to a wallet to view your liquidity</p>
          </div>
          <div
            className={styles.addLiquidityBtn}
            onClick={() => {
              setCard("card2");
            }}
          >
            <Button text="Add Liquidity" plus />
          </div>
        </div>
      </div>
      <div className={`${styles.card} ${card === "card2" && styles.showCard}`}>
        <div className={styles.cardHeader}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            onClick={() => {
              setCard("card1");
            }}
          />
          <div className={styles.headerContent}>
            <h1>Add Liquidity</h1>
            <p>
              <FontAwesomeIcon icon={faCircleQuestion} /> Receive LP tokens and
              earn 0.17% trading fees
            </p>
          </div>
          <div className={styles.icons}>
            <FontAwesomeIcon icon={faGear} />
            <FontAwesomeIcon
              icon={faClockRotateLeft}
              onClick={() => {
                setShowTransactions(true);
              }}
            />
          </div>
        </div>
        <div className={styles.cardContent}>
          <div className={styles.addLiquidityBtn}>
            <Button text="Connect Wallet" />
          </div>
        </div>
      </div>
      <div
        className={`${swapStyles.transactionMenu} ${
          showTransactions ? swapStyles.showMenu : ""
        }`}
      >
        <div>
          <h1>Recent Transactions</h1>
          <FontAwesomeIcon
            icon={faClose}
            onClick={() => {
              setShowTransactions(false);
            }}
          />
        </div>
        <Button text="Connect Wallet" />
      </div>
    </div>
  );
}
