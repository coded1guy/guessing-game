//I first declared and asigned my variables allowing them to access the DOM elements
			var randomNumber = Math.floor(Math.random() * 100) + 1;
			var guesses = document.querySelector('.guesses');
			var lastResult = document.querySelector('.lastResult');
			var lowOrHi = document.querySelector('.lowOrHi');
			var guessSubmit = document.querySelector('.guessSubmit');
			var guessField = document.querySelector('.guessField');
			var guessCount = 1;
			var resetButton; guessField.focus();
			
			//my function which validates the guess
			function checkGuess() {
				var userGuess = Number(guessField.value);
				//this counts and display all the users attempt at the guess
				if(guessCount === 1) {
				guesses.textContent = 'Previous guesses: ';
		  }
			guesses.textContent += userGuess + ',' + ' ';
			 if(userGuess === randomNumber) {
			 	lastResult.textContent = 'Congratulations! You got it right! You are indeed a lucky one!';
			 	lastResult.style.color = 'green';
			 	lowOrHi.textContent = '';
			 setGameOver();
			 } else if(guessCount === 10) {
				lastResult.textContent = '!!!GAME OVER!!!';
				lowOrHi.textContent = ''; setGameOver();
			} else {
				lastResult.textContent = 'Wrong!';
				lastResult.style.color = 'red';
				 if(userGuess < randomNumber) {
					lowOrHi.textContent = 'Last guess was too low!';
			 } else if(userGuess > randomNumber) {
			 	lowOrHi.textContent = 'Last guess was too high!';
			 }
			}
			guessCount++;
			guessField.value = ''; guessField.focus();
			}guessSubmit.addEventListener('click', checkGuess);
			function setGameOver() {
				guessField.disabled = true;
				guessSubmit.disabled = true;
				resetButton = document.getElementById('restart');
				resetButton.style.display = 'block';	resetButton.addEventListener('click', resetGame);
			}
			function resetGame() {
				guessCount = 1;
				var resetParas = document.querySelectorAll('.resultParas p');
				for (var i = 0 ; i < resetParas.length ; i++) {
					resetParas[i].textContent = '';
			 }resetButton.parentNode.removeChild(resetButton);
			 guessField.disabled = false;
			 guessSubmit.disabled = false;
			 guessField.value = '';
			 guessField.focus();
			 lastResult.style.color = 'maroon';
			 randomNumber = Math.floor(Math.random() * 100) + 1;
}