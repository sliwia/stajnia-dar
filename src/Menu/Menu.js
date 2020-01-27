import React from 'react';
import './Menu.scss';


export const Menu = () => {
    return (
        <div id="menu-container">
            <nav id="multi-drop-menu" role="navigation">
                <ul>
                    <li><a href="#">Strona główna</a></li>
                    <span className="big-dot"></span>
                    <li><a href="#about">O nas</a>
                        <ul className="sub-menu" aria-label="submenu">
                            <li><a href="#about">Stajnia</a></li>
                            <li><a href="#about-trainer">Instruktor</a></li>
                        </ul>
                    </li>
                    <span className="big-dot"></span>
                    <li><a style={{cursor: 'not-allowed',opacity: 0.6}}>Wydarzenia</a></li>
                    <span className="big-dot"></span>
                    <li><a style={{cursor: 'not-allowed',opacity: 0.6}}>Galeria</a></li>
                    <span className="big-dot"></span>
                    <li><a href="#offer">Oferta</a></li>
                    <span className="big-dot"></span>
                    {/* <li><a style={{cursor: 'not-allowed',opacity: 0.6}}>E-rezerwacje</a></li>
                    <span className="big-dot"></span> */}
                    <li><a href="#price-list">Cennik</a></li>
                    <span className="big-dot"></span>
                    <li><a href="#contact">Kontakt</a></li>
                </ul>
            </nav>
        </div>
        
    );
}