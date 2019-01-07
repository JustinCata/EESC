import React, { Component } from 'react';
import Logo from './assets/Logos/color_logo.png';
import './css/navbar.css';

class Navbar extends Component {

  render() {
    return (

        <nav className="Navbar navbar navbar-inverse navbar-fixed-top">
        <div className="container">
            <div className="navbar-header">
            <button type="button" id="hamburger" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand"><img className="MetaNav" src={Logo} alt="Logo" /></a>
            </div>
            <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
                <li><a id="nav-how" className="js-scroll-trigger" href="#Services">Services</a></li>
                <li><a id="nav-what" className="js-scroll-trigger" href="#Licenses">Licenses</a></li>
                <li><a id="nav-who" className="js-scroll-trigger" href="#WHO">Projects</a></li>
                <li><a id="nav-faq" className="js-scroll-trigger" href="#FAQ">Contact Us</a></li>
                <li><a id="nav-signup" className="js-scroll-trigger" href="#SIGNUP">786.488.8657</a></li>
            </ul>
            </div>
        </div>
        </nav>

    );
  }
}

export default Navbar;
