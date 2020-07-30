import React from 'react';
import SummerTour from './SummerTour';
import AppLayout from './AppLayout';
import HomeSlider from './HomeSlider';
import SpecialMessage from './SpecialMessage';
import ServicesPart from './ServicesPart';

const HomePage = () => {
    return (
        <AppLayout>
            <div className="hero-section-wrapper">
                <HomeSlider />
            </div>
            <SummerTour />
            <SpecialMessage />
            <ServicesPart />
        </AppLayout>
    )
}


export default HomePage;