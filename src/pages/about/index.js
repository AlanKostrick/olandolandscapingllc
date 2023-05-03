import ContactForm from '../../components/contact-form';
import { Gallery } from 'react-grid-gallery';
import React from 'react';
import about1 from '../../assets/about1.jpeg';
import about2 from '../../assets/about2.jpeg';
import about3 from '../../assets/about3.jpeg';
import cx from 'classnames';
import garden from '../../assets/garden2.jpg';
import styles from './style.module.css';

const About = () => {


    const images = [
        {
            src: about2,
            width: 300,
            height: 400
        },
        {
            src: about1,
            width: 300,
            height: 400
        },
        {
            src: about3,
            width: 300,
            height: 400
        }
    ]


    return (
        <>
            <div style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${garden})`,
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
                About Us
            </div>
            <div className={styles.container}>
                <h1>We are here to help</h1>
                <h2> Our whole team is dedicated to walking you through each step of the process to ensure you get the look you want, at the price you can afford.</h2>

                <div className={styles.galleryContainer}>
                    <Gallery rowHeight={400} images={images} />
                </div>

                <ContactForm />
                <div className={styles.contactSection}>
                    <p>Olando Landscaping LLC delivers beautiful designs, high quality landscaping solutions, and affordable prices. Our professional crews have the equipment and experience with a variety of materials, to make your landscaping designs and dreams a reality and will get your landscaping projects done right. Our whole team is dedicated to walking you through each step of the process to ensure you get the look you want, at the price you can afford.

                        If you're looking for a landscaping professional, or are just thinking about making a few changes around your property, contact Olando Landscaping LLC today and let us discuss how our team can meet your project needs.</p>
                    <h3>Free Consultation!</h3>
                    <h4>Licensed & Insured</h4>
                    <p className={cx(styles.para, styles.mobilePara)}><span className={styles.email}>&#9993;</span>olando@olandolandscapingllc.com</p>
                    <p className={cx(styles.para, styles.mobilePara)}><span className={styles.location}>&#10992;</span>5835 York Road #1182</p>
                    <p className={cx(styles.para, styles.mobilePara)}><span className={styles.location}></span>Baltimore, MD 21212</p>
                    <p className={cx(styles.para, styles.mobilePara)}><span className={styles.phone}>&#128222;</span>1 (888) 350-1386</p>
                    <p className={cx(styles.para, styles.mobilePara)} ><span className={styles.phone}>&#128222;</span>1 (585) 300-1181</p>
                    <p className={styles.copyRight}>&copy; 2023 Olando Landscaping LLC</p>
                </div>
            </div>
        </>
    )
}

export default About;