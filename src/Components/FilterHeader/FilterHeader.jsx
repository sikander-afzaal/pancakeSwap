import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCaretDown, faGrip, faList } from "@fortawesome/free-solid-svg-icons";

import styles from "./FilterHeader.module.css";
function FilterHeader({ pool }) {
  const [dropDown, setDropDown] = useState(false); //to open the drop down
  const [dropValue, setDropValue] = useState("Hot"); //for drop down value
  const [liveSwitch, setLiveSwitch] = useState(false); //for the live and finish switch
  const [gridSwitch, setGridSwitch] = useState(false); //changes orientation
  return (
    <div className={styles.auctionHeader}>
      <div className={styles.leftAuction}>
        <div>
          <FontAwesomeIcon
            className={`${gridSwitch && styles.activeType}`}
            icon={faGrip}
            onClick={() => setGridSwitch(true)}
          />
          <FontAwesomeIcon
            className={`${!gridSwitch && styles.activeType}`}
            icon={faList}
            onClick={() => setGridSwitch(false)}
          />
        </div>

        <div className={styles.toggleSwitch}>
          <input type="checkbox" id="switch" />
          <label htmlFor="switch">Toggle</label>
          <p>Staked Only</p>
        </div>
        <div className={styles.finishSwitch}>
          <h2
            onClick={() => setLiveSwitch(false)}
            className={`${!liveSwitch && styles.activeLive}`}
          >
            Live
          </h2>
          <h2
            onClick={() => setLiveSwitch(true)}
            className={`${liveSwitch && styles.activeLive}`}
          >
            Finished
          </h2>
        </div>
      </div>
      <div className={styles.rightAuction}>
        <div className={styles.rightCol}>
          <p>SORT BY</p>
          {/* drop value --------------------------------------- */}
          <h3
            onClick={() => setDropDown((prev) => !prev)}
            className={`${dropDown && styles.activeDrop}`}
          >
            {dropValue} <FontAwesomeIcon icon={faCaretDown} />
          </h3>
          {/* drop menu -----------------------------  */}
          <div
            className={`${styles.auctionDrop} ${
              dropDown && styles.activeAuction
            }`}
          >
            <h4
              onClick={(e) => {
                setDropDown((prev) => !prev);
                setDropValue(e.target.innerText);
              }}
              className={styles.dropItem}
            >
              APR
            </h4>
            {!pool && (
              <h4
                onClick={(e) => {
                  setDropDown((prev) => !prev);
                  setDropValue(e.target.innerText);
                }}
                className={styles.dropItem}
              >
                Multiplier
              </h4>
            )}

            <h4
              onClick={(e) => {
                setDropDown((prev) => !prev);
                setDropValue(e.target.innerText);
              }}
              className={styles.dropItem}
            >
              Earned
            </h4>
            {!pool && (
              <h4
                onClick={(e) => {
                  setDropDown((prev) => !prev);
                  setDropValue(e.target.innerText);
                }}
                className={styles.dropItem}
              >
                Liquidity
              </h4>
            )}
            {pool && (
              <h4
                onClick={(e) => {
                  setDropDown((prev) => !prev);
                  setDropValue(e.target.innerText);
                }}
                className={styles.dropItem}
              >
                Total Staked
              </h4>
            )}
            <h4
              onClick={(e) => {
                setDropDown((prev) => !prev);
                setDropValue(e.target.innerText);
              }}
              className={styles.dropItem}
            >
              Latest
            </h4>
            <h4
              onClick={(e) => {
                setDropDown((prev) => !prev);
                setDropValue(e.target.innerText);
              }}
              className={styles.dropItem}
            >
              Hot
            </h4>
          </div>
        </div>
        <div className={styles.rightCol}>
          <p>SEARCH</p>
          <input
            type="text"
            placeholder={`Search ${pool ? "Pools" : "Farms"}`}
          />
        </div>
      </div>
    </div>
  );
}

export default FilterHeader;
