import React from 'react';
import './Footer.scss';
import LocationIcon from '../files/icons/location-white.svg';
import PhoneIcon from '../files/icons/phone-white.svg';


export const Footer = () => {
    const iconWidth = '15px';
    const iconHeight = '15px';
    return (
        <footer >
            <div className="footer-content">
                <div className="footer__element--visibility">
                    <img src={ LocationIcon } alt="location-icon" width={iconWidth} height={iconHeight}/>
                    <span>Wólka Krasienińska 8, 21-132 Wólka Krasienińska</span>
                </div>
                <div className="footer__element--visibility">
                    <img src={ PhoneIcon } alt="phone-icon" width={iconWidth} height={iconHeight}/>
                    <span>668 750 633</span>
                </div>
                <span>STAJNIA DAR &copy; 2020</span>
            </div>
        </footer>
    );
}