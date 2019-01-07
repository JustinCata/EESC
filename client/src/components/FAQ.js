import React, { Component } from 'react';
import './css/faq.css';


const faqItem = {itemOne:{question:"1. How does the Metamesh Fee system work?",
                          answer:"There are two cases that can occur:",
                          answerOne:"Seller makes a sale directly to the Buyer. In this case the Seller retains 90% of the revenue and the other 10% is paid to support the Metamesh platform.",
                          answerTwo:"Seller makes a sale due to a Influencer matching the product to the Buyer. In this case, the Seller retains 85% of the revenue while 5% goes to the Influencer and 10% goes to supporting the Metamesh Platform."},
                itemTwo:{question:"2. How does the Metamesh Fee system compare to other existing online retailers?",
                          answer:"Average fees on the Ebay platform are over 13%. The Ebay platform charges 10% alongside Paypal charging 2.9% + $0.30. Amazon charges on average a 15% referral fee plus a listing fee of $1.00 per item plus a shipping/storage fee dependent on the item size. Metamesh only charges a 10% fee on sold listings plus a 5% fee for the Marketer if a Marketer was involved in the sale."},
                itemThree:{question:"3. What is Peer-to-Peer marketing?",
                            answer:"Rather than just a central figure like Facebook or Amazon hosting their own platform advertisement, Metamesh is allowing its users to Market to their own followers via sharing posts. This individual user marketing we call Peer-to-Peer marketing."},
                itemFour:{question:"4. What is a product sharing application?",
                            answer:"A product sharing application is the integration of Social media aspects like blogging/sharing with online retailing aspects like selling/purchasing. You can share products that you are not directly selling and still earn a commission from that sale!"},
                itemFive:{question:"5. What countries will you be operating in?",
                          answer:"We will begin with merchants and users that are in the United States. We plan on expanding our service out to Europe in 2020."},
                itemSix:{question:"6. Who is the Marketer?",
                          answer:"Typical e-commerce transactions consist of a buyer and a seller. On Metamesh, we introduce a new player we call the influencer. Any user can play the role of the influencer. All the user has to do is match a buyer and a seller by sharing seller posts to potential buyers and that user has, essentially, become a influencer."},
                itemSeven:{question:"7. When will the app be released?",
                            answer:"We plan to release the Metamesh online application by November 2018! Sign up to be able to earn money with the tap of a button!"},
                }
class FAQ extends Component {

  constructor(props){
    super(props);
    this.state={
      show:[false,false,false,false,false,false,false]
    };
  }

  collapsible(index){
      let newShow = this.state.show.slice()
      newShow[index] = !newShow[index]
      this.setState({show: newShow})
  }

  render() {

    return (
      <div id="FAQ" className="FAQ">
        <h2>F.A.Q.</h2>
        <div className="row">
          <div id="questions" className="col-xs-12 col-center">
          <div className="row faq-row">
            <div className="col-xs-12 col-sm-12 col-center faq-question">
              <button className="accordion" onClick={()=>this.collapsible(0)}>{faqItem.itemOne.question}</button>
              </div>
          </div>
          {
            this.state.show[0]?
            <div className="row faq-row">
              <div className="col-xs-12 col-sm-12 col-center faq-answer">
                <p>{faqItem.itemOne.answer}</p>
                <ol>
                  <li>{faqItem.itemOne.answerOne}</li>
                  <li>{faqItem.itemOne.answerTwo}</li>
                </ol>
              </div>
            </div>
            :null
          }
          <div className="row faq-row">
            <div className="col-xs-12 col-sm-12 col-center faq-question">
              <button className="accordion" onClick={()=>this.collapsible(1)}>{faqItem.itemTwo.question}</button>
            </div>
          </div>
          {
            this.state.show[1]?
            <div className="row faq-row">
              <div className="col-xs-12 col-sm-12 col-center faq-answer">
                <p>{faqItem.itemTwo.answer}</p>
              </div>
            </div>
            :null
          }

          <div className="row faq-row">
            <div className="col-xs-12 col-sm-12 col-center faq-question">
              <button className="accordion" onClick={()=>this.collapsible(2)}>{faqItem.itemThree.question}</button>
            </div>
          </div>
          {
            this.state.show[2]?
            <div className="row faq-row">
              <div className="col-xs-12 col-sm-12 col-center faq-answer">
                <p>{faqItem.itemThree.answer}</p>
              </div>
            </div>
            :null
          }

          <div className="row faq-row">
            <div className="col-xs-12 col-sm-12 col-center faq-question">
              <button className="accordion" onClick={()=>this.collapsible(3)}>{faqItem.itemFour.question}</button>
            </div>
          </div>
          {
            this.state.show[3]?
            <div className="row faq-row">
              <div className="col-xs-12 col-sm-12 col-center faq-answer">
                <p>{faqItem.itemFour.answer}</p>
              </div>
            </div>
            :null
          }

          <div className="row faq-row">
            <div className="col-xs-12 col-sm-12 col-center faq-question">
              <button className="accordion" onClick={()=>this.collapsible(4)}>{faqItem.itemFive.question}</button>
            </div>
          </div>
          {
            this.state.show[4]?
            <div className="row faq-row">
              <div className="col-xs-12 col-sm-12 col-center faq-answer">
                <p>{faqItem.itemFive.answer}</p>
              </div>
            </div>
            :null
          }

          <div className="row faq-row">
            <div className="col-xs-12 col-sm-12 col-center faq-question">
              <button className="accordion" onClick={()=>this.collapsible(5)}>{faqItem.itemSix.question}</button>
            </div>
          </div>
          {
            this.state.show[5]?
            <div className="row faq-row">
              <div className="col-xs-12 col-sm-12 col-center faq-answer">
                <p>{faqItem.itemSix.answer}</p>
              </div>
            </div>
            :null
          }

          <div className="row faq-row">
            <div className="col-xs-12 col-sm-12 col-center faq-question">
              <button className="accordion" onClick={()=>this.collapsible(6)}>{faqItem.itemSeven.question}</button>
            </div>
          </div>
          {
            this.state.show[6]?
            <div className="row faq-row">
              <div className="col-xs-12 col-sm-12 col-center faq-answer">
                <p>{faqItem.itemSeven.answer}</p>
              </div>
            </div>
            :null
          }

          
          </div>
        </div>

      </div>
    );
  }
}

export default FAQ;
