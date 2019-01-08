import React from 'react';
import Connect from './assets/How/connect.jpeg';
import Sell from './assets/How/sell.jpeg';
import Share from './assets/How/share.jpeg';
import Earn from './assets/How/earn.jpeg';
import Icon1 from './assets/InsuredIcon.png';
import Icon2 from './assets/ExperiencedIcon.png';
import Icon3 from './assets/BondedEntityIcon.png';
import './css/License.css';


const Licenses = ()=>{
  return(
    <div id='Licenses'>
      <div className='col-xs-12 Licenses'>
        <div className='col-xs-12 col-sm-4'>
          <div className='col-xs-12 col-sm-6 icon'>
            <img src={Icon1} alt="License1" />  
          </div>
          <div className='col-xs-12 col-sm-6 text'>
            <h6>Insured</h6>
            <p>lorem ipsum</p>
          </div>      
        </div>
        <div className='col-xs-12 col-sm-4'>
        <div className='col-xs-12 col-sm-6 icon'>
            <img src={Icon2} alt="License2" />  
          </div>
          <div className='col-xs-12 col-sm-6 text'>
            <h6>Experienced</h6>
            <p>lorem ipsum</p>
          </div> 
        </div>
        <div className='col-xs-12 col-sm-4'>
        <div className='col-xs-12 col-sm-6 icon'>
            <img src={Icon3} alt="License3" />  
          </div>
          <div className='col-xs-12 col-sm-6 text'>
            <h6>Bonded Entity</h6>
            <p>lorem ipsum</p>
          </div> 
        </div>
      </div>
      <div className='col-xs-12 liscLogo'>
        <div className='liscContent'>
            <h4>LICENSES and CERTIFICATES</h4>
            <p>We are certified as a Small Business Enterprise (SBE) in Miami-Dade County and the 
              Florida Department of Transportation (FDOT), Miami Dade Health Department and the 
              Department of Business and Professional Regulation (DBPR). 
            </p>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
}

export default Licenses;
