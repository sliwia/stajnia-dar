import React from 'react';
import './Footer.scss';
import LocationIcon from '../files/icons/location-white.svg';
import PhoneIcon from '../files/icons/phone-white.svg';


export const Footer = () => {
    return (
        <footer >
            <div className="footer-content">
                <div>
                    <img src={ LocationIcon } alt="location-icon" width={'20px'} height={'20px'}/>
                    <span>Wólka Krasienińska 8, 21-132 Wólka Krasienińska</span>
                </div>
                <div>
                    <img src={ PhoneIcon } alt="phone-icon" width={'20px'} height={'20px'}/>
                    <span>668 750 633</span>
                </div>
                <span>STAJNIA DAR &copy; 2020</span>
            </div>
        </footer>
        
    );
      }