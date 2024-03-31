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
                    <div className="playCardImg">
                        <img src={play1} alt="play icon" />
                    </div>
                    <p>Register Info</p>
                </div>
                <div className="playCard">
                    <div className="playCardImg">
                        <img src={play2} alt="play icon" />
                    </div>
                    <p>Deposit Your Money</p>
                </div>
                <div className="playCard">
                    <div className="playCardImg">
                        <img src={play3} alt="play icon" />
                    </div>
                    <p>14 Days Free</p>
                </div>
                <div className="playCard">
                    <div className="playCardImg" style={{padding: '28px 59px'}}>
                        <img src={play4} alt="play icon" />
                    </div>
                    <p>Play Online</p>
                </div>
            </div>

            <div className="fillbutton">Read More</div>
        </div>
    );
};

export default PlayGames;
