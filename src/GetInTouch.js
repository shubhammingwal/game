import React from 'react';
import './main.css';
import './getintouch.css';
import pokerIcon from './icons/poker-icon.png';
import map from './images/map.png';
const GetInTouch = () => {
  return (
    <div className="getInTouch" id="contact">
      <div className="pokerIconHead">
        <img className="pokerIcon" src={pokerIcon} alt="poker icon" />
        <h1>Get In touch</h1>
      </div>
      <div className="formBox">
        <form className="form">
          <input type="text" placeholder="Name" required />
          <input type="tel" placeholder="Phone Number" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Select games" required />
          
          <textarea className="textarea" placeholder="Message" required />
          <button className="fillButton" type="submit" style={{ backgroundColor: '#bf3d41' }}>Send</button>
        </form>
        <div className="mapImg">
          <img src={map} alt="map img" />
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
