import React from 'react';
import claudio from './assets/Who/claudio.PNG';
import oriana from './assets/Who/oriana.PNG';
import justin from './assets/Who/justin.PNG';
import twitter from './assets/twitter_team.svg';
import linkedin from './assets/linkedin.svg';
import github from './assets/github.svg';
import './css/who.css';

const Who = ()=>{
  return(
    <div id='WHO' clasName='Team'>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h4 className='header'>Team</h4>
          </div>
        </div>
        <div className="row">

            <div className="row ">
              <div className="col-xs-12 col-sm-5">
                <img className='image' src={claudio} alt="Claudio Atilano" />
                <div className="row">
                  <a href="https://twitter.com/claudioatilano"><img className="social-twitter" src={twitter} /></a>
                  <a href="https://www.linkedin.com/in/claudioatilano/" ><img className="social-linkedin" src={linkedin} /></a>
                  <a href="https://github.com/abel30567" ><img className="social-github" src={github} /></a>
                </div>
              </div>
              <div className="col-xs-12 col-sm-7">
                <h4>Claudio Atilano</h4>
                <h5>Engineering & Business Development</h5>
                <p>
                  Claudio is a web developer with a strong background in data analysis.
                  He founded <a href="#" target="_blank">iMarkett</a>, a company that was dedicated to creating IOTA wallet solutions for non-technical users.
                  Claudio studied Physics and Entrepreneurship at Florida International University (FIU), where he met Justin Cata and Oriana Aristizabal.
                  Claudio worked as a web developer at Haqshaq LLC and Florida International University.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12 col-sm-5">
                <img className='image' src={oriana} alt="Oriana Aristizabal" />
                <div className="row">
                  <a href="https://twitter.com/orbiarve1"><img className="social-twitter" src={twitter} /></a>
                  <a href="http://linkedin.com/in/oriana-aristizabal-vega-6b9739105" ><img className="social-linkedin" src={linkedin} /></a>
                </div>
              </div>
              <div className="col-xs-12 col-sm-7">
                <h4>Oriana Aristizabal</h4>
                <h5>Product Design & Business Development</h5>
                <p>
                  Oriana studied Physics and Economics at FIU with experience working for the Federal Reserve of Atlanta as a quantitative analyst in the Supervisions and Regulations department.
                  Oriana is also a member of the Blockchain Education Network and founded a small organization at FIU to help students learn the value of distributed ledger technology.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12 col-sm-5 image">
                <img className='image' src={justin} alt="Justin Cata" />
                <div className="row">
                  <a href="https://twitter.com/purexedpose"><img className="social-twitter" src={twitter} /></a>
                  <a href="https://www.linkedin.com/in/justin-cata-python-developer/" ><img className="social-linkedin" src={linkedin} /></a>
                </div>
              </div>
              <div className="col-xs-12 col-sm-7">
                <h4>Justin Cata</h4>
                <h5>Engineering & Business Development</h5>
                <p>
                  Justin studied Physics and Mathematics at FIU, is skilled in data analysis, and manages a private fund which specializes in high risk cryptocurrency investing.
                  He is also a member of the Blockchain Education Network.
                  Justin worked with Claudio to create a physics data analysis package to enhance college student’s programming skills, called <a href="https://github.com/abel30567/Physpy" target="_blank">Physpy</a>.
                </p>
              </div>
            </div>

        </div>
      </div>
    </div>
  );
}

export default Who;
