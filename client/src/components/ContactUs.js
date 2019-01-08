import React, { Component } from 'react';
import Navbar from './Navbar';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

import './css/contact.css';
import './css/services.css';




class Contact extends Component {

  render() {
    const mapStyles = {
      width: '100%',
      height: '350px'
    };
  
  
    return (
      <div>
        <div>
        <Navbar />
        </div>
          <div className="headerContact"> Contact Us</div>

          <Map
            google={this.props.google}
            zoom={13}
            style={mapStyles}
            initialCenter={{
            lat: 25.7005,
            lng: -80.3479
            }}
          >
            <Marker
            title={'Empire Engineering'}
            name={'Empire Engineering'}
            position={{lat:25.7005, lng:-80.3479}}
            >
            </Marker>

          </Map>
          
          <div>
            <p>Visit Us </p>
          </div>





       
    
      
      </div> 
       
      
    );
  }
}

// export default Contact;
export default GoogleApiWrapper({
  apiKey: 'API KEY'
})(Contact);