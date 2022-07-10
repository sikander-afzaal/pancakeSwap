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
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import Button from "../../Components/Button/Button";
import busd from "../../Assets/busd.png";
import bnb from "../../Assets/bnb.svg";
import switchImg from "../../Assets/switch-icon.svg";
import graph from "../../Assets/graph.PNG";
import confusedPancake from "../../Assets/confusedPancake.svg";
import swapStyles from "./styles/Swap.module.css";
import styles from "./styles/Limit.module.css";

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
  const [openOrders, setOpenOrders] = useState([
    {
      from: "asd",
      to: "pedt",
      limitPrice: 234,
      status: "asd",
    },
  ]);
  const [ordersHistory, setOrdersHistory] = useState([]);
  const [showOrders, setShowOrders] = useState(true);

  return (
    <div className={styles.limit}>
      <div className={styles.limitLeft}>
        <div
          onClick={() => {
            setShowGraph(false);
            setShowMenu(false);
            setShowTransactions(false);
          }}
          className={`${swapStyles.overlay} ${
            window.innerWidth > 1000
              ? (showMenu || showTransactions) && swapStyles.openOverlay
              : (showGraph || showMenu || showTransactions) &&
                swapStyles.openOverlay
          }`}
        ></div>
        <div
          className={`${swapStyles.graphSection}  ${
            showGraph ? swapStyles.showGraph : ""
          }`}
        >
          <img src={graph} alt="Graph" />
        </div>
        <div className={styles.ordersContainer}>
          <div className={styles.containerHeader}>
            <button
              onClick={() => {
                setShowOrders(true);
              }}
              className={showOrders ? styles.activeTab : ""}
            >
              Open Orders
            </button>
            <button
              onClick={() => {
                setShowOrders(false);
              }}
              className={showOrders ? "" : styles.activeTab}
            >
              Orders History
            </button>
          </div>
          <table>
            <thead>
              <tr className={styles.headerRow}>
                <th>From</th>
                <th>To</th>
                <th>Limit Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className={styles.tableBody}>
              {
                showOrders ? (
                  openOrders.length > 0 ? ( // Open Orders Content
                    openOrders.map((order) => {
                      return (
                        <tr className={styles.tableRow}>
                          <td>{order.from}</td>
                          <td>{order.to}</td>
                          <td>{order.limitPrice}</td>
                          <td>{order.status}</td>
                        </tr>
                      );
                    })
                  ) : (
                    <div className={styles.emptyTable}>
                      <img src={confusedPancake} alt="confused pancake" />
                      <p>No Open Orders</p>
                    </div>
                  ) // If Length is 0
                ) : ordersHistory.length > 0 ? ( // Order History Content
                  ordersHistory.map((order) => {
                    return (
                      <div>
                        <td>{order.from}</td>
                        <td>{order.to}</td>
                        <td>{order.limitPrice}</td>
                        <td>{order.status}</td>
                      </div>
                    );
                  })
                ) : (
                  <div className={styles.emptyTable}>
                    <img src={confusedPancake} alt="confused pancake" />
                    <p>No Open History</p>
                  </div>
                ) // If Length if 0
              }
            </tbody>
            <tfoot className={styles.tableFoot}>
              <FontAwesomeIcon icon={faArrowLeft} />
              <p>Page 1 of 1</p>
              <FontAwesomeIcon icon={faArrowRight} />
            </tfoot>
          </table>
        </div>
      </div>
      <div className={`${swapStyles.card} ${styles.card}`}>
        <div className={swapStyles.cardHeader}>
          <div className={swapStyles.cardHeaderTop}>
            <FontAwesomeIcon
              icon={faChartColumn}
              className={swapStyles.graphIcon}
              onClick={() => setShowGraph((prev) => !prev)}
            />
            <h1>Limit</h1>
            <div className={swapStyles.cardHeaderIcons}>
              <FontAwesomeIcon icon={faGear} />
              <FontAwesomeIcon
                icon={faClockRotateLeft}
                onClick={() => {
                  setShowTransactions(true);
                }}
              />
            </div>
          </div>
          <p>Place a limit order to trade at a set price</p>
        </div>
        <div className={swapStyles.cardContent}>
          <div className={swapStyles.inputContainer}>
            <div
              className={swapStyles.inputInfo}
              onClick={() => setShowMenu(true)}
            >
              <img src={inputs.inputOne.img} alt="coin image" />
              <h1 className={swapStyles.coinName}>{inputs.inputOne.name}</h1>
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
            className={swapStyles.switchBtn}
            onClick={() => {
              setInputs((prev) => {
                return {
                  inputOne: { ...prev.inputTwo },
                  inputTwo: { ...prev.inputOne },
                };
              });
            }}
          >
            <FontAwesomeIcon
              icon={faArrowDown}
              className={swapStyles.normalIcon}
            />
            <img
              src={switchImg}
              alt="switch button"
              className={swapStyles.hoverIcon}
            />
          </div>
          <div className={swapStyles.inputContainer}>
            <div
              className={swapStyles.inputInfo}
              onClick={() => {
                setShowMenu(true);
              }}
            >
              <img src={inputs.inputTwo.img} alt="coin image" />
              <h1 className={swapStyles.coinName}>{inputs.inputTwo.name}</h1>
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
          <div className={swapStyles.st}>
            <span className={swapStyles.stText}>Slippage Tolerance</span>
            <span className={swapStyles.stValue}>0.1%</span>
          </div>
          <div className={swapStyles.button}>
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
                  disabled = swapStyles.disabled;
                }
                return (
                  <div
                    className={`${swapStyles.token} ${disabled}`}
                    key={index}
                  >
                    <img src={token.img} alt="token image" />
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

export default Swap;
