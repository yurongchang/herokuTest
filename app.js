var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.set('view engine','ejs');

app.use('/',function(req,res,next){
  console.log('Request Url:' + req.url);
  next();
});

app.get('/',function(req,res){
  res.render('index');
});

app.listen(port);
