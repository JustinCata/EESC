var router = require('express').Router();
var nodemailer = require('nodemailer');
var User = require('../models/subscribe');
var Fund = require('../models/fund');



router.get('/', function(req,res) {
    res.json('3001');
})
router.get('/users', function(req, res) {
    res.json([
        {id: 0, founder: "Claudio"},
        {id: 1, founder: "Oriana"},
        {id: 2, founder: "Vince"},
        {id: 3, founder: "Justin"}
    ]);
});
router.get("/register", function(req, res){

    var email = req.query.email.trim().toLowerCase();

    //Check if the email is taken
    if(email.trim() == ""){
        res.send(JSON.stringify({ "message" : "FAILURE", "rson" : "EMPTY_F"}));
    }else if(!validateEmail(email)){
        res.send(JSON.stringify({ "message" : "FAILURE", "rson" : "INV_EMAIL"}));
    }else{
        User.findOne({email : email}, function(err, user){
            if(err){
                res.send(JSON.stringify({ "message" : "FAILURE", "rson" : "500"}));
            }else{
                if(user){
                    res.send(JSON.stringify({ "message" : "FAILURE", "rson" : "EMAIL_TAKEN"}));
                }else{
                    //Email is ok. Register the user.
                    var user = new User();
                    user.email = email;

                    user.save(function(err){

                        if(err){
                            res.send(JSON.stringify({ "message" : "FAILURE", "rson" : "500"}));
                        }else{
        
                            // create reusable transporter object using the default SMTP transport
                            var transporter = nodemailer.createTransport({
                                service: 'gmail',
                                auth: {
                                    user: 'metamesh.io@gmail.com',
                                    pass: '<metamesh>iota</metamesh>'
                                }
                            });

                            var text = "<p>Welcome! </p></br></br>" ;
                            text += "<p>Thank you for registering for Metamesh! You can sell your own products, share the products you love and even earn commissions with the tap of a button. If you are looking to be a seller on Metamesh contact us at <a href='mailto:support@metamesh.io'>support@metamesh.io</a> with your brand logo to place it on our page as a supporting brand!</p></br></br>";
                            text += "<p>Connect with us through <a href='https://www.facebook.com/Metamesh.io'>Facebook</a>  and <a href='https://twitter.com/Metamesh_io'>Twitter</a>!</p></br></br>";
                            text += "<p>Sincerely, </p></br>";
                            text += "<p>The Metamesh Team </p></br>";
                            text += "<br /><img src='https://cdn-images-1.medium.com/max/1000/1*C6tMRj4ErUGk3vuISFDCaQ.png' style='width:500px;'/><br />";
                            text += "<a href='http://metamesh.io' >Website</a><br/>";
                            text += "<a href='https://medium.com/metamesh' >Blog</a><br/>";
                            

                            // setup email data with unicode symbols
                            var mailOptions = {
                                from: "support@metamesh.io", // sender address
                                to: email, // list of receivers
                                subject: "Welcome to Metamesh!", // Subject line
                                html: text,
                            };

                            // send mail with defined transport object
                            transporter.sendMail(mailOptions, (error, info) => {
                                if (error) {
                                    console.log("Error : " + error);
                                }else{

                                    console.log(info);
                                    res.send(JSON.stringify({ "message" : "SUCCESS"}));
                                }
                            });
                            
                        }

                    });
                }
            }
        })
    }

});

