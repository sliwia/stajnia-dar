import React from 'react';
import './Header.scss';
import HorseImgFirst from '../files/pictures/favicon.svg';



export const Header = () => {
        return (
            <header>
                <img
                    src={HorseImgFirst}
                    height={40}
                    height={40}
                    alt="Logo"
                />
                <h3>Witamy na stronie Stajni Dar</h3>
                <img
                    src={HorseImgFirst}
                    className="transform-img"
                    height={40}
                    height={40}
                    alt="Logo"
                />
            </header>
              
        );
      }