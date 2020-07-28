import React from 'react';
import HomeSlider from './HomeSlider'
import SummerTour from './SummerTour';
import Footer from './Footer';
import Container from 'react-bootstrap/Container'
import Header from './Header';

const HomePage = () => {
    return (
        <div className="h-100">
            <Header />
            <HomeSlider />
            <SummerTour />
            <Footer />
        </div>
    )
}


export default HomePage;