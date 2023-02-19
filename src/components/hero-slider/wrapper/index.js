import styles from "./style.module.css";

export default function Wrapper(props) {
    return <div className={styles.container}>{props.children}</div>;
}
