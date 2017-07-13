///KEYBOARD
//create an array for the alphabet
var alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
//loop through the alphabet and create buttons for each letter
for (var i = 0; i < alphabet.length; i++) {
	$('#lettersOnKeyboard').append('<div class="btn btn-primary cyan z-depth-3">' + alphabet[i] + '</div>');
}


///LETTER BOXES
//create an array of words to randomize
var listOfWords = ['car','bird','tree','bottle','laptop','conatenate','pseudocode'];
var randomNumber = Math.floor(listOfWords.length*Math.random());
var randomWords = listOfWords[randomNumber].split('');

//create and set number of blank text boxes to the length of randomWord
for (var i = 0; i < randomWords.length; i++) {
	$('#emptyLetterBoxes').append('<div class=" btn-primary white z-depth-3">' + randomWords[i] + '</div>');
}



///SCORE TRACKER
//


///REMAINING LIVES
//

///CORRECT
//

///WRONG
//

///WINNER
//

///LOSER
//





//attach methods to the DOM as event handlers
$(function(){
	$('#letterButtonClicked').on('click', function(event){
		event.stopPropagation();

	})
})
