///KEYBOARD
//create an array for the alphabet
var alphabet = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
//loop through the alphabet and create buttons for each letter
for (var i = 0; i < alphabet.length; i++) {
	$('#lettersOnKeyboard').append('<div class="btn example btn-primary cyan z-depth-3">' + alphabet[i] + '</div>');
}


///LETTER BOXES
//create an array of words to randomize
var listOfWords = ['bazinga','canoodle','doodle','loopy','monkey','scootch','racecar','spork','viper','wasabi','yahoo','basketball','penguin','slapstick','package'];
var randomNumber = Math.floor(listOfWords.length*Math.random());
var randomWords = listOfWords[randomNumber].split(''); 
var lives = 6;

$('#remainingLives').append('6');

//create and set number of blank text boxes to the length of randomWord
var blankBox = [];
// var individualBox = $('<div class="eachLetterBox z-depth-4">' + blankBox + '</div>');
for (var i = 0; i < randomWords.length; i++) {
	blankBox.push('_ ');
}
$('#emptyAnswerBox').append(blankBox);

//this function runs when a letter on the keyboard is clicked
$('.btn').click(letterButtonClicked); 	//assigns the letter that was clicked to var letterClicked
$('.example').click(function(event) {
	$(event.currentTarget).addClass('disabled');	//disables key after it's clicked
})

function letterButtonClicked () {
	var letterClicked = (this.innerHTML).toLowerCase();
	for (var i = 0; i < randomWords.length; i++) { 	//scans through every letter in the array
		if (letterClicked === randomWords[i]) {  	//if the letter that was clicked equals the letters of the random word
			blankBox[i] = letterClicked;		//then replace the blank space with the clicked letter
		}
	}
	$('#emptyAnswerBox').text(blankBox.join(' '));

	if (blankBox.indexOf('_ ') === -1) {
		
	}

	if (!(randomWords.indexOf(letterClicked) > -1)) {
		lives -= 1;
		$('#remainingLives').text(lives);
		}

	if (lives < 1) {
		$('.hiddenAnswer').text(randomWords.join(' '));
		
	}
}



///CORRECT
//

///WRONG
//

///RESTART Button










