import React from 'react';
import GlobalFonts from './fonts/fonts';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import AboutUs from './components/AboutUs/AboutUs';
import ProgramsHolder from './components/ProgramsHolder/ProgramsHolder';
import programsCollection from './data';


function App() {
  return (
    <div className="App">
      <GlobalFonts />
      <Header />
      <Banner />
      <AboutUs />
      <ProgramsHolder programsCollection={programsCollection}/>
    </div>
  );
}

export default App;
