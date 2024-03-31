import React from 'react';
import './main.css';
import './customer.css';
import pokerIcon from './icons/poker-icon.png';
import customerImg from './images/customer-img.png';
import leftQuote from './icons/left-quote.png';
import rightQuote from './icons/right-quote.png';
const Customer = () => {
  return (
    <div className="customer" id="review">
      <div className="pokerIconHead">
        <img className="pokerIcon" src="./public/icons/poker-icon.png" alt="poker icon" />
        <h1>What Is Says Our Customer</h1>
      </div>

      <div className="customerBox">
        <div className="arrowBox leftArrow">
          <img src="./public/images/arrow.png" alt="left arrow" />
        </div>

        <div className="customerImg">
          <img src="./public/images/customer-img.png" alt="customer image" />
        </div>

        <h1>Jone Mark</h1>
        <p><img src="./public/icons/left-quote.png" alt="left quote"/> Lorem ipsum dolor sit amet, <img src="./public/icons/right-quote.png" alt="right quote"/></p>
        <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
        <div className="arrowBox rightArrow">
          <img src="./public/images/arrow.png" alt="right arrow" />
        </div>
      </div>
    </div>
  );
}

export default Customer;
