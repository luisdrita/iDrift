
/* SERVER SIDE CODE */

var fs = require ('fs');
var data = fs.readFileSync('classification.json');

var words = JSON.parse(data);

var express = require ('express');
var app = express();

var server = app.listen(process.env.PORT || 3000, listening);

function listening() {

    console.log("listening...");

}

  app.use(express.static('website'));

/* ------------------------------------------- View All Words -------------------------------------------- */

app.get('/all', sendAll);

function sendAll(request,response) {

    response.send(words);

}

/* -------------------------------------------- Add Words ------------------------------------------------ */

app.get('/add/:word/:score?' , addWord);

function addWord(request, response) {

   var data = request.params;

   var word = data.word;

   var score = Number (data.score);

   var reply;

   if (!score) {

    /*   reply = {
           msg: "Score is required."
       };

       response.send(reply);

       */

       words[word] = null;
       var data = JSON.stringify(words);
       fs.writeFile ('classification.json', data, finished);

   } else {

       words[word] = score;
       var data = JSON.stringify(words);
       fs.writeFile ('classification.json', data, finished);

   }

    function finished(err) {

        console.log('all set.');

        reply = {
            status: "Success",
            score: score,
            word: word
        };

        response.send(reply);

    }

}