import React, { useState } from 'react';

import Collapsible from 'react-collapsible';
import { animateScroll } from 'react-scroll';
import backyard from '../../../assets/backyard.jpg';
import cx from 'classnames';
import deck from '../../../assets/deck.png';
import field from '../../../assets/field.png';
import fix from '../../../assets/fix.jpg';
import fix2 from '../../../assets/fix2.jpg';
import garden2 from '../../../assets/garden2.jpg';
import gardening from '../../../assets/gardening.png';
import lawnCare from '../../../assets/lawn-care.jpg';
import lawnCare2 from '../../../assets/lawncare2.jpg';
import lawnCare3 from '../../../assets/lawncare3.jpg';
import lawnmower from '../../../assets/lawnmower.png';
import maintenance from '../../../assets/maintenance.png';
import mulch from '../../../assets/wheel-barrow.png';
import mulch2 from '../../../assets/mulch2.jpg';
import mulch3 from '../../../assets/mulch3.png';
import mulching from '../../../assets/mulch.png';
import patio2 from '../../../assets/patio2.jpg';
import pavers from '../../../assets/pavers.jpg';
import pavers2 from '../../../assets/pavers2.png';
import paving from '../../../assets/paving.png';
import pressureWasher from '../../../assets/pressure-washer.png';
import rake from '../../../assets/rake.png';
import raking from '../../../assets/raking.png';
import sawing from '../../../assets/sawing.png';
import shovel from '../../../assets/shovel.png';
import sidewalk from '../../../assets/sidewalk.png';
import siding from '../../../assets/siding.png';
import styles from './style.module.css';
import trimming from '../../../assets/trimming.jpg';
import { useLocation } from 'react-router-dom';

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
        animateScroll.scrollToBottom();
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
        animateScroll.scrollToBottom();
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
        animateScroll.scrollToBottom();
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
        animateScroll.scrollToBottom();
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
        animateScroll.scrollToBottom();
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
        animateScroll.scrollToBottom();
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
        animateScroll.scrollToBottom();
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
        animateScroll.scrollToBottom();
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
        animateScroll.scrollTo(700);
    }




    return (
        <div>
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
            {location.pathname === '/services' && <div className={styles.infoContainer}>
                <Collapsible open={isLawnServiceOpen}>
                    <div className={styles.collapsibleContainer}>
                        <h1>Lawn Services</h1>
                        <img src={lawnCare} alt='' />
                        <img src={lawnCare2} alt='' />
                        <img src={lawnCare3} alt='' />
                        <div>We offer flexible plans to meet your lawn care needs. From mowing to trimming and edging,
                            Olando Landscaping LLC makes it easy to have a well-manicured yard. We will work with you to arrange the
                            appropriate services you need. Contact us today for more information and to schedule your
                            mowing and lawn care services.
                        </div>
                        <button onClick={() => closeAll()}>X</button>
                    </div>
                </Collapsible>
                <Collapsible open={isHardscapesOpen}>
                    <div className={styles.collapsibleContainer}>
                        <h1>Patios, Porch & Walkways</h1>
                        <img src={pavers} alt='' />
                        <img src={pavers2} alt='' />
                        <img src={patio2} alt='' />
                        <div>Our experience with concrete materials means we can help you create a custom decorative concrete surface perfect for your project.
                            Using a variety of colors, stains, stamps, and patterns, we can create a unique surface for your patio, walkways, or retaining walls.
                            We can give you a unique look for your next concrete project, create a distinct style for your outdoor areas, and match your existing decor.
                            If you're looking to repair or upgrade your outdoor areas, contact Olando Landscaping LLC and let us tell you more about how we can help.
                        </div>
                        <button onClick={() => closeAll()}>X</button>
                    </div>
                </Collapsible>
                <Collapsible open={isPressureWashingOpen}>
                    <div className={styles.collapsibleContainer}>
                        <h1>Pressure Washing</h1>
                        <img src={siding} alt='' />
                        <img src={deck} alt='' />
                        <img src={sidewalk} alt='' />
                        <div>Pressure washing is an extremely affordable and efficient way to maintain the exterior of homes and businesses.
                            Siding maintenance is extremely important in the harsh local climate. Over time, algae and dirt can begin to degrade exterior surface materials.
                            If these contaminants are not cleaned and removed from the property, they may become extremely dirty and lead to costly repairs; even replacement.
                            Our specialty solutions reach deep into the surface to safely break down and rinse away mold, mildew, and other damaging material.
                            Our low-pressure chemical soft washing application process is extremely safe for any siding material, and the environment. Not only are you protecting the service life of your siding, but also maintaining and promoting a clean property.
                            Your pavement driveways, walkways, and concrete retaining walls are no different.
                            Mold, mildew, grime, oil, grease, dirt, and other foreign matter can build up over time and may make surfaces unattractive or dangerous.
                            Our professional technicians have the experience and equipment to complete a variety of residential and commercial pressure washing projects throughout the region.
                        </div>
                        <button onClick={() => closeAll()}>X</button>
                    </div>
                </Collapsible>
                <Collapsible open={isMaintenanceOpen}>
                    <div className={styles.collapsibleContainer}>
                        <h1>Maintenance</h1>
                        <img src={maintenance} alt='' />
                        <img src={fix} alt='' />
                        <img src={fix2} alt='' />
                        <div>We are proud to offer some of the most experienced and well-trained team members in the area. Each member of our staff is fully capable of
                            assisting with your projects from start to finish and to make sure the job is completed efficiently and correctly.
                            We take our industry seriously and understand that you have several options available. We appreciate the opportunity to
                            show you how we stand out from our competitors and want to earn your recommendation and future business. Contact us today with your questions
                            and let us help you get started.
                        </div>
                        <button onClick={() => closeAll()}>X</button>
                    </div>
                </Collapsible>
                <Collapsible open={isGardeningOpen}>
                    <div className={styles.collapsibleContainer}>
                        <h1>Gardening</h1>
                        <img src={trimming} alt='' />
                        <img src={garden2} alt='' />
                        <img src={backyard} alt='' />
                        <div>Whether you’re looking to revive your existing landscape or to create a completely new look, Olando Landscaping LLC can help make your dreams a reality.
                            Put our experienced team to work on your landscaping project to create a beautiful outdoor space for you and your family to enjoy. We have the experience, staff,
                            and equipment to manage projects of any size and will help your home or business stand out
                        </div>
                        <button onClick={() => closeAll()}>X</button>
                    </div>
                </Collapsible>
                <Collapsible open={isSnowRemovalOpen}>
                    <div className={styles.collapsibleContainer}>
                        <h1>Snow Removal</h1>
                        <img src={trimming} alt='' />
                        <img src={garden2} alt='' />
                        <img src={backyard} alt='' />
                        <div>If you have a business, keeping parking lots free of snow and ice is of the upmost importance. So is having clean walkways for your employees and your team.
                            We are standing by and ready to provide any winter weather cleanup services you may need.
                        </div>
                        <button onClick={() => closeAll()}>X</button>
                    </div>
                </Collapsible>
                <Collapsible open={isLeavesOpen}>
                    <div className={styles.collapsibleContainer}>
                        <h1>Yard Cleanup</h1>
                        <img src={trimming} alt='' />
                        <img src={sawing} alt='' />
                        <img src={rake} alt='' />
                        <div>Get ready for the changing seasons with clean up services from Olando Landscaping LLC. A clean outdoor space not only looks nice, it also makes it
                            easier to keep your lawn and outdoor plants happy and healthy. Let Olando Landscaping LLC help you achieve or maintain a great looking outdoor
                            space and happy outdoor plants with professional spring or fall clean up services. We will help remove excess debris and litter from your lawn and
                            landscaping and prepare your lawn for a great growing season. Contact us today to discuss your clean up needs or to schedule a service appointment.


                        </div>
                        <button onClick={() => closeAll()}>X</button>
                    </div>
                </Collapsible>
                <Collapsible open={isMulchingOpen}>
                    <div className={styles.collapsibleContainer}>
                        <h1>Mulching</h1>
                        <img src={mulching} alt='' />
                        <img src={mulch2} alt='' />
                        <img src={mulch3} alt='' />
                        <div>
                            We are proud of the reputation we've built upon consistent, repeatable results. We are proud that many of our previous clients continue to
                            come to us with new projects. We treat every project as an opportunity to earn your recommendation and your continued business.
                            Our team is highly motivated to make sure your project is successful and you can continue to apply solutions to continue to seek further growth,
                            success, and exceed your goals. We do this with a consistent application of best practices and experience in the industry to ensure results are
                            repeatable each time.
                        </div>
                        <button onClick={() => closeAll()}>X</button>
                    </div>
                </Collapsible>
            </div>
            }
        </div>
    )
}

export default CTAs