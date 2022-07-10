import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import Farms from "./Farms";
import Pools from "./Pools";

import styles from "./styles/Earn.module.css";
function Earn() {
  return (
    <div className={styles.earn}>
      <div className={styles.earnHeader}>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"/Earn/Farm"}
        >
          Farms
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"/Earn/Pools"}
        >
          Pools
        </NavLink>
      </div>
      <Routes>
        <Route path="/Farm" element={<Farms />} />
        <Route path="/Pools" element={<Pools />} />
      </Routes>
    </div>
  );
}

export default Earn;
