import React from 'react';
import styles from './style.module.css';

const Slogan = () => {
    return (
        <div className={styles.slogan}>
            <h2>Providing hassel free service and beautiful transformations to your property </h2>
            <div className={styles.buttonWrapper}>
                <button className={styles.secondaryBtn}>Get A Quote</button>
            </div>
        </div>
    )
}

export default Slogan;