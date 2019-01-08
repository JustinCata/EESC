import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import ContactUs from './components/ContactUs'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<Router>
    <div>
      <Route exact path='/'component={App}/> 
      <Route exact path='/contact' component={ContactUs} />    
    </div>
</Router>, document.getElementById('root'));
registerServiceWorker();
