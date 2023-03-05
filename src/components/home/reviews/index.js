import { Link } from 'react-router-dom';
import React from 'react';
import five from '../../../assets/five.png';
import styles from './style.module.css';

const Reviews = () => {
    return (
        <div className={styles.reviews}>
            <h2><a target="_blank" href="https://www.google.com/search?q=olando+landscaping+llc+google+reviews&rlz=1C5CHFA_enUS1044US1044&ei=ui_yY7-mGoKl5NoPwoaF0Ak&ved=0ahUKEwi_65nG46H9AhWCElkFHUJDAZoQ4dUDCBA&uact=5&oq=olando+landscaping+llc+google+reviews&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCAAQogQyBQgAEKIEMgUIABCiBDoKCAAQRxDWBBCwAzoKCCEQoAEQwwQQCkoECEEYAFDHBVjiCGDbCWgBcAF4AIABkgGIAe0CkgEDMy4xmAEAoAEByAEEwAEB&sclient=gws-wiz-serp#ip=1&lrd=0x40ab74df65980c33:0x82a3c2fff9cb7fb0,1,,,," rel="noreferrer" >Find our 5 star reviews on Google!</a></h2>
            <img className={styles.icon} src={five} alt='' />
            <a target="_blank" href="https://www.google.com/search?q=olando+landscaping+llc+google+reviews&rlz=1C5CHFA_enUS1044US1044&ei=ui_yY7-mGoKl5NoPwoaF0Ak&ved=0ahUKEwi_65nG46H9AhWCElkFHUJDAZoQ4dUDCBA&uact=5&oq=olando+landscaping+llc+google+reviews&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCAAQogQyBQgAEKIEMgUIABCiBDoKCAAQRxDWBBCwAzoKCCEQoAEQwwQQCkoECEEYAFDHBVjiCGDbCWgBcAF4AIABkgGIAe0CkgEDMy4xmAEAoAEByAEEwAEB&sclient=gws-wiz-serp#ip=1&lrd=0x40ab74df65980c33:0x82a3c2fff9cb7fb0,1,,,," rel="noreferrer" >
                <div className={styles.buttonWrapper}>
                    <button className={styles.reviewsBtn}>Our Reviews</button>
                </div>
            </a>
            <h3>"Highly impressed!"</h3>
            <h3>"Professional and reliable"</h3>
            <h3>"Will achieve your vision within a budget"</h3>
            <h3>"They listened to our requests"</h3>
            <Link className={styles.link} to='/contact'>
                <div className={styles.buttonWrapper}>
                    <button className={styles.secondaryBtn}>Get A Quote</button>
                </div>
            </Link>
        </div>
    );
}

export default Reviews;