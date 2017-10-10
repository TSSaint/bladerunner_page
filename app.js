var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Drone synth firing..');
});

app.get('/deckard', function(req, res) {
  res.send('I had your job once. I was good at it.');
});

app.listen(2049, function() {
  console.log('Scanning for replicants on LocalHost: 2049.');
})