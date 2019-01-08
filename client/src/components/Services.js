import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import servImg from './assets/bannerEmpire.png';
import septic from './assets/septic.jpg';
import utility from './assets/utility.jpg';
import paving from './assets/paving.jpg';

import './css/services.css';

class Services extends Component{
  render(){
  return(
    <div id='Services' className='Services'>
        <div className="services col-xs-12">

            <div className="col-xs-12">
                <h4 style={{ fontWeight: 'bold', textTransform: 'uppercase'}}>Our Services</h4>
            </div>
            <div className="serviceClick col-sm-4 col-xs-12">
            <Popup trigger={
                        <button>
                            <img src={utility} />
                            <p id="utility">Utility</p>
                        </button>
                        } modal>
                {close => (
                <div className="modal">
                    <a className="close" onClick={close}>
                    &times;
                    </a>
                    <div className="header"> Services >  Utility</div>
                <div className="moreService col-sm-6 col-xs-12">
                    <img src={utility} />
                </div>
                <div className="moreService text col-sm-6 col-xs-12">
                    <h4>Utility</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                        magni omnis delectus nemo, maxime molestiae dolorem numquam
                        mollitia, voluptate ea, accusamus excepturi deleniti ratione
                        sapiente! Laudantium, aperiam doloribus. Odit, aut.</p>
                    <a className="btn">Free Consultation</a>
                </div>
                </div>
                )}
            </Popup>  
            </div>
            <div className="serviceClick col-sm-4 col-xs-12">
            <Popup trigger={
                        <button>
                            <img src={paving} />
                            <p id="paving">Paving</p>
                        </button>
                        } modal>
                {close => (
                <div className="modal">
                    <a className="close" onClick={close}>
                    &times;
                    </a>
                    <div className="header"> Services >  Paving</div>
                <div className="moreService col-sm-6 col-xs-12">
                    <img src={paving} />
                </div>
                <div className="moreService text col-sm-6 col-xs-12">
                    <h4>Paving</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                        magni omnis delectus nemo, maxime molestiae dolorem numquam
                        mollitia, voluptate ea, accusamus excepturi deleniti ratione
                        sapiente! Laudantium, aperiam doloribus. Odit, aut.</p>
                    <a className="btn">Free Consultation</a>
                </div>
                </div>
                )}
            </Popup>  
            </div>
            <div className="serviceClick col-sm-4 col-xs-12">
            <Popup trigger={
                        <button>
                            <img src={septic} />
                            <p id="septic">Septic Tank</p>
                        </button>
                        } modal>
                {close => (
                <div className="modal">
                    <a className="close" onClick={close}>
                    &times;
                    </a>
                    <div className="header"> Services >  Septic Tank</div>
                <div className="moreService col-sm-6 col-xs-12">
                    <img src={septic} />
                </div>
                <div className="moreService text col-sm-6 col-xs-12">
                    <h4>Septic Tank</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                        magni omnis delectus nemo, maxime molestiae dolorem numquam
                        mollitia, voluptate ea, accusamus excepturi deleniti ratione
                        sapiente! Laudantium, aperiam doloribus. Odit, aut.</p>
                    <a className="btn">Free Consultation</a>
                </div>
                </div>
                )}
            </Popup>  
            </div>
           

        </div>
    </div>
  );
  }
}

export default Services;
