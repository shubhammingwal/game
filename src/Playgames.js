import React from 'react';
import './playgames.css';
import './main.css';
import pokerIcon from './icons/poker-icon.png';
import play1 from './images/play-1.png';
import play2 from './images/play-2.png';
import play3 from './images/play-3.png';
import play4 from './images/play-4.png';


const PlayGames = () => {
    return (
        <div className="howToPlay colorWhite" id="play">
            <div className="pokerIconHead">
                <img className="pokerIcon" src={pokerIcon} alt="poker icon" />
                <h1>HOW TO PLAY CASINO</h1>
            </div>
            <p className="pStyle">There are many variations of passages of Lorem Ipsum available, but the majority have
                suffered alteration in some form, by injected humour, or randomised words which don't look even
                slightly believable</p>

            <div className="playCardCont">               
                <div className="playCard">
                    <a href="#" className="top">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className="playCardImg">
                            <img src={play1} alt="play icon" />
                            <p>Register Info</p>
                        </div>
                    </a>
                </div>
                <div className="playCard">
                    <a href="#" className="top">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className="playCardImg">
                            <img src={play2} alt="play icon" />
                            <p>Deposit Your Money</p>
                        </div>
                    </a>
                </div>
                <div className="playCard">
                    <a href="#" className="top">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className="playCardImg">
                            <img src={play3} alt="play icon" />
                            <p>14 Days Free</p>
                        </div>
                    </a>
                </div>
                <div className="playCard">
                    <a href="#" className="top">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className="playCardImg">
                            <img src={play4} alt="play icon" />
                            <p>Play Online</p>
                        </div>
                    </a>
                </div>
            </div>

            <div className="fillButton" style={{ backgroundColor: '#bf3d41' }}>Read More</div>
        </div>
    );
};

export default PlayGames;
