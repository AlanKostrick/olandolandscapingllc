import CTAs from '../../components/home/ctas';
import HomeSlider from '../../components/hero-slider/home-slider';
import React from 'react';
import Reviews from '../../components/home/reviews';
import Slogan from '../../components/home/slogan';

const HomePage = () => {
    return (
        <>
            <HomeSlider />
            <Slogan />
            <CTAs />
            <Reviews />
        </>
    )
}

export default HomePage;