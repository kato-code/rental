import React from 'react';
import './App.css';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import NewProduct from '../NewProduct/NewProduct';
import Catalog from '../Catalog/Catalog';


function App() {
  return (
    <div className="app">
      <div className='app__container'>
        <Header />
        <NewProduct />
        <Catalog />
        <Footer />
      </div>
    </div>
  );
}

export default App;
