///KEYBOARD
//create 3 arrays for the qwerty keyboard
var keys1 = ['Q','W','E','R','T','Y','U','I','O','P'];	
var keys2 = ['A','S','D','F','G','H','J','K','L'];
var keys3 = ['Z','X','C','V','B','N','M'];

for (var i = 0; i < keys1.length; i++) {		//loop through each letter in the keys1 array and create a button for each
	$('#lettersOnKeyboard').append('<div class="btn disableKey amber darken-3 z-depth-3">' + keys1[i] + '</div>');
}
for (var i = 0; i < keys2.length; i++) {		//loop through each letter in the keys2 array and create a button for each
	$('#lettersOnKeyboard').append('<div class="btn disableKey amber darken-3 z-depth-3">' + keys2[i] + '</div>');
}
for (var i = 0; i < keys3.length; i++) {		//loop through each letter in the keys3 array and create a button for each
	$('#lettersOnKeyboard').append('<div class="btn disableKey amber darken-3 z-depth-3">' + keys3[i] + '</div>');
}


///ANSWER BOX
//create an array of words to randomize
var animals = ["aardvark", "alligator", "alpaca", "ant", "anteater", "antelope", "ape", "armadillo", "donkey", "baboon", "badger", "barracuda", "bat", "bear", "beaver", "bee", "bison", "boar", "buffalo", "butterfly", "camel", "caribou", "cat", "caterpillar", "cattle", "cheetah", "chicken", "chimpanzee", "chinchilla", "clam", "cobra", "cockroach", "cod", "coyote", "crab", "crane", "crocodile", "crow", "deer", "dinosaur", "dog", "dogfish", "dolphin", "donkey", "dove", "dragonfly", "duck", "dugong", "eagle", "eel", "elephant", "elk", "emu", "falcon", "ferret", "finch", "fish", "flamingo", "fly", "fox", "frog", "gazelle", "gerbil", "giraffe", "gnat", "goat", "goose", "goldfinch", "goldfish", "gorilla", "grasshopper", "gull", "hamster", "hare", "hawk", "hedgehog", "heron", "herring", "hippopotamus", "hornet", "horse", "human", "hummingbird", "hyena", "jackal", "jaguar", "jellyfish", "kangaroo", "koala", "kookabura", "lemur", "leopard", "lion", "llama", "lobster", "locust", "manatee", "mantis", "meerkat", "mole", "mongoose", "monkey", "moose", "mouse", "mosquito", "mule", "narwhal", "newt", "nightingale", "octopus", "ostrich", "otter", "owl", "ox", "oyster", "panda", "panther", "parrot", "partridge", "peafowl", "pelican", "penguin", "pheasant", "pig", "pigeon", "pony", "porcupine", "quail", "rabbit", "raccoon", "ram", "rat", "raven", "reindeer", "rhinoceros", "rook", "salamander", "salmon", "sandpiper", "sardine", "scorpion", "seahorse", "seal", "shark", "sheep", "shrew", "skunk", "snail", "snake", "sparrow", "spider", "squid", "squirrel", "starling", "stingray", "stinkbug", "stork", "swallow", "swan", "termite", "tiger", "toad", "trout", "turkey", "turtle", "viper", "vulture", "wallaby", "walrus", "wasp", "weasel", "whale", "wolf", "wolverine", "wombat", "woodcock", "woodpecker", "worm", "yak", "zebra"];
var randomNumber = Math.floor(animals.length*Math.random());	
var randomWords = animals[randomNumber].split(''); 
var lives = 6;
var blackHearts = 0;
var answerBox = [];
hearts();
for (var i = 0; i < randomWords.length; i++) {	//loop through the length or randomWords and push '_ '
	answerBox.push('_ ');
}
$('#emptyAnswerBox').append(answerBox);		

//this function runs when a letter on the keyboard is clicked
$('.btn').click(letterButtonClicked); 	//assigns the letter that was clicked to var letterClicked
$('.disableKey').click(function(event) {
	$(event.currentTarget).addClass('disabled');	//disables key after it's clicked
})

function letterButtonClicked () {
	var letterClicked = (this.innerHTML).toLowerCase();
	for (var i = 0; i < randomWords.length; i++) { 	//scans through every letter in the array
		if (letterClicked === randomWords[i]) {  	//if the letter that was clicked equals the letters of the random word
			answerBox[i] = letterClicked;		//then replace the blank space with the clicked letter
		}
	}
	$('#emptyAnswerBox').text(answerBox.join(' '));

	if (answerBox.indexOf('_ ') === -1) {
		$('.btn').addClass('disabled');
		setTimeout("alert('WINNER!')", 400);
	}

	if (!(randomWords.indexOf(letterClicked) > -1)) {
		lives -= 1;
		blackHearts += 1;
		$('#remainingLives').empty();
		hearts();
		heartSilhouette();
		}

	if (lives < 1) {
		$('.hiddenAnswer').text(randomWords.join(' '));
		$('.btn').addClass('disabled');
		setTimeout("alert('Game Over!')", 400);
	}
}

///RESTART Button
function restart () {
	$('#restart').on('click',function(){
		window.location.reload(true);
	});
}
restart();

///Hearts
function hearts () {
	for (var i = 0; i < lives; i++) {
		$('#remainingLives').append('<img class="hearts" src="images/heart.png">');
	}
}

function heartSilhouette () {
	for (var i = 0; i < blackHearts; i++) {
		$('#remainingLives').append('<img class="heartSilhouette" src="images/heart.png">');
	}
}


$('.spaceship').append('<img class="ship" src="images/spaceship.png">');
$('.cow').append('<img class="moo" src="images/cow.png">');



///CORRECT
//

///WRONG
//









