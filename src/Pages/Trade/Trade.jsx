import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import Swap from "./Swap/Swap";
import styles from "./styles/Trade.module.css";
function Trade() {
  return (
    <div className={styles.trade}>
      <div className={styles.tradeHeader}>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"/Trade/"}
        >
          Swap
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"/Trade/Limit"}
        >
          Limit
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"/Trade/Liquidity"}
        >
          Liquidity
        </NavLink>
        <a href="#">Perpetual</a>
      </div>
      <Routes>
        <Route path="/" element={<Swap />} />
      </Routes>
    </div>
  );
}

export default Trade;
