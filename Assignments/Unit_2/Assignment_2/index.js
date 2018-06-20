/*
Write Javascript to perform the following tasks. 
Please push your changes back to your personal OR_MTF_Submissions directory. 
*/

// USE JavaSCript to complege these tasks:

// 1. Change the background color of The first page by selecting the appropriate ID.

document.body.style.backgroundColor = "lightblue";

// 2. Change the inner text of the h1 to say anything that you would like.

document.getElementById("theTitle").innerHTML = "Good night";

// 3. Create a variable that is equal to the DOM object that has the id random-btn.

document.getElementById("random-btn").innerHTML = "Random Button for Font Size";

// 4. Create a variable that is equal to the DOM object that has the id pageTitle. 

document.getElementById("pageTitle").innerHTML = "10:54PM";


// 5. Create a fucntion called randomSize that changes the font size of pageTitle to be between 1px and 100px.

function randomSize() {
	document.getElementById("theTitle").style.fontSize = Math.floor((Math.random() * 100) + 1)+"px";
}

// 6. Create an event listener that runs the randomSize function on click.

document.getElementById("random-btn").addEventListener("click", randomSize);
