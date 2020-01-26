import React from 'react'
import L from 'leaflet';
import './MapContainer.css';


const latitudeLongitude = [51.412422,22.4674643]
class MapContainer extends React.Component {
  
  componentDidMount() {
    let myMap = L.map('map-id', {
      center: latitudeLongitude,
      zoom: 15,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
      ]
    });
    
    let marker = L.marker(latitudeLongitude).addTo(myMap);
    marker.bindPopup(`<b>STAJNIA DAR</b>`).openPopup();
  }

  render() {
    return <div id="map-id" className="map-container"></div>
  }
}
    

export default MapContainer;
