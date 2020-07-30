import React from 'react';
import Header from './Header';
import HomeSlider from './HomeSlider';
import Footer from './Footer';

const AppLayout = props => {


    
    return (
        <div className="h-100">
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}


export default AppLayout;