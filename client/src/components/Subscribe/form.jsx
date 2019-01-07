import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = { 
          showInterest : 'Influencer',
          sellerButtonColor: '#29afc0',
          buyerButtonColor: '#29afc0',
       }
        this.seller = this.seller.bind(this);
        this.buyer = this.buyer.bind(this);
    }

    seller(){
      this.setState({ 
        showInterest: 'Seller',
        sellerButtonColor: '#ff0073',
        buyerButtonColor: '#29afc0',
    }, () => {
        // console.log(this.state);
      })
    }

    buyer(){
      this.setState({ 
        showInterest: 'Buyer',
        sellerButtonColor: '#29afc0',
        buyerButtonColor: '#ff0073',
      }, () => {
        // console.log(this.state);
      })
    }

    render() {
        return  <div className="col-xs-12 col-sm-8 col-center form">

                    <div className="row row1">
                          <div className="col-xs-5">
                            <p className="text">What role of interest?</p>
                          </div>
                          <div className="col-xs-7 btn-group btn-group-lg">
                            <button onClick={this.seller} style={{backgroundColor: this.state.sellerButtonColor}} type="button" className="btn btn-primary button">Seller</button>
                            <button onClick={this.buyer} style={{backgroundColor: this.state.buyerButtonColor}}  type="button" className="btn btn-primary button">Buyer</button>
                          </div>
                        <div className="col-xs-12">
                          <div className="form-group">
                            <input type="text" className="form-control" id="name-input" placeholder="Name"/>
                          </div>
                        </div>
                        <div className="col-xs-12 subscribe-col-left">
                          <div className="form-group">
                            <input type="text" className="form-control" id="email-input" placeholder="Email Address"/>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-4 subutton">
                          <button
                            className="btn btn-default subscribe-button"
                            onClick = {()=> {
                                    var name = document.getElementById("name-input").value
                                    var email = document.getElementById("email-input").value
                                    this.props.onRegister( {interest: this.state.showInterest, name: name, email: email } ) } }
                            >
                            Subscribe
                          </button>
                        </div>
                        <div className="col-xs-12">
                            <p className="disclaimer">We respect your privacy. We will not share your information.</p>
                        </div>
                    </div>
                </div>
            ;
    }

}

export default Form;
