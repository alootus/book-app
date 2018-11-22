import React, { Component } from 'react';
import Topbar from './Topbar';
import Middlebar from './Middlebar';
import Navbar from './Navbar';




export class Header extends React.Component {
  render() {
    return (

        <header id="tg-header" className="tg-header tg-haslayout">
        	<Topbar/>
          <Middlebar/>
          <Navbar/>
        </header>

    );
  }
}

export default Header;