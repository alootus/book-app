import React from 'react';
import Topbar from './Topbar';
import Middlebar from './Middlebar';
import Navbar from './Navbar';




export class Header extends React.Component {
  render() {
    return (

        <header id="tg-header" class="tg-header tg-haslayout">
        	<Topbar></Topbar>
            <Middlebar></Middlebar>
            <Navbar></Navbar>
        </header>

    );
  }
}

export default Header;