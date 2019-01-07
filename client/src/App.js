import React, { Component } from 'react';
import axios from 'axios'
import Navbar from './components/Navbar';
import BannerDemo from './components/BannerDemo';
import Why from './components/Why';
import How from './components/How';
import What from './components/What';
import Who from './components/Who';
import FAQ from './components/FAQ.js';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: ''
    };
    this.getCount = this.getCount.bind(this);
  }


// addyBalance() {
//   tangle.api.getBalances([address], 10, (err, data) => {
//     if (err){
//       return
//     };
//     const bal = data.balances[0];
//     const funds = (bal/1000000);
//     this.setState({
//       fundraised: funds
//     });
//   });
// }

// confirmTx() {
//   tangle.api.findTransactionObjects({'addresses': [address]}, (err, data) => {

//     if (err) {
//       return
//     };

//     var txHash = [];
//     var txState = [];
//     var listContributions = [];

//     data.forEach((transaction)=> {
//       // console.log(transaction.hash); this gives txHashes
//       txHash.push(transaction.hash);
//     });

//     tangle.api.getLatestInclusion(txHash, (e, states) => {

//       if (e) {
//         return
//       }
//       else {

//         states.forEach((state) => {

//           if (state == true){
//             txState.push(state);
//           }
//         });

//         this.setState({
//           backers: txState.length
//         });
//       }
//     });
//   });
// }


// priceRender() {
//     axios.get('https://api.coinmarketcap.com/v1/ticker/iota/')
//       .then(res => {
//         const IOTA = res.data;
//         const IOTAprice = IOTA[0].price_usd;
//         this.setState({
//           price: IOTAprice
//         });

//        }).catch(error => {
//          console.log("error:" + error);
//        });
// }

componentDidMount() {
  this.getCount();
}

// componentWillMount(){
//   this.setState({
//     price: 0
//   });
//   this.setState({
//     backers: 0
//   });
//   this.setState({
//     fundraised: 0
//   });
//   this.priceRender();
//   this.addyBalance();
//   this.confirmTx();
// }

  getCount() {
    axios.get('https://metamesh.io/stats')
              .then( (response) => {
                // console.log('subscribers', response.data.subscribers);
                this.setState({count: response.data.subscribers}, () => {
                  console.log(this.state);
                })
              })
              .catch((error) => {
                console.log(error);
              });
  }


  render() {
    return (
      <div className="App">
        <Navbar />
        {/*<NewNav />*/}
        <BannerDemo />
        {/* <Why count={this.state.count} /> */}
        {/* <How /> */}
        {/* <What /> */}
        {/* <Who /> */}
        {/* <FAQ /> */}
        {/* <Subscribe /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
