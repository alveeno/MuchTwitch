const express = require('express');
const app = express();
const router = express.Router();

app.set('view engine', 'ejs');

// app.all('/*', function (req, res, next) {
//     console.log(req.path);
//     next() // pass control to the next handler
//   });

app.get('/', function (req, res) {
    console.log("hello");  
    res.render('home');
  });

app.get('/*', function (req, res) {
    console.log(req.path);  
    res.render('index', {path: req.path});
    //res.sendFile(__dirname + "/index.html");
  });

  app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });