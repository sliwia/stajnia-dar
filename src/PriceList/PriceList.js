import React from 'react';
import PriceListImg from '../files/pictures/price.jpg';
import './PriceList.scss';


export const PriceList = () => {
    const servicesList = {
        'Oprowadzki konne na kucach i koniach':'50zł/h',
        'Nauka jazdy konnej':'50zł/h',
        'Wyjazdy w teren':'50zł/h',
        'Przygotowanie do odznak i zawodów jeździeckich':'50zł/h',
        'Warsztaty związane z tematyką jeździecką':'50zł/h',
        'Egzaminy na Popularną Odznakę Turystyki Jeździeckiej':'50zł/h',
        'Dzierżawa koni':'50zł/h',
        'Usługi związane z IMPRINTINGIEM źrebiąt':'50zł/h',
        'Zajeżdżalnie i układanie młodych koni pod siodło':'50zł/h',
        'Przygotowanie koni do zawodów jeździeckich':'50zł/h',

    }

    return (
        <section id="price-list">
            <div className="container main-title-section">
                <h2>CENNIK</h2>
                {/* <h3>Zapoznaj się z naszą ofertą</h3> */}
            </div>
            <div className="information-content container">
                <div className="services-desc-price">

                    {
                        Object.entries(servicesList).map((element,index) => {
                            return (
                                <>
                                <div key={index} className="services-desc-price__single-row">
                                    <span>{element[0]}</span>
                                    <span>{element[1]}</span>
                                </div>
                                <span className="gold-line"></span>
                                </>
                            )
                        })
                    }
                </div>

                
                <div className="picture-container picture-container--size">
                    <img src={ PriceListImg } alt="about" />
                </div>
            </div>
        </section>
    );
}