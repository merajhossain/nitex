import React from 'react';
import HomeSlider from './HomeSlider'
import SummerTour from './SummerTour';
import Footer from './Footer';
import Header from './Header';

const HomePage = () => {
    return (
        <div className="h-100">
            <div className="hero-section-wrapper">
                <Header />
                <HomeSlider />
            </div>
            <SummerTour />
            <Footer />
        </div>
    )
}


export default HomePage;