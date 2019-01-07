import React, { Component } from 'react';
import Form from './Subscribe/form.jsx';
import Confirmation from './Subscribe/Confirmation.jsx';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import axios from 'axios';
import './Subscribe/subscribe.css';

class Subscribe extends Component {
    constructor(){
        super();
        this.state = { showForm : true }
    }

    createNotification(type, message = ""){

          switch (type) {
            case 'info':
               return NotificationManager.info('Info message');
              break;
            case 'success':
               // return NotificationManager.success('', 'Success!');
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

        if(data.email.trim() == ""){
            that.createNotification('error', 'Please fill in the form.');
        }else if(!that.validateEmail(data.email)){
            that.createNotification('error', 'Invalid email address.');
        }else{
              axios.get('https://metamesh.io/register', {
                params: {
                    name: data.name,
                    email: data.email,
                    interest: data.interest,
                }
              })
              .then(function (response) {
                if( response.data.message == "SUCCESS" ){
                    that.setState({showForm: false});
                    that.createNotification('success');
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
                    }
                }
              })
              .catch(function (error) {
                console.log(error);
              });
        }


    }

    render() {
        return <div id="SIGNUP" className="Subscribe">
                <div className="row">
                  <div className="col-xs-12">
                    <h2>Sign Up</h2>
                  </div>
                </div>
                <div className="row">
                  { this.state.showForm ? <Form onRegister={ (data)=> this.register(data, this) } /> : <Confirmation closeConf={()=> { this.setState({showForm: true})}}/> }
                </div>
                <NotificationContainer/>
             </div>;

  }

}

export default Subscribe;
