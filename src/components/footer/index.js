import { Link } from 'react-router-dom';
import React from 'react';
import styles from './style.module.css';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.footerSections}>
                <div className={styles.footerSection}>
                    <h2>ABOUT US</h2>
                    <ul>
                        <Link to='/about'>
                            <li>Dedicated to your needs</li>
                        </Link>
                        <li>Olando Landscaping LLC delivers beautiful designs, high quality landscaping solutions, and affordable prices.
                            Our professional crews have the equipment and experience with a variety of materials, to make your landscaping designs
                            and dreams a reality and will get your landscaping projects done right</li>
                    </ul>
                </div>
                <div className={styles.footerSection}>
                    <h2>OUR SERVICES</h2>
                    <ul>
                        <Link to='/services'>
                            <li>We serve homes and businesses</li>
                        </Link>
                        <li>Our whole team is dedicated to walking you through each step of the process to ensure you get the look you want, at the price you can afford.

                            If you're looking for a landscaping professional, or are just thinking about making a few changes around your property,
                            contact Olando Landscaping LLC today and let us discuss how our team can meet your project needs.</li>
                    </ul>
                </div>
                <div className={styles.footerSection}>
                    <h2>GET IN TOUCH</h2>
                    <p className={styles.para}><span className={styles.email}>&#9993;</span> olandolandscaping@yahoo.com</p>
                    <p className={styles.para}><span className={styles.location}>&#10992;</span>Parkville, MD 21234</p>
                    <p className={styles.para}><span className={styles.phone}>&#128222;</span>(585) 300-1181</p>
                    <p className={styles.para} ><span className={styles.phone}>&#128222;</span>(585) 300-1165</p>
                    <p>&copy; 2023 Olando Landscaping LLC</p>
                </div>
            </div>

        </div >
    )
}

export default Footer;