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
  faPlus,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import bnb from "../../Assets/bnb.svg";
import busd from "../../Assets/busd.png";

const allTokens = [
  {
    img: bnb,
    name: "BNB",
    desc: "BNB",
  },
  {
    img: busd,
    name: "BUSD",
    desc: "BUSD Token",
  },
];

export default function Liquidity() {
  const [card, setCard] = useState("card1");

  const [showTransactions, setShowTransactions] = useState(false);

  const [tokens, setTokens] = useState({
    tokenOne: {
      img: bnb,
      tokenName: "BNB",
    },
    tokenTwo: {
      img: busd,
      tokenName: "BUSD",
    },
  });

  const [showMenu, setShowMenu] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className={styles.liquidity}>
      <div
        onClick={() => {
          setShowTransactions(false);
          setShowMenu(false);
        }}
        className={`${swapStyles.overlay} ${
          (showTransactions || showMenu) && swapStyles.openOverlay
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
          <div className={styles.tokenPairContainer}>
            <h1>Choose a valid pair</h1>
            <div className={styles.tokenPairing}>
              <div
                className={styles.token}
                onClick={() => {
                  setShowMenu(true);
                }}
              >
                <img src={tokens.tokenOne.img} alt="Token" />
                <h1>{tokens.tokenOne.tokenName}</h1>
                <FontAwesomeIcon icon={faCaretDown} />
              </div>
              <FontAwesomeIcon icon={faPlus} />
              <div
                className={styles.token}
                onClick={() => {
                  setShowMenu(true);
                }}
              >
                <img src={tokens.tokenTwo.img} alt="Token" />
                <h1>{tokens.tokenTwo.tokenName}</h1>
                <FontAwesomeIcon icon={faCaretDown} />
              </div>
            </div>
          </div>
          <div className={`${styles.addLiquidityBtn} ${styles.disabled}`}>
            <Button text="Connect Wallet" />
          </div>
        </div>
      </div>
      <div
        className={`${swapStyles.tokenMenu} ${
          showMenu ? swapStyles.showMenu : ""
        }`}
      >
        <div className={swapStyles.menuHeader}>
          <h1>Select a Token</h1>
          <FontAwesomeIcon icon={faClose} onClick={() => setShowMenu(false)} />
        </div>
        <div className={swapStyles.menuContent}>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className={swapStyles.searchbar}
            placeholder="Search"
          />
          <div className={swapStyles.tokens}>
            {allTokens
              .filter((token) =>
                token.name.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map((token, index) => {
                let disabled = "";
                if (
                  token.name.toLowerCase() ===
                    tokens.tokenOne.tokenName.toLowerCase() ||
                  token.name.toLowerCase() ===
                    tokens.tokenTwo.tokenName.toLowerCase()
                ) {
                  disabled = swapStyles.disabled;
                }
                return (
                  <div
                    className={`${swapStyles.token} ${disabled}`}
                    key={index}
                  >
                    <img src={token.img} alt="token" />
                    <div>
                      <h1>{token.name}</h1>
                      <p>{token.desc}</p>
                    </div>
                  </div>
                );
              })}
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
