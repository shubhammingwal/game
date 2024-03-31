import React from 'react';
import './main.css';
import './about.css';
import pokerIcon from './icons/poker-icon.png';
import aboutImg from './images/About-Img.jpg';


const About = () => {
    return (
        <div className="about" id="about">
            <div className="aboutTxt">
                <div className="pokerIconHead">
                    <img className="pokerIcon" src={pokerIcon} alt="poker icon" />
                    <h1>ABOUT OUR CASINO</h1>
                </div>
                <p className="pStyle">It is a long established fact that a reader will be distracted by the readable content
                    of a page when
                    looking at its layout. The point of using Lorem Ipsum</p>
                <p className="pStyle">It is a long established fact that a reader will be distracted by the readable content
                    of a page when
                    looking at its layout. The point of using Lorem Ipsum</p>
                <div className="fillButton colorWhite" style={{ backgroundColor: '#bf3d41' }} >Read More</div>
            </div>

            <div className="aboutImg">
                <img src= {aboutImg} alt="About Image" />
            </div>
        </div>
    );
};

export default About;
