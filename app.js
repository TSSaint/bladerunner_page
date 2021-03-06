var express = require('express');
var app = express();

// set render engine
app.set("view engine", 'ejs');

// home
app.get('/', function(req, res) {
  res.render('index', {
    title: "BLADE RUNNER PAGE",
    movies: ["Blade Runner","Blade Runner 2049"]
  });
});

// deckard
app.get('/deckard', function(req, res) {
  res.render('deckard', {
    title: "BLADE RUNNER PAGE",
    movies: ["Blade Runner", "Blade Runner 2049"]
  });
});

// officer K
app.get('/officerk', function(req, res) {
  res.render('officerk', {
    title: "BLADE RUNNER PAGE",
    movies: ["Blade Runner", "Blade Runner 2049"]
  });
});

// officer
app.get('/ltjoshi', function(req, res) {
  res.render('ltjoshi', {
    title: "BLADE RUNNER PAGE",
    movies: ["Blade Runner", "Blade Runner 2049"]
  });
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
});

// missing page logic
app.get('*', function(req, res) {
  res.send("This is not page that you are looking for.");
});
