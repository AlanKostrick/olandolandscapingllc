import { Link } from 'react-router-dom';
import React from 'react';
import styles from './style.module.css';

const Slogan = () => {
    return (
        <div className={styles.slogan}>
            <h2>Providing hassel free service and beautiful transformations to your property </h2>
            <Link to='/contact'>
                <div className={styles.buttonWrapper}>
                    <button className={styles.secondaryBtn}>Get A Quote</button>
                </div>
            </Link>
        </div>
    );
}

export default Slogan;