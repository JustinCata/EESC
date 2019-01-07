import React, { Component } from 'react';
import Metamesh from '../assets/conf_logo.png';
import qr from '../assets/qr.png';

class Confirmation extends Component {
    constructor(){
        super();
    }

    componentDidMount(){
    }

    render() {
    var IOTAaddress= 'EX9MMJLT9IAJMEPJBPUIAOYYDERNNESFEL9CMPHZVVUYDCIYJILPRPRQNXVSBFKSPPDKUNLKSWYEYUL9BLVWOWNGHW';        
        
    return  <div className="conf-container">
                <div className="pledgeHeading">
                  <h5>Thank You!</h5>
                </div>
    
                <img src={qr}/>
                <p className="bold">Please send {this.props.miotaPrice} MIOTA to this address:</p>
                <p className="transaction-info">{IOTAaddress}</p>
                <p className="bold">Use this transaction tag:</p>
                <p className="transaction-info">{this.props.tag}</p>
                <p> <a href={ 'iota://' + IOTAaddress + '/?amount=' + (this.props.miotaPrice*1000000).toFixed(0) + '&message=' + this.props.tag } target="_blank"> Send with Trinity <span class="glyphicon glyphicon-share-alt" aria-hidden="true"></span> </a> </p>
                <p>We have sent a confirmation to <span className="bold">{this.props.email}</span> with detailed instructions on how to send the funds. We appreciate your support!</p>
                
                
            </div>
    }

}

export default Confirmation;
