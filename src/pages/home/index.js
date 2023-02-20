import CTAs from '../../components/home/ctas';
import HomeSlider from '../../components/hero-slider/home-slider';
import React from 'react';
import Reviews from '../../components/home/reviews';
import Slogan from '../../components/home/slogan';
import styles from './style.module.css';

const HomePage = () => {
    return (
        <div className={styles.container}>
            <HomeSlider />
            <Slogan />
            <CTAs />
            <Reviews />
        </div>
    )
}

export default HomePage;