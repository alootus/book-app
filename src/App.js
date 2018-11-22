import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

import Header from './components/Header';
import Slider from './components/Slider';
import Loginpage from './components/Loginpage';
import Signuppage from './components/Signuppage';
import Contact from './components/Contact';
import Footer from './components/Footer';

//import Middlebar from './components/Middlebar';
//import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div id="tg-wrapper" className="tg-wrapper tg-haslayout">
            <Route path='/' exact component={Header} />
            <Route path='/user' exact component={Header} />
            <Route path='/signin' exact component={Loginpage} />
            <Route path='/signup' exact component={Signuppage} />
            <Route path='/contact' exact component={Contact} />
            <Route path='/' exact component={Footer} />

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
