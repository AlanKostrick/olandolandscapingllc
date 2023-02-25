import ContactForm from '../../components/contact-form';
import React from 'react';
import cx from 'classnames';
import lawn from '../../assets/lawncare3.jpg';
import styles from './style.module.css';

const Contact = () => {
    return (
        <>
            <div style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${lawn})`,
                height: '65vh',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}></div>
            <div style={{
                textAlign: 'center',
                position: 'absolute',
                top: '40%',
                left: '50%',
                lineHeight: '50px',
                transform: 'translate(-50%, -50%)',
                color: 'white',
                fontSize: '50px',
                fontWeight: '700'
            }}>
                Contact Us
            </div>
            <div className={styles.container}>
                <h1>We are here to help</h1>
                <h2> Our whole team is dedicated to walking you through each step of the process to ensure you get the look you want, at the price you can afford.</h2>
                <ContactForm />
                <div className={styles.contactSection}>
                    <h3>Free Consultation!</h3>
                    <p className={cx(styles.para, styles.mobilePara)}><span className={styles.email}>&#9993;</span> olandolandscaping@yahoo.com</p>
                    <p className={cx(styles.para, styles.mobilePara)}><span className={styles.location}>&#10992;</span>Parkville, MD 21234</p>
                    <p className={cx(styles.para, styles.mobilePara)}><span className={styles.phone}>&#128222;</span>(585) 300-1181</p>
                    <p className={cx(styles.para, styles.mobilePara)} ><span className={styles.phone}>&#128222;</span>(585) 300-1165</p>
                    <p>&copy; 2023 Olando Landscaping LLC</p>
                </div>
            </div>
        </>
    )
}

export default Contact;