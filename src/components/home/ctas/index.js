import { Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react';

import Collapsible from 'react-collapsible';
import cx from 'classnames';
import field from '../../../assets/field.png';
import fix from '../../../assets/fix.jpg';
import gardening from '../../../assets/gardening.png';
import lawnCare from '../../../assets/lawn-care.jpg';
import lawnmower from '../../../assets/lawnmower.png';
import mulch from '../../../assets/wheel-barrow.png';
import mulching from '../../../assets/mulch.png';
import pavers2 from '../../../assets/pavers2.png';
import paving from '../../../assets/paving.png';
import pressureWasher from '../../../assets/pressure-washer.png';
import raking from '../../../assets/raking.png';
import shovel from '../../../assets/shovel.png';
import siding from '../../../assets/siding.png';
import snow from '../../../assets/snowRemoval.png';
import styles from './style.module.css';
import trimming from '../../../assets/trimming.png';

const CTAs = () => {

    const location = useLocation();
    const [isLawnServiceOpen, setLawnServiceOpen] = useState(false);
    const [isHardscapesOpen, setHardscapesOpen] = useState(false);
    const [isPressureWashingOpen, setPressureWashingOpen] = useState(false);
    const [isMaintenanceOpen, setMaintenanceOpen] = useState(false);
    const [isGardeningOpen, setGardeningOpen] = useState(false);
    const [isSnowRemovalOpen, setSnowRemovalOpen] = useState(false);
    const [isLeavesOpen, setLeavesOpen] = useState(false);
    const [isMulchingOpen, setMulchingOpen] = useState(false);
    const [isSomethingOpen, setSomethingOpen] = useState(false);

    const openLawnService = () => {
        setLawnServiceOpen(true);
        setHardscapesOpen(false);
        setPressureWashingOpen(false);
        setMaintenanceOpen(false);
        setGardeningOpen(false);
        setSnowRemovalOpen(false);
        setLeavesOpen(false);
        setMulchingOpen(false);
        setSomethingOpen(true);
    }

    const openHardscapes = () => {
        setLawnServiceOpen(false);
        setHardscapesOpen(true);
        setPressureWashingOpen(false);
        setMaintenanceOpen(false);
        setGardeningOpen(false);
        setSnowRemovalOpen(false);
        setLeavesOpen(false);
        setMulchingOpen(false);
        setSomethingOpen(true);
    }

    const openPressureWashing = () => {
        setLawnServiceOpen(false);
        setHardscapesOpen(false);
        setPressureWashingOpen(true);
        setMaintenanceOpen(false);
        setGardeningOpen(false);
        setSnowRemovalOpen(false);
        setLeavesOpen(false);
        setMulchingOpen(false);
        setSomethingOpen(true);
    }

    const openMaintenance = () => {
        setLawnServiceOpen(false);
        setHardscapesOpen(false);
        setPressureWashingOpen(false);
        setMaintenanceOpen(true);
        setGardeningOpen(false);
        setSnowRemovalOpen(false);
        setLeavesOpen(false);
        setMulchingOpen(false);
        setSomethingOpen(true);
    }

    const openGardening = () => {
        setLawnServiceOpen(false);
        setHardscapesOpen(false);
        setPressureWashingOpen(false);
        setMaintenanceOpen(false);
        setGardeningOpen(true);
        setSnowRemovalOpen(false);
        setLeavesOpen(false);
        setMulchingOpen(false);
        setSomethingOpen(true);
    }

    const openSnowRemoval = () => {
        setLawnServiceOpen(false);
        setHardscapesOpen(false);
        setPressureWashingOpen(false);
        setMaintenanceOpen(false);
        setGardeningOpen(false);
        setSnowRemovalOpen(true);
        setLeavesOpen(false);
        setMulchingOpen(false);
        setSomethingOpen(true);
    }

    const openLeaves = () => {
        setLawnServiceOpen(false);
        setHardscapesOpen(false);
        setPressureWashingOpen(false);
        setMaintenanceOpen(false);
        setGardeningOpen(false);
        setSnowRemovalOpen(false);
        setLeavesOpen(true);
        setMulchingOpen(false);
        setSomethingOpen(true);
    }

    const openMulching = () => {
        setLawnServiceOpen(false);
        setHardscapesOpen(false);
        setPressureWashingOpen(false);
        setMaintenanceOpen(false);
        setGardeningOpen(false);
        setSnowRemovalOpen(false);
        setLeavesOpen(false);
        setMulchingOpen(true);
        setSomethingOpen(true);
    }

    const closeAll = () => {
        setLawnServiceOpen(false);
        setHardscapesOpen(false);
        setPressureWashingOpen(false);
        setMaintenanceOpen(false);
        setGardeningOpen(false);
        setSnowRemovalOpen(false);
        setLeavesOpen(false);
        setMulchingOpen(false);
        setSomethingOpen(false);
    }




    return (
        <div>

            {location.pathname === '/services' && <div className={styles.infoContainer}>
                <Collapsible open={isLawnServiceOpen} className={styles.itemContainer} openedClassName={styles.itemContainerFade}>
                    <div>
                        <div className={styles.infoHeader}>
                            <button className={styles.closeBtn} onClick={() => closeAll()}>X</button>
                            <h2>Lawn Services</h2>
                        </div>
                        <div className={styles.infoImageContainer}>
                            <img src={lawnCare} alt='' />
                        </div>
                        <div className={styles.text}>We offer flexible plans to meet your lawn care needs. From mowing to trimming and edging,
                            Olando Landscaping LLC makes it easy to have a well-manicured yard. We will work with you to arrange the
                            appropriate services you need. Contact us today for more information and to schedule your
                            mowing and lawn care services.
                        </div>
                        <Link to='/contact'>
                            <button className={styles.contactBtn}>Get A Quote</button>
                        </Link>
                    </div>
                </Collapsible>
                <Collapsible open={isHardscapesOpen} className={styles.itemContainer} openedClassName={styles.itemContainerFade}>
                    <div>
                        <div className={styles.infoHeader}>
                            <button className={styles.closeBtn} onClick={() => closeAll()}>X</button>
                            <h2>Patios, Porch & Walkways</h2>
                        </div>
                        <div className={styles.infoImageContainer}>
                            <img src={pavers2} alt='' />
                        </div>
                        <div className={styles.text}>Our experience with concrete materials means we can help you create a custom decorative concrete surface perfect for your project.
                            Using a variety of colors, stains, stamps, and patterns, we can create a unique surface for your patio, walkways, or retaining walls.
                            We can give you a unique look for your next concrete project, create a distinct style for your outdoor areas, and match your existing decor.
                            If you're looking to repair or upgrade your outdoor areas, contact Olando Landscaping LLC and let us tell you more about how we can help.
                        </div>
                        <Link to='/contact'>
                            <button className={styles.contactBtn}>Get A Quote</button>
                        </Link>
                    </div>
                </Collapsible>
                <Collapsible open={isPressureWashingOpen} className={styles.itemContainer} openedClassName={styles.itemContainerFade}>
                    <div>
                        <div className={styles.infoHeader}>
                            <button className={styles.closeBtn} onClick={() => closeAll()}>X</button>
                            <h2>Pressure Washing</h2>
                        </div>
                        <div className={styles.infoImageContainer}>
                            <img src={siding} alt='' />
                        </div>
                        <div className={styles.text}>Pressure washing is an extremely affordable and efficient way to maintain the exterior of homes and businesses.
                            Siding maintenance is extremely important in the harsh local climate. Over time, algae and dirt can begin to degrade exterior surface materials.
                            If these contaminants are not cleaned and removed from the property, they may become extremely dirty and lead to costly repairs; even replacement.
                            Our specialty solutions reach deep into the surface to safely break down and rinse away mold, mildew, and other damaging material.
                            Our low-pressure chemical soft washing application process is extremely safe for any siding material, and the environment. Not only are you protecting the service life of your siding, but also maintaining and promoting a clean property.
                            Your pavement driveways, walkways, and concrete retaining walls are no different.
                            Mold, mildew, grime, oil, grease, dirt, and other foreign matter can build up over time and may make surfaces unattractive or dangerous.
                            Our professional technicians have the experience and equipment to complete a variety of residential and commercial pressure washing projects throughout the region.
                        </div>
                        <Link to='/contact'>
                            <button className={styles.contactBtn}>Get A Quote</button>
                        </Link>
                    </div>
                </Collapsible>
                <Collapsible open={isMaintenanceOpen} className={styles.itemContainer} openedClassName={styles.itemContainerFade}>
                    <div>
                        <div className={styles.infoHeader}>
                            <button className={styles.closeBtn} onClick={() => closeAll()}>X</button>
                            <h2>Maintenance</h2>
                        </div>
                        <div className={styles.infoImageContainer}>
                            <img src={fix} alt='' />
                        </div>
                        <div className={styles.text}>We are proud to offer some of the most experienced and well-trained team members in the area. Each member of our staff is fully capable of
                            assisting with your projects from start to finish and to make sure the job is completed efficiently and correctly.
                            We take our industry seriously and understand that you have several options available. We appreciate the opportunity to
                            show you how we stand out from our competitors and want to earn your recommendation and future business. Contact us today with your questions
                            and let us help you get started.
                        </div>
                        <Link to='/contact'>
                            <button className={styles.contactBtn}>Get A Quote</button>
                        </Link>
                    </div>
                </Collapsible>
                <Collapsible open={isGardeningOpen} className={styles.itemContainer} openedClassName={styles.itemContainerFade}>
                    <div>
                        <div className={styles.infoHeader}>
                            <button className={styles.closeBtn} onClick={() => closeAll()}>X</button>
                            <h2>Gardening</h2>
                        </div>
                        <div className={styles.infoImageContainer}>
                            <img src={trimming} alt='' />
                        </div>
                        <div className={styles.text}>Whether you’re looking to revive your existing landscape or to create a completely new look, Olando Landscaping LLC can help make your dreams a reality.
                            Put our experienced team to work on your landscaping project to create a beautiful outdoor space for you and your family to enjoy. We have the experience, staff,
                            and equipment to manage projects of any size and will help your home or business stand out
                        </div>
                        <Link to='/contact'>
                            <button className={styles.contactBtn}>Get A Quote</button>
                        </Link>
                    </div>
                </Collapsible>
                <Collapsible open={isSnowRemovalOpen} className={styles.itemContainer} openedClassName={styles.itemContainerFade}>
                    <div>
                        <div className={styles.infoHeader}>
                            <button className={styles.closeBtn} onClick={() => closeAll()}>X</button>
                            <h2>Snow Removal</h2>
                        </div>
                        <div className={styles.infoImageContainer}>
                            <img src={snow} alt='' />
                        </div>
                        <div className={styles.text}>If you have a business, keeping parking lots free of snow and ice is of the upmost importance. So is having clean walkways for your employees and your team.
                            We are standing by and ready to provide any winter weather cleanup services you may need.
                        </div>
                        <Link to='/contact'>
                            <button className={styles.contactBtn}>Get A Quote</button>
                        </Link>
                    </div>
                </Collapsible>
                <Collapsible open={isLeavesOpen} className={styles.itemContainer} openedClassName={styles.itemContainerFade}>
                    <div>
                        <div className={styles.infoHeader}>
                            <button className={styles.closeBtn} onClick={() => closeAll()}>X</button>
                            <h2>Yard Cleanup</h2>
                        </div>
                        <div className={styles.infoImageContainer}>
                            <img src={trimming} alt='' />
                        </div>
                        <div className={styles.text}>Get ready for the changing seasons with clean up services from Olando Landscaping LLC. A clean outdoor space not only looks nice, it also makes it
                            easier to keep your lawn and outdoor plants happy and healthy. Let Olando Landscaping LLC help you achieve or maintain a great looking outdoor
                            space and happy outdoor plants with professional spring or fall clean up services. We will help remove excess debris and litter from your lawn and
                            landscaping and prepare your lawn for a great growing season. Contact us today to discuss your clean up needs or to schedule a service appointment.
                        </div>
                        <Link to='/contact'>
                            <button className={styles.contactBtn}>Get A Quote</button>
                        </Link>
                    </div>
                </Collapsible>
                <Collapsible open={isMulchingOpen} className={styles.itemContainer} openedClassName={styles.itemContainerFade}>
                    <div>
                        <div className={styles.infoHeader}>
                            <button className={styles.closeBtn} onClick={() => closeAll()}>X</button>
                            <h2>Mulching</h2>
                        </div>
                        <div className={styles.infoImageContainer}>
                            <img src={mulching} alt='' />
                        </div>
                        <div className={styles.text}>
                            We are proud of the reputation we've built upon consistent, repeatable results. We are proud that many of our previous clients continue to
                            come to us with new projects. We treat every project as an opportunity to earn your recommendation and your continued business.
                            Our team is highly motivated to make sure your project is successful and you can continue to apply solutions to continue to seek further growth,
                            success, and exceed your goals. We do this with a consistent application of best practices and experience in the industry to ensure results are
                            repeatable each time.
                        </div>
                        <Link to='/contact'>
                            <button className={styles.contactBtn}>Get A Quote</button>
                        </Link>
                    </div>
                </Collapsible>
            </div>
            }


            <div className={styles.container}>
                <div className={cx(styles.ctaItem, isLawnServiceOpen ? styles.ctaItemOpen : null, isSomethingOpen && !isLawnServiceOpen ? styles.somethingOpen : null)} onClick={() => !isSomethingOpen && openLawnService()}>
                    <img className={styles.icon} src={lawnmower} alt='' />
                    <h3>Lawn Service</h3>
                </div>
                <div className={cx(styles.ctaItem, isHardscapesOpen ? styles.ctaItemOpen : null, isSomethingOpen && !isHardscapesOpen ? styles.somethingOpen : null)} onClick={() => !isSomethingOpen && openHardscapes()}>
                    <img className={styles.icon} src={paving} alt='' />
                    <h3>Hardscapes</h3>
                </div>
                <div className={cx(styles.ctaItem, isPressureWashingOpen ? styles.ctaItemOpen : null, isSomethingOpen && !isPressureWashingOpen ? styles.somethingOpen : null)} onClick={() => !isSomethingOpen && openPressureWashing()}>
                    <img className={styles.icon} src={pressureWasher} alt='' />
                    <h3>Pressure Washing</h3>
                </div>
                <div className={cx(styles.ctaItem, isMaintenanceOpen ? styles.ctaItemOpen : null, isSomethingOpen && !isMaintenanceOpen ? styles.somethingOpen : null)} onClick={() => !isSomethingOpen && openMaintenance()}>
                    <img className={styles.icon} src={field} alt='' />
                    <h3>Maintenance</h3>
                </div>
                <div className={cx(styles.ctaItem, isGardeningOpen ? styles.ctaItemOpen : null, isSomethingOpen && !isGardeningOpen ? styles.somethingOpen : null)} onClick={() => !isSomethingOpen && openGardening()}>
                    <img className={styles.icon} src={gardening} alt='' />
                    <h3>Gardening</h3>
                </div>
                <div className={cx(styles.ctaItem, isSnowRemovalOpen ? styles.ctaItemOpen : null, isSomethingOpen && !isSnowRemovalOpen ? styles.somethingOpen : null)} onClick={() => !isSomethingOpen && openSnowRemoval()}>
                    <img className={styles.icon} src={shovel} alt='' />
                    <h3>Snow Removal</h3>
                </div>
                <div className={cx(styles.ctaItem, isLeavesOpen ? styles.ctaItemOpen : null, isSomethingOpen && !isLeavesOpen ? styles.somethingOpen : null)} onClick={() => !isSomethingOpen && openLeaves()}>
                    <img className={styles.icon} src={raking} alt='' />
                    <h3>Leaves</h3>
                </div>
                <div className={cx(styles.ctaItem, isMulchingOpen ? styles.ctaItemOpen : null, isSomethingOpen && !isMulchingOpen ? styles.somethingOpen : null)} onClick={() => !isSomethingOpen && openMulching()}>
                    <img className={styles.icon} src={mulch} alt='' />
                    <h3>Mulching</h3>
                </div>
            </div>


        </div>
    )
}

export default CTAs