router.get("/fund", function(req, res){

    var email = req.query.email.trim().toLowerCase();
    var name = req.query.name.trim();
    var address = req.query.address;
    var IOTA = req.query.IOTA;
    var Dollars = req.query.USD;
    var tier = req.query.tier;
    var tag = req.query.tag; 
    var city = req.query.city;
    var states = req.query.states;
    var zip = req.query.zip;
    var country = req.query.country;
    var size = req.query.size;
    
    var IOTAaddress= 'EX9MMJLT9IAJMEPJBPUIAOYYDERNNESFEL9CMPHZVVUYDCIYJILPRPRQNXVSBFKSPPDKUNLKSWYEYUL9BLVWOWNGHW';

    //Check if the email is taken
    if( name == "" || email == "" || IOTA == ""){
        res.send(JSON.stringify({ "message" : "FAILURE", "rson" : "EMPTY_F"}));
    }else if(IOTA < 1 || !Number) {
        res.send(JSON.stringify({ "message" : "FAILURE", "rson" : "NEG_FUNDS"}));
    } 
    else if(tier == "Alpha Supporter" && address == "") {
        res.send(JSON.stringify({ "message" : "FAILURE", "rson" : "NO_ADD"}));
    } 
    else if(tier == "Alpha Supporter" && size == "") {
        res.send(JSON.stringify({ "message" : "FAILURE", "rson" : "NO_SIZE"}));
    }
    else {
        //Fields filled
        var fund = new Fund();
        fund.name = name;
        fund.email = email;
        fund.address = address;
        fund.city = city;
        fund.states = states;
        fund.zip = zip;
        fund.country = country;
        fund.iota = IOTA;
        fund.dollars = Dollars;
        fund.tier = tier;
        fund.tag = tag;
        fund.size = size;


        fund.save(function(err){

            if(err){
                res.send(JSON.stringify({ "message" : "FAILURE", "rson" : "500"}));
            }else{

                // create reusable transporter object using the default SMTP transport
                var transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'metamesh.io@gmail.com',
                        pass: ''
                    }
                });

                var text = "<h2>Hi " + name + ", </h2></br></br>" ;
                text += "<p >Thank you for crowdfunding $" + Dollars + " (" + IOTA + " MIOTA) for Metamesh! This will be IOTA's social e-commerce marketplace and it will be created thanks to people like you. If you have any questions regarding our services feel free to contact us at <a href='mailto:support@metamesh.io'>support@metamesh.io</a>. If we don't reach our funding goal of $40,000 by June 5th we will return the IOTA you supported us with!</p></br></br>";
                text += "<h3>Directions</h3><ol><li>Log into your IOTA wallet</li><li>Under the send tab paste the address <b>" + IOTAaddress + "</b></li><li>Input <b>" + IOTA + "</b> and select <b>Mi</b> (MIOTA) in the drop down button </li><li>Copy your tag <b>" + tag + "</b> in the optional tag section </li><li>Press send</li></ol>";
                text += "<p >Connect with us through <a href='https://www.facebook.com/Metamesh.io'>Facebook</a>  and <a href='https://twitter.com/Metamesh_io'>Twitter</a>! Be sure to join our <a href='https://discord.gg/Y2cQHVx'>Discord</a> community!</p></br></br>";
                text += "<p >Sincerely, </p></br>";
                text += "<p >The Metamesh Team </p></br>";
                text += "<br /><img src='https://cdn-images-1.medium.com/max/1000/1*C6tMRj4ErUGk3vuISFDCaQ.png' style='width:500px;'/><br />";
                text += "<a href='http://metamesh.io' >Website</a><br/>";
                text += "<a href='https://medium.com/metamesh' >Blog</a><br/>";

                // setup email data with unicode symbols
                var mailOptions = {
                    from: "support@metamesh.io", // sender address
                    to: email, // list of receivers
                    subject: "Congrats " + name + " on becoming a Metamesh " + tier + "!", // Subject line
                    html: text,
                };

                // send mail with defined transport object
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.log("Error : " + error);
                    }else{

                        console.log(info);
                        res.send(JSON.stringify({ "message" : "SUCCESS"}));
                    }
                });
                
            }

        });
    }
});

router.get('/stats', function(req, res) {
    Fund.find({})
      .then(fundedUser => {
          User.find({})
            .then(subscriber => {
                return res.json({
                    subscribers: fundedUser.length + subscriber.length + 150
                })
            })
            .catch(err => {
                console.log(err);
            });
      })
      .catch(err => {
          console.log(err);
      });
})
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}



module.exports = router;