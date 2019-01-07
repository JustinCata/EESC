import React from 'react';
import './css/roadmap.css';

const Roadmap = ()=>{
  return (
    <div id="Roadmap" className="Roadmap">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h2>Metamesh Roadmap</h2>
          </div>
        </div>
        <div className="timeline">
          <ul>
            <li>
              <div>
                <time>Q2 2018</time>
                <p>Metamesh 30 day Crowdfund Ends.</p>
              </div>
            </li>
            <li>
              <div>
                <time>Mid Q4 2018</time>
                <p>Metamesh <span className="bold">Alpha Launch</span>! Early access for $50 and $75 contributors.</p>
              </div>
            </li>
            <li>
              <div>
                <time>Q1 2019</time>
                <p>Metamesh <span className="bold">Beta Launch</span>! Early access for all contributors + invites.</p>
              </div>
            </li>
            <li>
              <div>
                <time>Q2 2019</time>
                <p>Metamesh <span className="bold">Full Launch</span>! Access to all of the public.</p>
              </div>
            </li>
            <li>
                <div>
                  <time>Q4 2019</time>
                  <p>Metamesh <span className="bold">Mobile Beta Launch</span>! On Android and iOS devices. Early access to highly active users.</p>
                </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
