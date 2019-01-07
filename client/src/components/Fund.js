import React, { Component } from 'react';
import TierOne from "./Fund/tierOne";
import TierTwo from "./Fund/tierTwo";
import TierThree from "./Fund/tierThree";
import TierFour from "./Fund/tierFour";
import Backer from './Fund/Backer';
import iota from './assets/IOTAicon.png';
import Countdown from 'react-countdown-now';
import './Fund/fund.css';



class Fund extends Component {
  // {this.props.price} is current USD value of IOTA.
  // {this.props.backers} is current amount of donations.
  // {this.props.fundraised} is the amount of funds raised.
  render() {
    const Completionist = () => <span>Time's Up!</span>;
 
    // Renderer callback with condition
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
      
      if (completed || (days == 0 && hours == 0 && minutes == 0)) {
        // Render a completed state
        return <Completionist />;

      } else {
        // Render a countdown

        let dayString = days > 1 ? "days" : "day"
        let hourString = hours > 1 ? "hours" : "hour"
        let minuteString = minutes > 1 ? "minutes" : "minute"
        let secondString = seconds > 1 ? "seconds" : "second"

        let hourSuffixString = hours > 1 ? " and " + parseInt(hours) + " hours left" : hours == 1 ? " and " + parseInt(hours) + " hour left" : " left"
        let minuteSuffixString = minutes > 1 ? " and " + parseInt(minutes) + " minutes left" : minutes == 1 ? " and " + parseInt(minutes) + " minute left" : " left"
        let secondSuffixString = seconds > 1 ? " and " + parseInt(seconds) + " seconds left" : seconds == 1 ? " and " + parseInt(seconds) + " second left" : " left"

        if (days > 0) {

          return <span>{parseInt(days)} {dayString} {hourSuffixString}</span>;

        } 
        else if (days < 1 && hours > 0) {

          return <span>{parseInt(hours)} {hourString} {minuteSuffixString}</span>;
        
        } 
        else if (days < 1 && hours < 1 && minutes > 0) {

          return <span>{parseInt(minutes)} {minuteString} left</span>;

        } 
        // else if (days < 1 && hours < 1 && minutes < 1 && seconds > 0) {

        //   return {<span>parseInt(seconds)} {secondString} left</span>;
        // }
        
      }
    };

    const numberWithCommas = (x) => {
      var parts = x.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    }
    const Fundraised = (this.props.fundraised*this.props.price).toFixed(2);
    const percentage = String(((Fundraised/40000)*100).toFixed(2) + '%');
    const contributorString = (this.props.backers == 0 || this.props.backers > 1) ? "Contributors" : "Contributor"

    return (
      <div id="Fund" className="Fund">

        <div className="row">
          <div className="col-xs-12">
            <h2 id="fundTitle">Metamesh Crowdfund</h2>
          </div>
        </div>
        <div className="container">
          
          <div className="row fundHeading">

            <div className="col-xs-12 col-sm-6 fundCol demo">

              <div className="progress" style={{backgroundColor: '#f5f5f5'}}>
                <div className="progress-bar" role="progressbar" aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100" style={{width: percentage, backgroundColor: '#ff0073',  }}>
                </div>
              </div>
              <div className="fundStats">
                <h5>${numberWithCommas(Fundraised)} <span className="miota">({numberWithCommas(this.props.fundraised)} MIOTA)</span></h5>
                <h6>Raised of $40,000</h6>
                <h5>{numberWithCommas(this.props.backers)} {contributorString} <a href="https://thetangle.org/address/EX9MMJLT9IAJMEPJBPUIAOYYDERNNESFEL9CMPHZVVUYDCIYJILPRPRQNXVSBFKSPPDKUNLKSWYEYUL9B" title="View on the Tangle" target="_blank"> <span class="glyphicon glyphicon-share-alt" aria-hidden="true"></span> </a></h5>
                <h5><Countdown date={'June 5 2018 23:59:59 GMT-0400'} renderer={renderer}/></h5>
              </div>
              
            </div>

            <div className="col-xs-12 col-sm-6 fundCol">
              <p>
                Developing Metamesh will be a huge undertaking and we would like to dedicate ourselves to it full-time. 
                If given the opportunity to focus completely on Metamesh, we will have the Alpha build ready sometime around Q4, 2018. 
                In order to do so, we need funding to help afford our diet of ramen noodles and cafe Cubano. 
                We do not wish to do an ICO as we believe it would place too much emphasis on the token and not enough on our goal, which is building a thriving marketplace for the IOTA community.
              </p>
              <ul>
              <p>By creating this crowdfund we are testing the following hypotheses:</p>
                <li>The IOTA community is willing to spend their IOTA.</li>
                <li>The IOTA community wants a marketplace where they can use their IOTA to purchase goods and services.</li>
              </ul>
              <p> Below is a list of different funding opportunities along with their unique offers.
                We would really appreciate the support of the community in making Metamesh come to life!</p>
            </div>

          </div>

          <div className="row fund-row">
            <div className="col-sm-12 col-sm-12 tierCol">< TierOne price={this.props.price} /></div>
          </div>
          <div className="row fund-row">
            <div className="col-xs-12 col-sm-4 col-sm-push-8 tierCol secondaryTier">< TierFour price={this.props.price} /></div>
            <div className="col-xs-12 col-sm-4 tierCol secondaryTier">< TierThree price={this.props.price} /></div>
            <div className="col-xs-12 col-sm-4 col-sm-pull-8 tierCol secondaryTier">< TierTwo price={this.props.price} /></div>
          </div>
          <div className="row fund-row">
            <div className="col-xs-12 col-sm-4 col-center tierCol secondaryTier">< Backer price={this.props.price} /></div>
          </div>

        </div>
        <hr/>
      </div>
    );
  }
}


export default Fund;
