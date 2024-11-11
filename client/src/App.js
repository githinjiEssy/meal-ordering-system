import React, { Component } from 'react';
import './App.css';
import Header from './Componets/Home page/Header';
import About from './Componets/Home page/About';
import PopularDishes from './Componets/Home page/PopularDishes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <About/>
        <PopularDishes/>
      </div>
    );
  }
}

export default App;
