import React from 'react';
import './main.css';
import './pricing.css';
import pokerIcon from './icons/poker-icon.png';


const Pricing = () => {
    return (
        <div className="casinoPrice" id="price">
            <div className="pokerIconHead">
                <img className="pokerIcon" src={pokerIcon} alt="poker icon" />
                <h1>Our Casino Price</h1>
            </div>
            <p className="pStyle">There are many variations of passages of Lorem Ipsum available, but the majority have
                suffered alteration in some form, by injected humour, or randomised words which don't look even
                slightly believable</p>

            <div className="priceCardCont">
                <div className="priceCard">
                    <div className="priceCardTxt">
                        <div className="borderHover"></div>
                        <h1 className="poppinsFont">Basic Plan</h1>
                        <h1 className="poppinsFont">$<span className="poppinsFont">15</span>/<span
                                className="poppinsFont">Month</span></h1>
                        <p>Lorem Ipsum available, but the majority</p>
                    </div>
                    <div className="fillButton  colorWhite" style={{ backgroundColor: '#bf3d41' }}>Buy Now</div>
                </div>

                <div className="priceCard">
                    <div className="priceCardTxt">
                        <div className="borderHover"></div>
                        <h1 className="poppinsFont">Standard Plan</h1>
                        <h1 className="poppinsFont">$<span className="poppinsFont">25</span>/<span
                                className="poppinsFont">Month</span></h1>
                        <p>Lorem Ipsum available, but the majority</p>
                    </div>
                    <div className="fillButton  colorWhite" style={{ backgroundColor: '#bf3d41' }}>Buy Now</div>
                </div>

                <div className="priceCard">
                    <div className="priceCardTxt">
                        <div className="borderHover"></div>
                        <h1 className="poppinsFont">Premium Plan</h1>
                        <h1 className="poppinsFont">$<span className="poppinsFont">35</span>/<span
                                className="poppinsFont">Month</span></h1>
                        <p>Lorem Ipsum available, but the majority</p>
                    </div>
                    <div className="fillButton  colorWhite" style={{ backgroundColor: '#bf3d41' }}>Buy Now</div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;
