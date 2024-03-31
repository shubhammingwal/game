import React from 'react';
import './main.css';
import './carousel.css';
import backgroundImage from './images/background-image.jpg';
const Carousel = () => {
    return (
        <div className="carousel width100 colorWhite" id="home" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <p>WELCOME TO</p>
            <div className="h1"><div>GAMING</div><div>GAMING</div></div>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout. The point of using Lorem Ipsum</p>
            {/* hover class for transition effect */}
            <div className="button"><div className="hover"></div><p>BOOK NOW</p></div>
            <div className="selectorCont">
                <div className="selector"></div>
                <div className="selector"></div>
                <div className="selector"></div>
                <div className="selector"></div>
            </div>
        </div>
    );
}

export default Carousel;
