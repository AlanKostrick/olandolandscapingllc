import React from 'react';
import styles from './style.module.css';

const Footer = () => {
    return (
        <div>
            <div className={styles.footerSections}>
                <div className={styles.footerSection}>
                    <h2>ABOUT US</h2>
                    <p>Beautiful designs, high quality landscaping solutions, and affordable prices.</p>
                </div>
                <div className={styles.footerSection}>
                    <h2>OUR SERVICES</h2>
                    <ul>
                        <li>Residential</li>
                        <li>Businesses</li>
                        <li>Maintenance</li>
                    </ul>
                </div>
                <div className={styles.footerSection}>
                    <h2>GET IN TOUCH</h2>
                    <p>olandolandscaping@yahoo.com</p>
                    <p>&copy; 2023 Olando Landscaping LLC</p>
                </div>
            </div>

        </div >
    )
}

export default Footer;