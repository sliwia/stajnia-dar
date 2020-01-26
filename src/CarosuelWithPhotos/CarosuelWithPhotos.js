import React from 'react';
import {useState} from 'react';
import { Carousel } from 'react-bootstrap';
import './CarosuelWithPhotos.scss';
import HorseImgFirst from '../files/pictures/horse1.jpg';
import HorseImgSecond from '../files/pictures/horse2.jpg';
import HorseImgThird from '../files/pictures/horse3.jpg';

// example : https://react-bootstrap.github.io/components/carousel/#controlled
export const CarosuelWithPhotos = () => {
        const [index, setIndex] = useState(0);
        const [direction, setDirection] = useState(null);
        const imgsList = [HorseImgFirst, HorseImgSecond, HorseImgThird]
      
        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
          setDirection(e.direction);
        };
        const mainTitle = 'WITAMY NA STRONIE STAJNI \"DAR\"'
        const mainDesc = 'STAJNIA \"DAR\" ZNAJDUJE SIĘ W MALOWNICZEJ LUBELSKIEJ MIEJSCOWOŚCI WÓLKA KRASIENIŃSKA POŁOŻONEJ NA OBRZEŻACH LUBLINA. NASZA OFERTA PRZEZNACZONA JEST ZARÓWNO DLA OSÓB ZACZYNAJĄCYCH SWOJĄ PRZYGODĘ Z KOŃMI, JAK I DLA ZAAWANSOWANYCH. ZAJĘCIA PROWADZIMY NA OTWARTEJ UJEŻDŻALNI.'
      
        return (
          <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
            {
              imgsList.map((img, index) => {
                return (
                  <Carousel.Item key={index}>
                    <div className="shadow-box"></div>
                    <img
                      className="d-block w-100 carosuel-photo"
                      src={img}
                      height={700}
                      height={700}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <div className="carousel-content">
                        <h1 className="main-title-carousel">{mainTitle}</h1>
                        <p className="main-desc-text">{mainDesc}</p>
                        <button className="btn-offer">ZAPOZNAJ SIĘ Z NASZĄ OFERTĄ</button>
                      </div>
                     
                    </Carousel.Caption>
                  </Carousel.Item>
                )
              })
            }
          </Carousel>
        );
      }

