import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faChartColumn,
  faRotateRight,
  faClockRotateLeft,
  faAngleDown,
  faArrowDown,
  faClose,
} from "@fortawesome/free-solid-svg-icons";

import Button from "../../Components/Button/Button";
import styles from "./styles/Swap.module.css";
import busd from "../../Assets/busd.png";
import bnb from "../../Assets/bnb.svg";
import switchImg from "../../Assets/switch-icon.svg";
import graph from "../../Assets/graph.PNG";

const tokens = [
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

function Swap() {
  const [inputs, setInputs] = useState({
    inputOne: {
      img: bnb,
      name: "BNB",
      value: "",
    },
    inputTwo: {
      img: busd,
      name: "BUSD",
      value: "",
    },
  });

  const [showGraph, setShowGraph] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [showTransactions, setShowTransactions] = useState(false);

  return (
    <div className={styles.swap}>
      <div
        onClick={() => {
          setShowGraph(false);
          setShowMenu(false);
          setShowTransactions(false);
        }}
        className={`${styles.overlay} ${
          window.innerWidth > 1000
            ? (showMenu || showTransactions) && styles.openOverlay
            : (showGraph || showMenu || showTransactions) && styles.openOverlay
        }`}
      ></div>
      <div
        className={`${styles.graphSection}  ${
          showGraph ? styles.showGraph : ""
        }`}
      >
        <img src={graph} alt="Graph" />
      </div>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.cardHeaderTop}>
            <FontAwesomeIcon
              icon={faChartColumn}
              className={styles.graphIcon}
              onClick={() => setShowGraph((prev) => !prev)}
            />
            <h1>Swap</h1>
            <div className={styles.cardHeaderIcons}>
              <FontAwesomeIcon icon={faGear} />
              <FontAwesomeIcon
                icon={faClockRotateLeft}
                onClick={() => {
                  setShowTransactions(true);
                }}
              />
              <FontAwesomeIcon icon={faRotateRight} />
            </div>
          </div>
          <p>Trade tokens in an instant</p>
        </div>
        <div className={styles.cardContent}>
          <div className={styles.inputContainer}>
            <div className={styles.inputInfo} onClick={() => setShowMenu(true)}>
              <img src={inputs.inputOne.img} alt="coin" />
              <h1 className={styles.coinName}>{inputs.inputOne.name}</h1>
              <FontAwesomeIcon icon={faAngleDown} />
            </div>
            <input
              type="text"
              placeholder="0.0"
              value={inputs.inputOne.value}
              onChange={(e) => {
                if (!isNaN(e.target.value)) {
                  setInputs((prev) => {
                    return {
                      inputOne: { ...prev.inputOne, value: e.target.value },
                      inputTwo: { ...prev.inputTwo },
                    };
                  });
                }
              }}
            />
          </div>
          <div
            className={styles.switchBtn}
            onClick={() => {
              setInputs((prev) => {
                return {
                  inputOne: { ...prev.inputTwo },
                  inputTwo: { ...prev.inputOne },
                };
              });
            }}
          >
            <FontAwesomeIcon icon={faArrowDown} className={styles.normalIcon} />
            <img
              src={switchImg}
              alt="switch button"
              className={styles.hoverIcon}
            />
          </div>
          <div className={styles.inputContainer}>
            <div
              className={styles.inputInfo}
              onClick={() => {
                setShowMenu(true);
              }}
            >
              <img src={inputs.inputTwo.img} alt="coin " />
              <h1 className={styles.coinName}>{inputs.inputTwo.name}</h1>
              <FontAwesomeIcon icon={faAngleDown} />
            </div>
            <input
              type="text"
              placeholder="0.0"
              value={inputs.inputTwo.value}
              onChange={(e) => {
                if (!isNaN(e.target.value)) {
                  setInputs((prev) => {
                    return {
                      inputOne: { ...prev.inputOne },
                      inputTwo: { ...prev.inputTwo, value: e.target.value },
                    };
                  });
                }
              }}
            />
          </div>
          <div className={styles.st}>
            <span className={styles.stText}>Slippage Tolerance</span>
            <span className={styles.stValue}>0.1%</span>
          </div>
          <div className={styles.button}>
            <Button text="Connect Wallet" />
          </div>
        </div>
      </div>
      <div className={`${styles.tokenMenu} ${showMenu ? styles.showMenu : ""}`}>
        <div className={styles.menuHeader}>
          <h1>Select a Token</h1>
          <FontAwesomeIcon icon={faClose} onClick={() => setShowMenu(false)} />
        </div>
        <div className={styles.menuContent}>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className={styles.searchbar}
            placeholder="Search"
          />
          <div className={styles.tokens}>
            {tokens
              .filter((token) =>
                token.name.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map((token, index) => {
                let disabled = "";
                if (
                  token.name.toLowerCase() ===
                    inputs.inputOne.name.toLowerCase() ||
                  token.name.toLowerCase() ===
                    inputs.inputTwo.name.toLowerCase()
                ) {
                  disabled = styles.disabled;
                }
                return (
                  <div className={`${styles.token} ${disabled}`} key={index}>
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
        className={`${styles.transactionMenu} ${
          showTransactions ? styles.showMenu : ""
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

export default Swap;
