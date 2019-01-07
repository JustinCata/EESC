import React, { Component } from 'react';
import $ from 'jquery';
import checkMark from './../assets/checkmark.png';

class Confirmation extends Component {
    constructor(){
        super();
    }

    componentDidMount(){
    }

    render() {
        return  <div className="">
                    <p className="subscribe-conf">Thank you for registering! <img className="checkmark" src={checkMark} /></p>
                </div>
    }

}

export default Confirmation;
