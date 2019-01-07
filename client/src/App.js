import React, { Component } from 'react';
import axios from 'axios'
import Navbar from './components/Navbar';

import BannerDemo from './components/BannerDemo';
import Services from './components/Services';
import Footer from './components/Footer';
import './App.css';
import Licenses from './components/Licenses';

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
