import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import servImg from './assets/bannerEmpire.png';
import septic from './assets/septic.jpg';
import utility from './assets/utility.jpg';
import paving from './assets/paving.jpg';

import './css/services.css';

class Projects extends Component{
  render(){
  return(
    <div className='Services'>
        <div style={{ backgroundColor: '#FEFCF5', marginBottom: '0px', paddingBottom: '50px', paddingTop: '20px' }} className="services col-xs-12">

            <div id='Projects' className="col-xs-12">
                <h4 style={{ fontWeight: 'bold', textTransform: 'uppercase', paddingTop: '7px'}}>Projects</h4>
            </div>
            <div className="serviceClick col-sm-4 col-xs-12">
                
                    <img src={utility} />    
                
            </div>
            <div className="serviceClick col-sm-4 col-xs-12">
                
                    <img src={septic} />    
                
            </div>
            <div className="serviceClick col-sm-4 col-xs-12">
                
                    <img src={paving} />    
                
            </div>           

        </div>
    </div>
  );
  }
}

export default Projects;
