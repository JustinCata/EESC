import React, { Component } from 'react';
import Navbar from './Navbar';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import phone from './assets/Design (39).png';
import phone2 from './assets/phone.png';
import mail from './assets/Design (38).png';
import Footer from './Footer.js';
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
          <div className="headerContact "> Contact Us</div>
          <div>

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

          </div>

          <div className= "col-md-12 visit"> 
            <p className='title'>Visit Us</p>
            <p>9380 Sw 72nd Street Suite B140,  </p>
            <p>Miami, FL 33173 </p>
          </div>

          <a id="phone" href="tel:7864888657">
          <img  src={phone2} />
          </a>

          <div className= "col-md-12 call-mail">
            <div className= "col-sm-6">
              <div className= 'col-sm-3'>
                <img src= {phone}/>
              </div>
              <div className= 'col-sm-9'>
                <p>Call us</p>
                <h4>305.885.5255 | 786.488.8657</h4>
              </div>
            </div>
            <div className= "col-sm-6">
              <div className= 'col-sm-3 '>
                <img src= {mail}/>
              </div>
              <div className= 'col-sm-9'>
              <p>Have any questions? Se habla Español</p>
                <h4>Empireengineering@hotmail.com</h4>
              </div>
            </div>
            
            
          
            </div>

        
            <Footer/>
          </div>





       
  
       
      
    );
  }
}

// export default Contact;
export default GoogleApiWrapper({
  apiKey: ''
})(Contact);