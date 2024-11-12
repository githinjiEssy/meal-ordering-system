import React, { Component } from 'react';
import './App.css';
import Header from './Componets/Home page/Header';
import About from './Componets/Home page/About';
import PopularDishes from './Componets/Home page/PopularDishes';
import Testimonials from './Componets/Home page/Testimonials';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <About/>
        <PopularDishes/>
        <Testimonials/>
      </div>
    );
  }
}

export default App;
