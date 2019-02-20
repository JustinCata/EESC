import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import servImg from './assets/bannerEmpire.png';
import septic from './assets/septic.jpg';
import utility from './assets/utility.jpg';
import paving from './assets/crane.jpg';

import './css/services.css';

class Projects extends Component{
  render(){
  return(
    <div className='Services'>
        <div style={{ backgroundColor: '#FEFCF5', marginBottom: '0px', paddingBottom: '50px', paddingTop: '20px' }} className="services col-xs-12">

            <div id='Projects' className="col-xs-12">
                <h4 style={{ fontWeight: 'bold', textTransform: 'uppercase', paddingTop: '7px'}}>Projects</h4>
            </div>
            <div style={{ marginTop: '20px'}} className="serviceClick col-sm-4 col-xs-12">
                
                    <img style={{ opacity: 1 }} src={utility} />    
                
            </div>
            <div style={{ marginTop: '20px'}} className="serviceClick col-sm-4 col-xs-12">
                
                    <img style={{ opacity: 1 }} src={septic} />    
                
            </div>
            <div style={{ marginTop: '20px'}} className="serviceClick col-sm-4 col-xs-12">
                
                    <img style={{ opacity: 1 }} src={paving} />    
                
            </div>           

        </div>
    </div>
  );
  }
}

export default Projects;
