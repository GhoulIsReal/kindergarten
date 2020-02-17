import React from 'react';
import GlobalFonts from './fonts/fonts';
import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner/Banner';

function App() {
  return (
    <div className="App">
      <Banner />
        <GlobalFonts />
    </div>
  );
}

export default App;
