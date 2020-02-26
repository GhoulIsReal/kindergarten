import React, { useEffect } from 'react';
import GlobalFonts from './fonts/fonts';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import AboutUs from './components/AboutUs/AboutUs';
import ProgramsHolder from './components/ProgramsHolder/ProgramsHolder';
import { programsCollection, advantageCardsCollection } from './data';
import AdvantagesHolder from './components/AdvantagesHolder/AdvantagesHolder';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';

function App() {
  useEffect(() => {
    window.fetch("http://localhost:3001/");
  })

  return (
    <div className="App">
      <GlobalFonts />
      <Header />
      <Banner />
      <AboutUs />
      <ProgramsHolder programsCollection={programsCollection}/>
      <AdvantagesHolder advantagesCollection={advantageCardsCollection}/>
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;

