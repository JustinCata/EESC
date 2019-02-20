import React, { Component } from 'react';
import Logo from './assets/EmpireColor.jpeg';
import './css/navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: '#Services',
      licenses: '#Licenses',
      projects: '#Projects'
    }
  }
  componentDidMount() {
    let path = this.props.match.path;
    if (path === '/contact') {
      this.setState({ 
        services: 'https://empireesc.com/#Services',
        licenses: 'https://empireesc.com/#Licenses',
        projects: 'https://empireesc.com/#Projects'
      })
    }
  }
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
            <a href="/" className="navbar-brand"><img className="MetaNav" src={Logo} alt="Logo" /></a>
            </div>
            <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
                <li><a id="nav-services" className="js-scroll-trigger" href={this.state.services}>Services</a></li>
                <li><a id="nav-licenses" className="js-scroll-trigger" href={this.state.licenses}>Licenses</a></li>
                <li><a id="nav-projects" className="js-scroll-trigger" href={this.state.projects}>Projects</a></li>
                <li><a id="nav-faq" className="js-scroll-trigger" href="/contact">Contact Us</a></li>
                <li><a className="js-scroll-trigger" href="tel:3058855255">305.885.5255</a></li>
            </ul>
            </div>
        </div>
        </nav>

    );
  }
}

export default Navbar;
