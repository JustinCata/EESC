import React from 'react';
import fdot from './assets/fdotLogo.png';
import flh from './assets/flhLogo.png';
import mdc from './assets/mdcLogo.png';
import dbpr from './assets/dbprLogo.png';
import Icon1 from './assets/InsuredIcon.png';
import Icon2 from './assets/ExperiencedIcon.png';
import Icon3 from './assets/BondedEntityIcon.png';
import './css/License.css';


const Licenses = ()=>{
  return(
    <div>
      <div id='Licenses' className='col-xs-12 Licenses'>
        <div className='liscCol col-xs-12 col-sm-4'>
          <div className='col-xs-4 col-sm-4 icon'>
            <img src={Icon1} alt="License1" />  
          </div>
          <div className='col-xs-8 col-sm-8 text'>
            <h6>Insured</h6>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
          </div>      
        </div>
        <div className='liscCol col-xs-12 col-sm-4'>
        <div className='col-xs-4 col-sm-4 icon'>
            <img src={Icon2} alt="License2" />  
          </div>
          <div className='col-xs-8 col-sm-8 text'>
            <h6>Experienced</h6>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
          </div> 
        </div>
        <div className='liscCol col-xs-12 col-sm-4'>
        <div className='col-xs-4 col-sm-4 icon'>
            <img src={Icon3} alt="License3" />  
          </div>
          <div className='col-xs-8 col-sm-8 text'>
            <h6>Bonded Entity</h6>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
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
            <div className="col-sm-6 col-xs-12">
            <img src={mdc} />
            </div>
            <div className="col-sm-6 col-xs-12">
            <img src={fdot} />
            </div>
            <div className="col-sm-6 col-xs-12">
            <img src={flh} />
            </div>
            <div className="col-sm-6 col-xs-12">
            <img src={dbpr} />
            </div>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
}

export default Licenses;
