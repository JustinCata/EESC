import React, { Component } from 'react';
import crypto from 'crypto';
import Metamesh from '../assets/Logos/logo_white_128.png';
import QR from '../assets/qr.png';

class Form extends Component {
    
    constructor(props){
        super(props);
        this.state = { 
          tag : props.tag,
          size: ''
         };
        this.genTag = this.genTag.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    genTag(){
        var tag= '';
        const characters = '9ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        const randomValues = crypto.randomBytes(256)

        for (let i = 0; i < 256 && tag.length < 10; i++) {
        const rid = randomValues[i]
        if (rid > 242) continue
        tag += characters.charAt(rid % 27)
        }
        this.setState({
        tag: tag
        });
    }

    handleChange(event) {
        this.setState({
          size: event.target.value
        });
    }

    componentDidMount(){
      this.genTag();
    }

    componentWillMount(){
      this.genTag();
    }

    
    render() {
        var IOTAaddress= "EX9MMJLT9IAJMEPJBPUIAOYYDERNNESFEL9CMPHZVVUYDCIYJILPRPRQNXVSBFKSPPDKUNLKSWYEYUL9BLVWOWNGHW";
        
        return  <div>
                <div className="pledgeHeading">
                  <h5>
                    {this.props.tier} 
                    <span className="popup-price">
                        ${this.props.tierPrice}+ <span className="miota">({this.props.miotaPrice} MIOTA)</span>
                    </span>
                  </h5>
                </div>
                <div className="form">
                    <div className="form-group">
                        <label class="sr-only" for="name-input">Name</label>
                        <input type="text" placeholder="Name" id="name-input"/>
                    </div>
                    <div className="form-group">
                        <label class="sr-only" for="email-input">Email</label>
                        <input type="text" placeholder="Email" id="email-input"/>
                    </div>
                    <div className="">
                        <button className="form-button" onClick = {()=> {
                                var name = document.getElementById("name-input").value;
                                var email = document.getElementById("email-input").value;
                                var IOTA = this.props.miotaPrice;
                                var USD = this.props.tierPrice;
                                var tier = this.props.tier;
                                var tag = this.state.tag;
                                this.props.onRegister( { 
                                    name: name, 
                                    email: email, 
                                    IOTA: IOTA, 
                                    USD: USD, 
                                    tier: tier, 
                                    tag: tag } ) } }>
                            Submit
                        </button>
                    </div>       
                </div>
            </div>
    }

}

export default Form;
