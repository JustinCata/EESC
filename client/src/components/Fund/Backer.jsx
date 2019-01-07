import React, { Component } from 'react';
import Popup from "reactjs-popup";
import BackerForm from './backerForm';
import Confirmation from './fundConfirmation';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import axios from 'axios'
import './fund.css';
import iota from '../assets/IOTAicon.png';
import WIOTA from '../assets/WIOTAicon.png';
import QR from '../assets/qr.png';
import closeButton from '../assets/closebutton.png';


class Backer extends Component {
   constructor(){
        super();
        this.state = { 
          showForm : true,
          tier: "Supporter",
          imgSrc: WIOTA,
          userEmail:"",
          tag:"",
          customIOTA: 0,
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
               return NotificationManager.success('', 'Congratulations!');
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
              this.setState({ userEmail: data.email, tag: data.tag, customIOTA: data.IOTA });
              axios.get('http://18.220.228.202:80/fund', {
                params: {
                    name: data.name,
                    email: data.email,
                    address: data.address,
                    IOTA: data.IOTA,
                    USD: data.USD,
                    tier: data.tier,
                    tag: data.tag
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
                    }
                }
              })
              .catch(function (error) {
                console.log(error);
              });
        }


    }


  render() {

    const USDprice = this.props.price;

    return (
      <div id="Backer" className="Backer">
<Popup trigger={<div id="button" className="button customTierButton">
<div className="row">
  <div className="pledgeHeading">
    <h5>1+ MIOTA</h5>
    <hr/>
  </div>
  <div className="col-xs-12 contributeDesc">
    <ul>
      <span className="receive bold">You will receive:</span>
      <li>Access to our closed Beta.</li>
    </ul>
    <p>And if you match one of the above tiers, you will also receive the reward for that tier!</p>
  </div>
  <a href="#Backer" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} className="fund-cta">Contribute</a>
  </div>
</div>
  
} 
    modal
    lockScroll
    className="formPopup"
    contentStyle={{backgroundColor:'transparent'}}
    closeOnDocumentClick>
    {close => (
      <div>

    <div id="SubscribeFunds" className="popup-form-container">

      <div className="row popup-row">
        
        <div className="col-xs-12 col-sm-8 col-center slim-padding">

          <div className="form-container">
            <button 
              id="backerBtn" 
              onMouseOver={this.handleMouseOver} 
              onMouseOut={this.handleMouseOut} 
              className="popup-close-button"
              onClick={() => {
                  close()
            }}>
              <img className="popup-close-image" style={{width: '28px'}} src={closeButton}/>
            </button>

            { this.state.showForm ? <BackerForm usdPrice={this.props.price} miotaPrice={1} tier={this.state.tier} onRegister={ (data)=> this.register(data, this) } /> : <Confirmation miotaPrice={this.state.customIOTA} tier={this.state.tier} email={this.state.userEmail} tag={this.state.tag} closeConf ={()=> { this.setState({showForm: true})}}/> }
            
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

export default Backer;
