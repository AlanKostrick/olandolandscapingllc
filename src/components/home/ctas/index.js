import React from 'react';
import field from '../../../assets/field.png';
import gardening from '../../../assets/gardening.png';
import lawnmower from '../../../assets/lawnmower.png';
import mulch from '../../../assets/wheel-barrow.png';
import paving from '../../../assets/paving.png';
import pressureWasher from '../../../assets/pressure-washer.png';
import raking from '../../../assets/raking.png';
import shovel from '../../../assets/shovel.png';
import styles from './style.module.css';

const CTAs = () => {
    return (
        <div className={styles.container}>
            <div className={styles.ctaItem}>
                <img className={styles.icon} src={lawnmower} alt='' />
                <h3>Lawn Service</h3>
            </div>
            <div className={styles.ctaItem}>
                <img className={styles.icon} src={paving} alt='' />
                <h3>Hardscapes</h3>
            </div>
            <div className={styles.ctaItem}>
                <img className={styles.icon} src={pressureWasher} alt='' />
                <h3>Pressure Washing</h3>
            </div>
            <div className={styles.ctaItem}>
                <img className={styles.icon} src={field} alt='' />
                <h3>Maintenance</h3>
            </div>
            <div className={styles.ctaItem}>
                <img className={styles.icon} src={gardening} alt='' />
                <h3>Gardening</h3>
            </div>
            <div className={styles.ctaItem}>
                <img className={styles.icon} src={shovel} alt='' />
                <h3>Snow Removal</h3>
            </div>
            <div className={styles.ctaItem}>
                <img className={styles.icon} src={raking} alt='' />
                <h3>Leaves</h3>
            </div>
            <div className={styles.ctaItem}>
                <img className={styles.icon} src={mulch} alt='' />
                <h3>Mulching</h3>
            </div>
        </div>
    )
}

export default CTAs