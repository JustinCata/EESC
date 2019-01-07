import React, { Component } from 'react';
import crypto from 'crypto';
import Metamesh from '../assets/Logos/logo_white_128.png';
import QR from '../assets/qr.png';

class BackerForm extends Component {
    
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
                        1+ MIOTA
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
                    <div className="form-group">
                        <label class="sr-only" for="miota-input">Custom Amount</label>
                        <input type="text" placeholder="Custom MIOTA Amount" id="miota-input"/>
                    </div>
                    <hr/>
                    <span className="optional">Only necessary if matching $75+ tier</span>
                    <div className="form-group">
                        <label class="sr-only" for="address-input">Street Address</label>
                        <input type="text" placeholder="Street Address" id="address-input"/>
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 address-left">
                                <label class="sr-only" for="city-input">City</label>
                                <input type="text" placeholder="City / Town" id="city-input"/>
                            </div>
                            <div className="col-xs-12 col-sm-6 address-right">
                                <label class="sr-only" for="states-input">State / Province</label>
                                <input type="text" placeholder="State / Province" id="states-input"/>
                            </div>                            
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 address-left">
                                <label class="sr-only" for="zip-input">ZIP / Postal Code</label>
                                <input type="text" placeholder="ZIP / Postal Code" id="zip-input"/>
                            </div>
                            <div className="col-xs-12 col-sm-6 address-right">
                                <label class="sr-only" for="country-input">Country</label>
                                <input type="text" placeholder="Country" id="country-input"/>
                            </div>                            
                        </div>
                    </div>
                    <div className="form-group">
                        <div>
                        <form className="shirt-form" style={{backgroundColor:'white'}}>
                            <p className="shirt-label">Shirt Size:</p>
                            <input 
                                type="radio" 
                                name="shirt-small" 
                                id="shirt-small" 
                                value="small"
                                checked={this.state.size === "small"}
                                onChange={this.handleChange}
                            />
                            <label class="shirt-button" for="shirt-small">S</label>

                            <input 
                                type="radio" 
                                name="shirt-medium" 
                                id="shirt-medium" 
                                value="medium"
                                checked={this.state.size === "medium"}
                                onChange={this.handleChange}
                            />
                            <label class="shirt-button" for="shirt-medium">M</label>

                            <input 
                                type="radio" 
                                name="shirt-large" 
                                id="shirt-large" 
                                value="large"
                                checked={this.state.size === "large"}
                                onChange={this.handleChange}
                            />
                            <label class="shirt-button" for="shirt-large">L</label>

                            <input 
                                type="radio" 
                                name="shirt-xlarge" 
                                id="shirt-xlarge" 
                                value="xlarge"
                                checked={this.state.size === "xlarge"}
                                onChange={this.handleChange}
                            />
                            <label class="shirt-button" for="shirt-xlarge">XL</label>
                        </form>
                        </div>
                    </div>
                    <div className="">
                        <button className="form-button" onClick = {()=> {
                                var name = document.getElementById("name-input").value;
                                var email = document.getElementById("email-input").value;
                                var address = document.getElementById("address-input").value;
                                var city = document.getElementById("city-input").value;
                                var states = document.getElementById("states-input").value;
                                var zip = document.getElementById("zip-input").value;
                                var country = document.getElementById("country-input").value;                                
                                var IOTA = isNaN(document.getElementById("miota-input").value) ? 0 : document.getElementById("miota-input").value;
                                IOTA = parseFloat(parseFloat(IOTA).toFixed(2));
                                var USD = (this.props.usdPrice * IOTA).toFixed(2);
                                var tier = this.props.tier;
                                var tag = this.state.tag;
                                var size = this.state.size;
                                this.props.onRegister( { 
                                    name: name, 
                                    email: email, 
                                    address: address,
                                    city: city,
                                    states: states,
                                    zip: zip,
                                    country: country, 
                                    IOTA: IOTA,
                                    USD: USD,
                                    tier: tier, 
                                    tag: tag,
                                    size:size } ) } }>
                            Submit
                        </button>
                    </div>       
                </div>
            </div>
    }

}

export default BackerForm;
