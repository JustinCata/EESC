import React, { Component } from 'react';
import banner from './assets/banner picture.png';
import './css/banner.css';

class Banner extends Component {

  render() {
    return (
      <div className="Banner">
            <img id ='bannerPhoto' src={banner} alt="TeamPhoto" />         
      </div>
    );
  }
}

export default Banner;
