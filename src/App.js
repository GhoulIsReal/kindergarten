import React, { useEffect, useState } from 'react';
import GlobalFonts from './fonts/fonts';
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
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.fetch("https://morning-sea-25065.herokuapp.com/");
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
  })

  const updateDimensions = () => {
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    setWidth(windowWidth);
  };

  const sidebarCollappsed = width > 1024;


  return (
    <div className="App">
      <GlobalFonts />
      <Header sidebarCollappsed={sidebarCollappsed}/>
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

