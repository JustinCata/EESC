import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import servImg from './assets/bannerEmpire.png';
import septic from './assets/wastewater.jpg';
import utility from './assets/utility.jpg';
import paving from './assets/paving.jpg';

import './css/services.css';

class Services extends Component{
  render(){
  return(
    <div className='Services'>
        <div  className="services col-xs-12">

            <div id='Services' className="col-xs-12">
                <h4 style={{ fontWeight: 'bold', textTransform: 'uppercase', paddingTop: '7px'}}>Our Services</h4>
            </div>
            <div className="serviceClick col-sm-6 col-xs-12">
            <Popup trigger={
                        <button>
                            <img src={utility} />
                            <p id="utility">Underground Utilities</p>
                        </button>
                        } modal>
                {close => (
                <div className="modal">
                    <a className="close" onClick={close}>
                    &times;
                    </a>
                    <div className="header"> Services >  Underground Utilities</div>
                <div className="moreService col-sm-6 col-xs-12">
                    <img src={utility} />
                </div>
                <div className="moreService text col-sm-6 col-xs-12">
                    <h4>Underground Utilities</h4>
                    <p>Full underground utility contractor inclusive of water, gravity sewer, force mains, lift station, French drain and much more. Contact us today for a free consultation.</p>
                    <a className="btn" href="mailto:empireengineering@hotmail.com?subject=Utility%20Consultation">Free Consultation</a>
                </div>
                </div>
                )}
            </Popup>  
            </div>
            <div className="serviceClick col-sm-6 col-xs-12">
            <Popup trigger={
                        <button>
                            <img style={{ width: '60%' }} src={septic} />
                            <p id="septic">Onsite Waste Water </p>
                        </button>
                        } modal>
                {close => (
                <div className="modal">
                    <a className="close" onClick={close}>
                    &times;
                    </a>
                    <div className="header"> Services >  Onsite Waste Water</div>
                <div className="moreService col-sm-6 col-xs-12">
                    <img style={{ width: '55%' }} src={septic} />
                </div>
                <div className="moreService text col-sm-6 col-xs-12">
                    <h4>Onsite Waste Water</h4>
                    <p>Complete array of services in the onsite sewage field. Inclusive of new septic installations, repairs of existing systems, pump outs, system plan designs, site evaluations and much more. Contact us today for a free consultation.</p>
                    <a className="btn" href="mailto:empireengineering@hotmail.com?subject=Septic%20Tank%20Consultation">Free Consultation</a>
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
