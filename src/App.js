import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CarosuelWithPhotos } from './CarosuelWithPhotos/CarosuelWithPhotos';
import { Header } from './Header/Header';
import { Menu } from './Menu/Menu';
import { About } from './About/About';

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Menu />
      <CarosuelWithPhotos />
      {/* <About /> */}
      
    </div>
  );
}

export default App;
