import React from 'react';
import './main.css';
import './footer.css';
import facebook from './icons/facebook.png';
import twitter from './icons/twitter.png';
import linkedin from './icons/linkedin.png';
import instagram from './icons/instagram.png';
import mail from './icons/mail.png';
import call from './icons/call.png';
import location from './icons/location.png';

const Footer = () => {
  return (
    <footer>
      <div className="subscribeBox">
        <input className="poppinsFont" type="email" placeholder="Enter your email" />
        <p className="poppinsFont">SUBSCRIBE</p>
      </div>

      <div className="socialIconsBox">
        <div className="socialIcons">
          <img src={facebook} alt="facebook" />
        </div>
        <div className="socialIcons">
          <img src={twitter} alt="twitter" />
        </div>
        <div className="socialIcons">
          <img src={linkedin} alt="linkedin" />
        </div>
        <div className="socialIcons">
          <img src={instagram} alt="instagram" />
        </div>
      </div>

      <div className="contactBox">
        <div className="contact">
          <img src={mail} alt="mail" />
          <p className="poppinsFont">demo@gmail.com</p>
        </div>

        <div className="contact">
          <img src={call} alt="call" />
          <p className="poppinsFont">(+91 1234567890)</p>
        </div>

        <div className="contact">
          <img src={location} alt="location" />
          <p className="poppinsFont">Location</p>
        </div>
      </div>

      <div className="bar"></div>

      <p className="copyright poppinsFont">© 2020 All Rights Reserved. Design by Shubham Mingwal</p>
    </footer>
  );
}

export default Footer;
