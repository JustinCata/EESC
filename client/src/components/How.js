import React from 'react';
import Connect from './assets/How/connect.jpeg';
import Sell from './assets/How/sell.jpeg';
import Share from './assets/How/share.jpeg';
import Earn from './assets/How/earn.jpeg';
import './css/How.css';

const How = ()=>{
  return(
    <div id='HOW' className="HOW">
      <div className="container">
        <div className="row">
          <div className="col-sm-5 col-xs-12 phoneImage">
            <img src={Connect} className='photo' alt="Connect" />
          </div>
          <div className="col-sm-2">
            {/*white space*/}
          </div>
          <div className="col-sm-5 col-xs-12 phoneImage">
            <div className='shiftdown' id="connect">
              <h3 className='Text'>Connect.</h3>
              <p>Create a following and connect with cryptobrands or crypto enthusiast to get the
                latest crypto poduct, trends and styles
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-5 col-sm-push-7 col-xs-12 phoneImage">
            <img src={Sell} className='photo' alt="Sell" />
          </div>
          <div className="col-sm-2">
            {/*white space*/}
          </div>
          <div className="col-sm-5 col-sm-pull-7 col-xs-12 phoneImage">
            <div className='shiftdown' id="sell">
              <h3 className='Text'>Sell.</h3>
              <p>Whether you are selling as a crypto brand, or as a crypto enthusiast. Metamesh
              allows you to easily create listings. Simply upload a photo, fill in some
              details, and you are ready to go.
              </p>
              <p>The best part? Listings are <span className='highlight'>free</span> - we only
              take a fee once you complete a sale. Metamesh will be conducting its transactions
              using Stripe and merchants will receive dollars.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-5 col-xs-12 phoneImage" >
            <img src={Share} className='photo' alt="Share" />
          </div>
          <div className="col-sm-2">
            {/*white space*/}
          </div>
          <div className="col-sm-5">
            <div className='shiftdown' id="share">
              <h3 className='Text'>Share.</h3>
              <p>Discover relevant produts on your feed and share them with your following with a
              tap of a button.
              </p>
              <p>If you connect a buyer and a seller you will earn a <span className='highlight'>commission</span> from
              the sale. This allows new brands to make faster sales and gain more product views. Finally,
              your influence matters.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-5 col-sm-push-7 col-xs-12 phoneImage">
            <img src={Earn} className='photo' alt="Earn" />
          </div>
          <div className="col-sm-2">
            {/*white space*/}
          </div>
          <div className="col-sm-5 col-sm-pull-7">
            <div className='shiftdown' id= "earn">
              <h3 className='Text'>Earn.</h3>
              <p>Metamesh allows you to earn cash so you can invest in crypto projects, purchase on
              metamesh or even pay the bills.
              </p>
              <p>You aren’t limited to only selling your products.
              You can earn commissions by sharing products as well. Payouts are easy, literally a pat away.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default How;
