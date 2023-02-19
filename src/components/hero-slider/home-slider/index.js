import HeroSlider, { MenuNav, Overlay, Slide } from "hero-slider";

import Subtitle from "../subtitle";
import Title from "../title";
import Wrapper from "../wrapper";
import backyard from '../../../assets/backyard.jpg';
import commercial from '../../../assets/commercial.jpg';
import home from '../../../assets/house.jpg';
import styles from './style.module.css';
import tools from '../../../assets/tools.jpg';

export default function HomeSlider() {
    return (
        <HeroSlider
            height={"50vh"}
            autoplay
            controller={{
                initialSlide: 1,
                slidingDuration: 200,
                slidingDelay: 100,
                onSliding: (nextSlide) => nextSlide,
                onBeforeSliding: (previousSlide, nextSlide) => ({
                    previousSlide,
                    nextSlide
                }),
                onAfterSliding: (nextSlide) => nextSlide
            }}
        >
            <Slide
                label=<div>
                    <p className={styles.buttonText}>Who We Are</p>
                    <p className={styles.subText}>OVERVIEW</p>
                </div>
                background={{
                    backgroundImageSrc: home
                }}
            >
                <Overlay className={styles.overlay}>
                    <Wrapper>
                        <p className={styles.preTitle}>  Residential and Commerical Landscaping</p>
                        <Title className={styles.title}>Olando Landscaping LLC</Title>
                        <Subtitle className={styles.subTitle}>
                            Professional Landscaping and Maintenance Services
                        </Subtitle>
                        <div className={styles.buttonContainer}>
                            <button className={styles.secondaryBtn}>Get Started</button>
                        </div>
                    </Wrapper>
                </Overlay>
            </Slide>

            <Slide
                label=<div>
                    <p className={styles.buttonText}>Residential</p>
                    <p className={styles.subText}>INDIVIDUALS</p>
                </div>
                background={{
                    backgroundImageSrc: backyard
                }}
            >
                <Overlay>
                    <Wrapper>
                        <Title>Residential</Title>
                        <Subtitle>
                            Lawn Service Plans, Home Maintenance, Pressure Washing
                        </Subtitle>
                        <div className={styles.buttonWrapper}>
                            <button className={styles.primaryBtn}>Learn More</button>
                        </div>
                    </Wrapper>
                </Overlay>
            </Slide>

            <Slide
                label=<div>
                    <p className={styles.buttonText}>Commercial</p>
                    <p className={styles.subText}>BUSINESSES</p>
                </div>
                background={{
                    backgroundImageSrc: commercial
                }}
            >
                <Overlay>
                    <Wrapper>
                        <Title>Businesses</Title>
                        <Subtitle>
                            Lawn Care Services, Snow Removal, Mulching
                        </Subtitle>
                        <div className={styles.buttonWrapper}>
                            <button className={styles.primaryBtn}>Learn More</button>
                        </div>
                    </Wrapper>
                </Overlay>
            </Slide>

            <Slide
                label=<div>
                    <p className={styles.buttonText}>Maintenance</p>
                    <p className={styles.subText}>WHEN THINGS HAPPEN</p>
                </div>
                background={{
                    backgroundImageSrc: tools
                }}
            >
                <Overlay>
                    <Wrapper>
                        <Title>Maintenance</Title>
                        <Subtitle>
                            Driveways, Lights, Leaks, Plumbing
                        </Subtitle>
                        <div className={styles.buttonWrapper}>
                            <button className={styles.primaryBtn}>Learn More</button>
                        </div>
                    </Wrapper>
                </Overlay>
            </Slide>

            <MenuNav mobileThreshold={850} />
        </HeroSlider>
    );
}