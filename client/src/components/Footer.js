import React, { Component } from 'react';
import discord from './assets/discord.svg';
import twitter from './assets/twitter.svg';
import medium from './assets/icons8-medium.svg';
import mail from './assets/mail.png';
import './css/footer.css';

class Footer extends Component{

    render(){
      return(
        <footer>
          <div className="row">
            <a href="https://twitter.com/Metamesh_io"><img className="social-twitter" src={twitter} /></a>
            <a href="https://medium.com/metamesh" ><img className="social-medium" src={medium} /></a>
            <a href="https://discord.gg/Y2cQHVx" ><img className="social-discord" src={discord} /></a>
            <a href="mailto:hello@metamesh.io"><img className="social-mail" src={mail} /></a>
          </div>
          <p>Copyright &copy; Metamesh Inc. All Rights Reserved 2018</p>
        </footer>
      );
    }
}

export default Footer;
