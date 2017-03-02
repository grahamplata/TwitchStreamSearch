const path = require('path');
const express = require('express');
const app = express();
const request = require('request');
var dotenv = require('dotenv');
dotenv.load();
// If an incoming request uses
// a protocol other than HTTPS,
// redirect that request to the
// same url but with HTTPS
const forceSSL = function () {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(['https://', req.get('Host'), req.url].join(''));
    }
    next();
  }
}

//enviroment key
var key = process.env.TWITCH_API_KEY;

// Instruct the app
// to use the forceSSL
// middleware
app.use(forceSSL());

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));

app.get('/api/search', function (req, res) {
  request({url:'https://api.twitch.tv/kraken/search/streams?'+'client_id='+key, qs: req.query}, function (error, response, body) {
    res.send(body);
  });
});

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);
