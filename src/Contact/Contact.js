import React from 'react';
import './Contact.scss';
import LocationIcon from '../files/icons/location.svg';
import PhoneIcon from '../files/icons/call-answer.svg';
import MailIcon from '../files/icons/mail.svg';


export const Contact = () => {
    const iconWidth = '20px';
    const iconHeight = '20px';
    return (
        <section id="contact">
            <div className="container main-title-section">
                <h2>KONTAKT</h2>
                <h3></h3>
            </div>

            <div className="container contact-items">
            <div>
                <img src={ LocationIcon } alt="location-icon" width={iconWidth} height={iconHeight}/>
                <span>Wólka Krasienińska 8</span>
                <span className="post-code">21-132 Wólka Krasienińska</span>
            </div>

            <div>
                <img src={ PhoneIcon } alt="phone-icon" width={iconWidth} height={iconHeight}/>
                <span>668 750 633</span>
            </div>

            <div >
                <img src={ MailIcon } alt="mail-icon" width={iconWidth} height={iconHeight}/>
                <span>stajniadar@gmail.com</span>
            </div>

            </div>

            <div className="map-content" >
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10902.34461426478!2d22.458613921652308!3d51.41154807720725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4722431d52e582c3%3A0x3e89889797d1a902!2sStajnia%20Dar!5e0!3m2!1spl!2spl!4v1580051108577!5m2!1spl!2spl" 
                        style={{ width: "100%", height: "100%"}}
                        frameBorder="0">
                </iframe>
            </div>
        </section>
    );
}