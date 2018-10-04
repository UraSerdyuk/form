var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('test'));
app.set('view engine','ejs');

app.listen(3000,listening);
function listening () {
    console.log('server listening ...');
}

app.post('/form',urlencodedParser,function(req,res){
  if (!req.body) {return res.sendStatus(400)}
  let obj = {
    email: 'test@gmail.com',
    name: 'neme',
    password: '123qwe'
  }
  obj.email = req.body.email;
  obj.name = req.body.text;
  obj.password = req.body.password;

    console.log(req.body.email);
    console.log(req.body.text);
    console.log(req.body.password);
    console.log(obj);

    res.render('formAnswere',{obj:obj});

});

