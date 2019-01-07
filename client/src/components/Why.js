import React, { Component } from 'react';

import HIW1 from './assets/hiw_cart.png';
import HIW2 from './assets/hiw_share.png';
import HIW3 from './assets/hiw_iota.png';
import './css/Why.css';


class Why extends Component {
  
  render() {
    return (
      <div id='WHY' className="WHY">
        <div className="container">
          <h3 className="Belief">Everyone plays a role in creating a valuable community</h3>
          <br/>
          <h3><span className="dot"></span> Create a brand &nbsp; <span className="dot"></span> Be an influencer</h3>
          <h3><span className="dot"></span> Be a supporter</h3>
        </div>
        <div className="container subscribers">
          <h3>Subscribers</h3>
          <p>{this.props.count}</p>
        </div>
      </div>
    );
  }
}

export default Why;
