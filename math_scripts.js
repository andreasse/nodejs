//addition
function addition() {
	var ourAnswer = document.getElementById("answer").value;

	if (isNaN(ourAnswer)) {
		document.getElementById("output").innerHTML = "Hey! " + ourAnswer + " is not a number hombre!";

	} else {
		if (ourAnswer == correctAnswer) {
			document.getElementById("output").innerHTML = ourAnswer + " is correct!";
		} else {
			document.getElementById("output").innerHTML = ourAnswer + " is the wrong answer";
		}
	}
}

function newCard() {
	document.getElementById("output").innerHTML = ""
	document.getElementById("answer").value = ""
	numOne = Math.floor(Math.random() * 10 + 1);
	numTwo = Math.floor(Math.random() * 10 + 1);
	document.getElementById("question").innerHTML = numOne + " + " + numTwo;
	correctAnswer = numOne + numTwo;
}

