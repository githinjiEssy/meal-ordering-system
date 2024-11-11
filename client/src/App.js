import React, { Component } from 'react';
import './App.css';
import Header from './Componets/Home page/Header';
import About from './Componets/Home page/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <About/>
      </div>
    );
  }
}

export default App;
