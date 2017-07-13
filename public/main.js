///KEYBOARD
//create an array for the alphabet
var alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
//loop through the alphabet and create buttons for each letter
for (var i = 0; i < alphabet.length; i++) {
	$('#lettersOnKeyboard').append('<div class="btn btn-primary cyan z-depth-3">' + alphabet[i] + '</div>');
}


///LETTER BOXES
//create an array of words to randomize
var listOfWords = ['car','bird','tree','bottle','laptop','concatenate','pseudocode'];
var randomNumber = Math.floor(listOfWords.length*Math.random());
var randomWords = listOfWords[randomNumber].split(''); 


//create and set number of blank text boxes to the length of randomWord
var blankBox = [];
// var individualBox = $('<div class="eachLetterBox z-depth-4">' + blankBox + '</div>');
for (var i = 0; i < randomWords.length; i++) {
	blankBox.push('_ ');
}
$('#emptyLetterBoxes').append(blankBox);

//this function runs when a letter on the keyboard is clicked
$('.btn').click(letterButtonClicked); 	//assigns the letter that was clicked to var letterClicked

function letterButtonClicked () {
	var letterClicked = (this.innerHTML).toLowerCase();
	console.log(letterClicked)
	// $(this).prop('disabled', true); 	//disables key after it's clicked
	for (var i = 0; i < randomWords.length; i++) { 	//scans through every letter in the array
		if (letterClicked === randomWords[i]) {  	//if the letter that was clicked equals the letters of the random word
			blankBox[i] = letterClicked;		//then replace the blank space with the clicked letter
		}
	}
	$('#emptyLetterBoxes').text(blankBox.join(' '));
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
// $(function(){
// 	$('.btn').on('click', function(event){
// 		letterClicked = $(event.currentTarget).text();
// 		letterButtonClicked();
// 	})
// 	//restart button

// 	//
// })









