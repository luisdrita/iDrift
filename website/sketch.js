
function setup () {

    loadJSON('/all', gotData);

    var button = select('#play');

    var word = select('#playerName').value();

 /*   button.mousePressed(submitWord); */

  /*  setTimeout(submitWord, 5000); */

 /*   if(check2 === false) {

       submitWord();

    }

    */

}

    function gotData(data) {

        console.log(data);

        var keys = Object.keys(data);

        var values = Object.values(data);

        var array = [];

    /*    for (var i = 0; i < keys.length; i++)  {

            if (i > 0) {
            var prevWord = keys[i-1];
            } else {
            var prevWord = keys[0];
            }

            var word = keys[i];

            var score = data[word];

            if (score < prevWord) {
                array [i] = prevWord;
                array [i-1] = word;
            } else {
                array[i] = word
            }

        }

        */

        values.sort(function(a, b){return a-b});

        for (var i = 0; i < keys.length; i++)  {

            for (var j = 0; j < keys.length; j++)  {

                var word = keys[j];

                var score = data[word];

                if (values[i] === score) {

                    array[i] = word;

                }

            }

        }

        for (var i = 0; i < 10; i++)  {

            let node = document.createElement("LI");
            let textnode = document.createTextNode(array[i] + " - " + values[i]);
            node.appendChild(textnode);
            document.getElementById("ranking").appendChild(node);
        }

        console.log(array);

    }

    function submitWord() {

        var score = time2;

        loadJSON('add/' + name + '/' + score, finished);

     /*   var rankingg = select('#ranking'); */

    }

    function finished(data) {

        console.log(data);

    }