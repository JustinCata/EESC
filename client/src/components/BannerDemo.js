import React, { Component } from 'react';
import banner from './assets/banner picture.png';
import './css/banner.css';

class Banner extends Component {

  render() {
    return (
      <div className="Banner">
        <div className="row">
          <div className="col-md-5 col-sm-5 col-xs-12 sectionTitle">
            <h1 className="headingTitle">Hacking <br /> e-Commerce <br /> <span style={{color:'#ff0073'}}>Together</span></h1>
            <a id="banner-button" href="#SIGNUP"  onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} className="btn btn-medium sign">Sign Up</a>
          </div>
          <div className="col-md-7 col-sm-7 col-xs-12 banner" >
            <img id ='bannerPhoto' src={banner} alt="TeamPhoto" />
            </div>
        </div>
      </div>
    );
  }
}

export default Banner;
