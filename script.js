var num = Math.floor((Math.random() * 100) + 1);

function checkGuess() {
	var guess = document.getElementById("guess").value;
	if (num == guess) {
		document.getElementById("command").innerHTML = "You got it right!!!";
	} else {
		if (guess < num) {
			document.getElementById("command").innerHTML = "It's higher.";
		} else{
			document.getElementById("command").innerHTML = "It's lower.";
		}
	}
}

function changeColor() {
	document.getElementById("command").style.color="red";
	return true;
}

function changeColorBack() {
	document.getElementById("command").style.color="black";
	return true;
}

