import React, { Component } from 'react';
import banner from './assets/bannerEmpire.png';
import './css/banner.css';

class Banner extends Component {

  render() {
    return (
      <div className="Banner">
            <img id ='bannerPhoto' src={banner} alt="TeamPhoto" />  
            <div className="afterBanner col-xs-12">
              <p>Engineering a better tomorrow</p>
            </div>       
      </div>
    );
  }
}

export default Banner;
