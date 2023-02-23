import CTAs from '../../components/home/ctas';
import React from 'react';
import backyard from '../../assets/backyard.jpg';
import commercialNeeds from '../../assets/commercialNeeds.png';
import maintenanceNeeds from '../../assets/maintenanceNeeds.png';
import residentialNeeds from '../../assets/residentialNeeds.png';
import styles from './style.module.css';

const Services = () => {
    return (
        <>
            <div style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backyard})`,
                height: '750px',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}></div>
            <div style={{
                textAlign: 'center',
                position: 'absolute',
                top: '30%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
                fontSize: '50px',
                fontWeight: '700'
            }}>
                Our Services
            </div>
            <div className={styles.container}>
                <h1>What Do We Service?</h1>
                <div className={styles.servicesContainer}>
                    <div className={styles.serviceContainer}>
                        <img src={residentialNeeds} alt='' />
                        <h2>Residential Needs</h2>
                        <p>We understand the care and pride that you have in your home. We treat your property as if it were our own.
                            Whether you need scheduled cuts on your lawn, spring or fall outdoor cleanup,
                            or you need a consultation for a new patio or sidewalk, we have you covered.</p>
                    </div>
                    <div className={styles.serviceContainer}>
                        <img src={commercialNeeds} alt='' />
                        <h2>Commercial Needs</h2>
                        <p>From rental properties, to apartment complexes, we have you covered.
                            Scheduled cuts on your property, snow removal and property cleanup in the spring or fall to keep your place looking its best in the community. We
                            handle all of those things that you do not need to worry about, so that you can successfully run your business operations.</p>
                    </div>
                    <div className={styles.serviceContainer}>
                        <img src={maintenanceNeeds} alt='' />
                        <h2>Maintenance Needs</h2>
                        <p>Things happen, and when they do, we are ready. From tenants in rental properties with home maintenance issues, to that to do list that you cannot
                            seem to get to around your own house, we can solve many issues related to water leaks, plumbing, electrical, and even your home remodeling desires!
                        </p>
                    </div>
                </div>
                <h1 className={styles.header}>What Do We Do?</h1>
                <CTAs />
            </div>
        </>
    );
}

export default Services;