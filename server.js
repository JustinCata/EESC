var express = require('express'); // Web development framework
var morgan = require('morgan'); // Development webpage codes: 200 ok, 404 no page, 500 server error, etc.
var mongoose = require('mongoose'); // Mongo Database 
var bodyParser = require('body-parser'); // Parses requests sent by user
const path = require('path');
const https = require('https');
const fs = require('fs');




 // We get the creation of the user with it's model
var secret = require('./config/secret'); // Where the secret things live


var app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



// Connect DB
mongoose.Promise = global.Promise;
mongoose.connect(secret.database);
mongoose.connection
    .once('open', () => console.log('MongoDB...ENGAGED'))
    .on('error', err => console.error(err))

 
// Middleware
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/assets'));
app.use("/node_modules/react-notifications/lib",express.static(__dirname + "/node_modules/react-notifications/lib"));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    next();
});
const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/metamesh.io/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/metamesh.io/cert.pem')
  };


// VIEWS 


// ROUTES

var mainRoutes = require('./routes/main');


app.use(mainRoutes);







app.listen(secret.port, function(err) { 
    if (err) {
        throw err;
    }
    console.log("The magic happens in Port " + secret.port);
});

// https.createServer(options, app).listen(secret.sslPort);