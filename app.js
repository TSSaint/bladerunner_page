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

///////////////////////////
// Blade Runner Original //
//////////////////////////
app.get('/bladerunner', function(req, res) {
  res.send('LOS ANGELES: 2019.');
});

///////////////////////
// Blade Runner 2049 //
///////////////////////
app.get('/bladerunner2049', function(req, res) {
  res.send('LOS ANGELES: 2049.');
});

// console.log test
app.listen(2048, function() {
  console.log('Scanning for replicants on LocalHost: 2049 - 1.');
})