import React, { Component } from 'react';
import axios from 'axios'
import Navbar from './components/Navbar';

import BannerDemo from './components/BannerDemo';
import Services from './components/Services';
import Footer from './components/Footer';
import './App.css';
import Licenses from './components/Licenses';
import phone from './components/assets/phone.png';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: ''
    };
  }
  componentDidMount() {
    
  }
  render() {
    return (
      <div className="App">
        <a id="phone" href="tel:7864888657">
          <img  src={phone} />
        </a>
        <Navbar />
        <BannerDemo />
        <Services />
        <Licenses />
        
        <Footer />
      </div>
    );
  }
}

export default App;
