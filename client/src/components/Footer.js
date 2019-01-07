import React, { Component } from 'react';
import discord from './assets/discord.svg';
import twitter from './assets/twitter.svg';
import medium from './assets/icons8-medium.svg';
import mail from './assets/mail.png';
import logo from './assets/EESC-logo white.png'
import './css/footer.css'; 

class Footer extends Component{

    render(){
      return(
        <footer>
          <div className="footwrap col-xs-12">
          <div className="col-xs-12 col-sm-6">
            <img src={logo} />
          </div>
          <div  className="text col-xs-12 col-sm-6">
            <p>CORPORATE OFFICE</p>
            <p>9380 Sw 72nd Street | Miami, FL 33173</p>
            <p>Office: <a href="tel:3058855255">305.885.5255</a></p>
            <p>Cell: <a href="tel:7864888657">786.488.8657</a></p>
            <a href="mailto:empireengineering@hotmail.com">Empireengineering@hotmail.com</a>
            <br />
            <br />
            <a className="btn">Se habla Español</a>
          </div>
          </div>
          
          <div className="col-xs-12" id="copyright">
          <p >Copyright &copy; Empire Engineering Services Corp. All Rights Reserved 2019</p>
          </div>
          
        </footer>
      );
    }
}

export default Footer;
