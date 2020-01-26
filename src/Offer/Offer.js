import React from 'react';
import OfferImg from '../files/pictures/offer.png';
import './Offer.scss';


export const Offer = () => {
        return (
            <section id="offer">
                <div className="container main-title-section">
                    <h2>OFERTA</h2>
                    <h3>Zapoznaj się z naszą ofertą</h3>
                </div>

                <div className="information-content container">
                    <div className="describe-offer">
                        <div>
                            W naszej ofercie:
                        </div>
                        <ul>
                            <li>oprowadzki konne na kucach i koniach</li> 
                            <li>nauka jazdy konnej na każdym etapie jeździeckim </li>
                            <li>wyjazdy w teren</li>
                            <li>przygotowanie do odznak i zawodów jeździeckich</li>
                            <li>kursy i warsztaty związane z tematyką jeździecką</li> 
                            <li>egzaminy na Popularną Odznakę Turystyki Jeździeckiej</li>
                            <li>możliwość dzierżawy koni</li> 
                            <li>usługi związane z IMPRINTINGIEM źrebiąt</li>
                            <li>zajeżdżalnie i układanie młodych koni pod siodło</li>
                            <li>przygotowanie koni do zawodów jeździeckich</li>
                        </ul>
                        
                        <a href="#price-list"><button className="btn-contact">POKAŻ SZCZEGÓŁY!</button></a>
                        
                    </div>
                    <div className="picture-container picture-container--size">
                        <img src={ OfferImg } alt="about" />
                    </div>
                </div>
            </section>
        );
      }