import React from "react";
import styles from "./style.module.css";

export default function Subtitle(props) {
    return <h2 className={styles.container}>{props.children}</h2>;
}
