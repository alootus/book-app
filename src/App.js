import React, { Component } from 'react';
import Header from './components/Header';
import Slider from './components/Slider';

//import Middlebar from './components/Middlebar';
//import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="tg-wrapper" className="tg-wrapper tg-haslayout">
          <Header></Header>
          <Slider></Slider>
          <p>Testime lehte</p>
          
        </div>
      </div>
    );
  }
}

export default App;
