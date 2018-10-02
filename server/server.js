var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('test'));
  
app.listen(3000,listening);
function listening () {
    console.log('server listening ...');
}
app.post('/form',urlencodedParser,function(req,res){
  if (!req.body) return res.sendStatus(400);
  console.log(req.body);

});

// app.get('/form',function(req,res){
//   res.sendFile(__dirname + '/index.html');
// });















/* Youtobe lesson*/

// let fs = require('fs');
// let data = fs.readFileSync('word.json');
// let words = JSON.parse(data);

// app.get('/add/:word/:score?',addWord);
//  function addWord (req,res){
//    let data = req.params;
//    let word = data.word;
//    let score = Number(data.score);
//    let reply
//     if(!score){
//         reply = {
//         msg :'score is required'
//       }
//     }else{
//       words[word] = score;
//     let   data = JSON.stringify(words);
//        fs.writeFile('word.json',data,finished)
//        function finished(err){
//         reply = {
//           word : word,
//           score : score,
//           status :'sucsces'
//         }
//         res.send(reply);
//        }
//     }
//  }

// app.get('/all',sendAll);
// function sendAll(req,res){
//   res.send(words);
// }

// app.get('/search/:word/',searchWord);
// function searchWord(req,res) {
//   let word = req.params.word;
//   let reply;
//     if(words[word]) {
//       reply = {
//           status :'found',
//           word   : word,
//           score  : words[word]
//       }
//     }else {
//       reply = {
//         status : 'not found',
//         word   : word
//       }
//     }
// res.send(reply );
// }