import React from 'react';
import './App.css';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';


function App() {
  return (
    <div className="app">
      <div className='app__container'>
        <Header />
        <Footer />
      </div>
    </div>
  );
}

export default App;
