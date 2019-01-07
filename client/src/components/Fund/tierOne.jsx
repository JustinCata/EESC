import React, { Component } from 'react';
import Popup from "reactjs-popup";
import AlphaForm from './alphaForm';
import Confirmation from './fundConfirmation';
// import AlphaConfirmation from './alphaConfirmation';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import axios from 'axios'
import './fund.css';
import iota from '../assets/IOTAicon.png';
import WIOTA from '../assets/WIOTAicon.png';
import QR from '../assets/qr.png';
import shirt from '../assets/crowdfundshirt_front.png';
import closeButton from '../assets/closebutton.png';



class TierOne extends Component {
   constructor(){
        super();
        this.state = { 
          showForm : true,
          tier: "Alpha Supporter",
          imgSrc: WIOTA,
          userEmail:"",
          tag:""
         };
         this.handleMouseOver = this.handleMouseOver.bind(this);
         this.handleMouseOut = this.handleMouseOut.bind(this);
       }
     
       handleMouseOver() {
         // this.setState({
         //   imgSrc: iota
         // });
       }
     
       handleMouseOut() {
         // this.setState({
         //   imgSrc: WIOTA
         // });
       }
    componentDidMount(){  
    }

    componentWillMount(){
    }

    createNotification(type, message = ""){

          switch (type) {
            case 'info':
               return NotificationManager.info('Info message');
              break;
            case 'success':
               return NotificationManager.success('', 'Thank you for your contribution!');
              break;
            case 'warning':
              return NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
              break;
            case 'error':
              return NotificationManager.error( message , 'Oops!');
              break;
          }

    }

    validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    register(data, that){


        if(data.name.trim() == "" || data.email.trim() == ""){
            that.createNotification('error', 'Please fill in the form.');
        }else if(!that.validateEmail(data.email)){
            that.createNotification('error', 'Invalid email address.');
        }else{

              this.setState({ userEmail: data.email, tag: data.tag });
              axios.get('http://18.220.228.202:80/fund', {
                params: {
                    name: data.name,
                    email: data.email,
                    address: data.address,
                    IOTA: data.IOTA,
                    USD: data.USD,
                    tier: data.tier,
                    tag: data.tag,
                    city: data.city,
                    states: data.states,
                    zip: data.zip,
                    country: data.country, 
                    size: data.size
                }
              })
              .then(function (response) {
                if( response.data.message == "SUCCESS" ){
                    that.setState({showForm: false});
                    //that.createNotification('success');
                }else{
                    switch(response.data.rson){
                        case 'EMAIL_TAKEN':
                            that.createNotification('error', 'You already registered!');
                        break;
                        case 'EMPTY_F':
                            that.createNotification('error', 'Please fill in the form.');
                        break;
                        case 'INV_EMAIL':
                            that.createNotification('error', 'Invalid email address.');
                        break;
                        case 'NEG_FUNDS':
                            that.createNotification('error', 'Must provide at least 1 MIOTA.')
                        break;
                        case 'NO_SIZE':
                            that.createNotification('error', 'Please select a shirt size.')
                        break;
                        case 'NO_ADD':
                            that.createNotification('error', 'Alpha Supporters must provide an address.')
                    }
                }
              })
              .catch(function (error) {
                console.log(error);
              });
        }


    }


  render() {

    const tierPrice = 75;
    const miotaPrice = this.props.price == 0 ? 0 : (tierPrice/this.props.price).toFixed(2);
    const USDprice = this.props.price;

    return (
      <div id="TierOne" className="TierOne">
<Popup trigger={<div id="tierOneContent" className="button tier1Button">
<div className="row tier1-row">
    <div className="pledgeHeading">
      <h5>${tierPrice}+ <span className="miota">({miotaPrice} MIOTA)</span></h5>
      <hr/>
    </div>
    <div className="col-xs-12 col-sm-4 shirt">
      <img src={shirt} style={{width: '100%', padding: '2%'}}/>
    </div>
    
    <div className="col-xs-12 col-sm-8 contributeDesc tier1-padding"> 
      <ul className="tier1-ul">
        <span className="receive bold">You will receive:</span>
        <li>A 5% discount on all products purchased on Metamesh for <span className="bold">1 full year</span>.</li>
        <li>Access to our closed Alpha.</li>
        <li>Access to our closed Beta.</li>
        <li>20 invites to our closed Beta.</li>
        <li>A designer Metamesh T-shirt!</li>
      </ul>
      <a href="#TierOne" id="tierOneBtn" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} className="fund-cta tier1-fund-cta">Contribute  <img className="iota" src={this.state.imgSrc}/></a>
    </div>
  </div>
</div>
  
} 
modal
lockScroll
className="formPopup"
contentStyle={{backgroundColor: 'transparent'}}
closeOnDocumentClick>
{close => (
  <div>

    <div id="SubscribeFunds" className="popup-form-container">

      <div className="row popup-row">
        
        <div className="col-xs-12 col-sm-8 col-center slim-padding">

          <div className="form-container">
            <button 
              id="tierOneBtn" 
              onMouseOver={this.handleMouseOver} 
              onMouseOut={this.handleMouseOut} 
              className="popup-close-button"
              onClick={() => {
                  close()
            }}>
              <img className="popup-close-image" style={{width: '28px'}} src={closeButton}/>
            </button>

            { this.state.showForm ? <AlphaForm tierPrice={tierPrice} miotaPrice={miotaPrice} tier={this.state.tier} onRegister={ (data)=> this.register(data, this) } /> : <Confirmation miotaPrice={miotaPrice} tier={this.state.tier} email={this.state.userEmail} tag={this.state.tag} closeConf ={()=> { this.setState({showForm: true})}}/> }
            
          </div>
        </div>
        
      </div>

      <NotificationContainer/>
    </div>
  </div>
)}
</Popup> 
  </div>
);
}
}

export default TierOne;
