import React, { Component } from 'react';
import Brands from './assets/What/brands.PNG';
import CommitLogo from './assets/What/metamesh logo.png';
import liquidCarrot from './assets/What/liquidcarrot.png';
import EJ from './assets/What/EJ.png';
import './css/what.css';

class What extends Component{
  render(){
  return(
    <div id='WHAT' className='WHAT'>
      <div className='container1'>
        <p>Metamesh is a product sharing application that allows you to create</p>
        <p>and grow your brand seamlessly.</p>
        <iframe id='video' width="911" height="512" src="https://www.youtube.com/embed/pv_kFG6fGhc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
      <div className='container2'>
        <p>We feels its unfair how other social networks monetize your data
        without you earning your share. Share products you love and earn
        cash with a tap of a button</p>
      </div>
      <div className='container3'>
        <p className='shift'>Subscribed Brands</p>
        <img src={Brands} alt="Brands" />
        <br />
        <a href="https://liquidcarrot.io">
          <img id="liquidCarrot" src={liquidCarrot} alt="Liquid Carrot" />          
        </a>
        <a href="https://www.edisonjoao.com/">
          <img id="edisonJoao" src={EJ} alt="Edison Joao" />
        </a>
        <br />
        <a href="#SIGNUP" className="btn">Become A Merchant</a>
      </div>
      <div className='container4 bgimg'>
        <h4>Our Commitment</h4>
        <div className='container'>
          <div className="row">
            <div className="col-sm-6 commit">
              <p className='text'> Give you control to monetize your social network </p>
            </div>
            <div className="col-sm-6 commit">
              <p className='text'> Allow you to browse the latest crypto products you care about </p>
            </div>
            </div>
            <div className="row">
              <div className="col-sm-6 commit">
                <p className='text'> Kickstart your loyal customer base and build brand equity </p>
              </div>
              <div className="col-sm-6 commit">
                <p className='text'> Provide you customer service thats on your side and readily available </p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 commit">
                <p className='text'> Get you 10x as many views on your product, increase your
                sales and lower your marketing cost
                </p>
              </div>
              <div className="col-sm-6 commit">
                <p className='text'> Allow you to earn a commission by sharing products that lead to sales. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
  }
}

export default What;
