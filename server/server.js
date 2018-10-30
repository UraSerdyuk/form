var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine','ejs');

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
  console.log('server listening ... ' + 'port :' + PORT);
});

app.use(express.static('project'));

app.post('/form',urlencodedParser,function(req,res){
  if (!req.body) {return res.sendStatus(400)}
  let obj = {
    
  }
  obj.email = req.body.email;
  obj.name = req.body.text;
  obj.password = req.body.password;


    res.render('formAnswere',{obj:obj});

});

