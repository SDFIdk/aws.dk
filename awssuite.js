var express= require("express");

var app= express();

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('home.pug');
});

app.get('/licens', function (req, res) {
  res.render('licens.pug');
});

app.get('/support', function (req, res) {
  res.render('support.pug');
});

app.get('/was', function (req, res) {
  res.redirect('https://was.digst.dk/aws-dk');
});

var portnr= (process.env.PORT || 5000);
console.log("port: %s",portnr);
app.listen(portnr);
console.log("Express server listening on port %d in %s mode", portnr, app.settings.env);
