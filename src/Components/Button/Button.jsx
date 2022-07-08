import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./Button.module.css";
function Button({ inverse, arrow, text }) {
  return (
    <button className={!inverse ? styles.mainBtn : styles.inverseBtn}>
      {text} {arrow && <FontAwesomeIcon icon={faArrowRight} />}
    </button>
  );
}

export default Button;
