import React from 'react';
import GlobalFonts from './fonts/fonts';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (
    <div className="App">
      <GlobalFonts />
      <Header />
      <Banner />
      <AboutUs />
    </div>
  );
}

export default App;
