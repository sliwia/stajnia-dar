import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CarosuelWithPhotos } from './CarosuelWithPhotos/CarosuelWithPhotos';
import { Menu } from './Menu/Menu';
import { About } from './About/About';
import { AboutTrainer } from './AboutTrainer/AboutTrainer';
import { Offer } from './Offer/Offer';
import { PriceList } from './PriceList/PriceList';
import { Footer } from './Footer/Footer';
import { Contact } from './Contact/Contact';

function App() {
  return (
    <div>
      <Menu />
      <CarosuelWithPhotos />
      <About />
      <AboutTrainer />
      <Offer />
      <PriceList />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
