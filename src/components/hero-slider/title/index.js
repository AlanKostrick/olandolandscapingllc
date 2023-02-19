import styles from "./style.module.css";

export default function Title(props) {
    return <h1 className={styles.container}>{props.children}</h1>;
}
