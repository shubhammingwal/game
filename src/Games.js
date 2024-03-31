import React from 'react';
import './main.css';
import './games.css';
import pokerIcon from './icons/poker-icon.png';
import gameOne from './images/game-1.jpg';


const Games = () => {
  return (
    <div className="allGames" id="allGames">
      <div className="pokerIconHead">
        <img className="pokerIcon" src={pokerIcon} alt="poker icon" />
        <h1>ALL GAMES HERE</h1>
      </div>
      <p className="pStyle">established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>

      <div className="gamesCardCont">
        <div className="gamesCard">
          <div className="gamesCardImgTxt">
            <div className="gamesImg">
              <img src={gameOne} alt="game-1" />
              <div className="gamesIndex poppinsFont">01</div>
            </div>
            <h1 className="poppinsFont">GAME</h1>
            <p className="poppinsFont">There are many variations of passages of Lorem Ipsum available, but the</p>
          </div>
          <div className="playButton">Play Now</div>
        </div>

        <div className="gamesCard">
          <div className="gamesCardImgTxt">
            <div className="gamesImg">
              <img src={gameOne} alt="game-1" />
              <div className="gamesIndex poppinsFont">02</div>
            </div>
            <h1 className="poppinsFont">GAME</h1>
            <p className="poppinsFont">There are many variations of passages of Lorem Ipsum available, but the</p>
          </div>
          <div className="playButton unfillPlayButton">Play Now</div>
        </div>

        <div className="gamesCard">
          <div className="gamesCardImgTxt">
            <div className="gamesImg">
              <img src={gameOne} alt="game-2" />
              <div className="gamesIndex poppinsFont">03</div>
            </div>
            <h1 className="poppinsFont">GAME</h1>
            <p className="poppinsFont">There are many variations of passages of Lorem Ipsum available, but the</p>
          </div>
          <div className="playButton unfillPlayButton">Play Now</div>
        </div>

        <div className="gamesCard">
          <div className="gamesCardImgTxt">
            <div className="gamesImg">
              <img src={gameOne} alt="game-1" />
              <div className="gamesIndex poppinsFont">04</div>
            </div>
            <h1 className="poppinsFont">GAME</h1>
            <p className="poppinsFont">There are many variations of passages of Lorem Ipsum available, but the</p>
          </div>
          <div className="playButton unfillPlayButton">Play Now</div>
        </div>
      </div>
    </div>
  );
};

export default Games;
