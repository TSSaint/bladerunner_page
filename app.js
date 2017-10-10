var express = require('express');
var app = express();

// home test
app.get('/', function(req, res) {
  res.send('Drone synth firing..');
});

// deckard egg
app.get('/deckard', function(req, res) {
  res.send('I had your job once. I was good at it.');
});

// officer K egg
app.get('/officerk', function(req, res) {
    res.send('I just want to ask some questions.');
  });

// console.log test
app.listen(2048, function() {
  console.log('Scanning for replicants on LocalHost: 2049 - 1.');
})