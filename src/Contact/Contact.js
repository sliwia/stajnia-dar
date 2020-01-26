import React from 'react';
import './Contact.scss';
import LocationIcon from '../files/icons/location.svg';
import PhoneIcon from '../files/icons/call-answer.svg';
import MailIcon from '../files/icons/mail.svg';



export const Contact = () => {
    return (
        <section id="contact">
            <div className="container main-title-section">
                <h2>KONTAKT</h2>
                <h3></h3>
            </div>

            <div className="container contact-items">
            <div>
                <img src={ LocationIcon } alt="location-icon" width={'20px'} height={'20px'}/>
                <span>Wólka Krasienińska 8</span>
                <span className="post-code">21-132 Wólka Krasienińska</span>
            </div>
            <div>
                <img src={ PhoneIcon } alt="phone-icon" width={'20px'} height={'20px'}/>
                <span>668 750 633</span>
            </div>
            <div >
                <img src={ MailIcon } alt="mail-icon" width={'40px'} height={'40px'}/>
                <span>stajniadar@gmail.com</span>
            </div>
            </div>
                
            <div className="map-content" >
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2488.486515976555!2d22.46752121576651!3d51.41248897961955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47224302af3c18bb%3A0xe27bed718867f4d7!2zV8OzbGthIEtyYXNpZW5pxYRza2EgOCwgMjEtMTMyIFfDs2xrYSBLcmFzaWVuacWEc2th!5e0!3m2!1spl!2spl!4v1579985630515!5m2!1spl!2spl" 
                        style={{ width: "100%", height: "100%"}}
                        frameBorder="0">
                </iframe>
            </div>
        </section>
        
    );
      }