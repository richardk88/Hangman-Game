///KEYBOARD
//create 3 arrays for the qwerty keyboard
var keys1 = ['Q','W','E','R','T','Y','U','I','O','P'];	
var keys2 = ['A','S','D','F','G','H','J','K','L'];
var keys3 = ['Z','X','C','V','B','N','M'];

for (var i = 0; i < keys1.length; i++) {		//loop through each letter in the keys1 array and create a button for each
	$('#lettersOnKeyboard1').append('<div id="buttonCSS" class="btn waves-effect waves-light disableKey green z-depth-9">' + keys1[i] + '</div>');
}
for (var i = 0; i < keys2.length; i++) {		//loop through each letter in the keys2 array and create a button for each
	$('#lettersOnKeyboard2').append('<div id="buttonCSS" class="btn waves-effect waves-light disableKey green z-depth-9">' + keys2[i] + '</div>');
}
for (var i = 0; i < keys3.length; i++) {		//loop through each letter in the keys3 array and create a button for each
	$('#lettersOnKeyboard3').append('<div id="buttonCSS" class="btn waves-effect waves-light disableKey green z-depth-9">' + keys3[i] + '</div>');
}


///ANSWER BOX
//create an array of words to randomize
var animals = ["alligator", "alpaca", "ant", "anteater", "antelope", "ape", "armadillo", "donkey", "baboon", "badger", "barracuda", "bat", "bear", "beaver", "bee", "bison", "boar", "buffalo", "butterfly", "camel", "cat", "caterpillar", "cheetah", "chicken", "chimpanzee", "coyote", "crane", "crocodile", "crow", "deer", "dog", "dolphin", "donkey", "dove", "duck", "eagle", "elephant", "falcon", "ferret", "fish", "flamingo", "fox", "frog", "gerbil", "giraffe", "goat", "goose", "goldfish", "gorilla", "grasshopper", "hamster", "hawk", "hedgehog", "hippopotamus", "horse", "hummingbird", "hyena", "jaguar", "jellyfish", "kangaroo", "koala", "leopard", "lion", "llama", "lobster", "manatee", "mole", "mongoose", "monkey", "moose", "mouse", "mule", "octopus", "ostrich", "otter", "owl", "ox", "panda", "parrot", "peacock", "pelican", "penguin", "pig", "pigeon", "pony", "porcupine", "rabbit", "raccoon", "ram", "raven", "reindeer", "scorpion", "seahorse", "seal", "shark", "sheep", "skunk", "snail", "snake", "sparrow", "spider", "squid", "squirrel", "stingray", "stork", "swan", "tiger", "toad", "turkey", "turtle", "vulture", "walrus", "whale", "wolf", "woodpecker", "zebra"];
var randomNumber = Math.floor(animals.length*Math.random());	
var randomWords = animals[randomNumber].split(''); 
var lives = 6;					//players start with 6 lives.
var blackHearts = 0;			//heart silhouettes start at 0 and increment based on incorrect guesses.
var answerBox = [];	
var letterClicked = '';			
hearts();
area51();
for (let i = 0; i < randomWords.length; i++) {	//loop through the length or randomWords and push '_ '
	answerBox.push('— ');
}
$('#emptyAnswerBox').append(answerBox);		

$('.btn').on('click', function(){				//this function runs when a letter on the keyboard is clicked
	letterClicked = $(event.target).text().toLowerCase();	//assigns the letter that was clicked to var letterClicked
	letterButtonClicked(letterClicked);
}); 	
$('.disableKey').on('click', function(event) {
	$(event.currentTarget).addClass('disabled');	//disables key after it's clicked
})

function letterButtonClicked (x) {
	for (let i = 0; i < randomWords.length; i++) { 		//scans through every letter in the array
		if (x === randomWords[i]) {  				//if the letter that was clicked equals the letters of the random word
			answerBox[i] = x;					//then replace the blank space with the clicked letter
		}
	}
	$('#emptyAnswerBox').text(answerBox.join(' '));		//adds answer from letter arrary and displays it

	if (answerBox.indexOf('— ') === -1) {				//if dashes are gone
		$('.disableKey').addClass('disabled');				//disable the keyboard
		setTimeout("alert('Congratulations! The cow lives to see another day.')", 200);			//and alert 'congratulations'
	}

	if (!(randomWords.indexOf(x) > -1)) {			//if the word does not have the letter 
		lives -= 1;								// lives decrement by 1.
		blackHearts += 1;							//blackHearts increment by 1.
		$('#remainingLives').empty();					//removes all the child nodes from #remainingLives.
		hearts();									//call the heart function.
		heartSilhouette();						//call the heartSilhouette function.

	}
	if (lives === 5) {							//if lives = 5, remove default class 'moo' and add class 'moo1'.
		$('#cow-image').removeClass("moo").addClass('moo1');
	}			
	if (lives === 4) {							//if lives = 4, remove default class 'moo1' and add class 'moo2'.
		$('#cow-image').removeClass("moo1").addClass('moo2');
	}
	if (lives === 3) {							//if lives = 3, remove default class 'moo2' and add class 'moo3'.
		$('#cow-image').removeClass("moo2").addClass('moo3');
	}
	if (lives === 2) {							//if lives = 2, remove default class 'moo3' and add class 'moo4'.
		$('#cow-image').removeClass("moo3").addClass('moo4');
	}
	if (lives === 1) {							//if lives = 4, remove default class 'moo' and add class 'moo5'.
		$('#cow-image').removeClass("moo4").addClass('moo5');
	}
	if (lives < 1) {							//if lives < 1
		$('.hiddenAnswer').text(randomWords.join(' '));			//show the answer
		$('.disableKey').addClass('disabled');				//disable the keyboard
		setTimeout("alert('GAME OVER! Chick-fil-A is NOT a fan...')", 600);	//alert 'game over'
		$('.main').empty().append('<img class="cloud9" src="images/cloud.png">');	//remove child nodes from .main and add cloud image tag.
	}
}



///RESTART Button
function restart () {							//this function reloads the window when #restart button is clicked.
	$('#restart').on('click',function(){
		window.location.reload(true);
	});
}
restart();

///Hearts
function hearts () {							//this function sets heart icons based on how many lives are left.
	for (var i = 0; i < lives; i++) {
		$('#remainingLives').append('<img class="hearts" src="images/heart.png">');
	}
}

function heartSilhouette () {					//this function sets heart silhouette icons based on incorrect guesses.
	for (var i = 0; i < blackHearts; i++) {	
		$('#remainingLives').append('<img class="heartSilhouette" src="images/heart.png">');
	}
}

///SPACESHIP & COW
function area51 () {							//run this function to load images of the spaceship and cow.
	$('.spaceship').append('<img class="ship" src="images/spaceship.png">');
	$('.cow').append('<img class="moo" id="cow-image" src="images/cow.png">');
}


///CORRECT
//

///WRONG
//
