import React from 'react';
import './Footer.scss';
import MapContainer from '../MapContainer/MapContainer';



export const Footer = () => {
        return (
            <footer >
                <div className="map-modal">
                    <MapContainer />
                </div>
    
                <div >
                
                    <span>STAJNIA DAR &copy; 2020</span>
                </div>
            </footer>
            
        );
      }