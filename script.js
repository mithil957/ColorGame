
var numSquares = 6 //initial number of squares
var colors = randColors(numSquares) //sets colors to be an array of random colors of length numSquares

var squares = document.querySelectorAll('.square'); 
var selectedColor = colors[pickColor()]; //randomly picks what the winning color will be
document.querySelector('#color2pick').textContent = selectedColor; //tells the player what the color they are looking for
var message = document.querySelector('#message')
var ezBut = document.querySelector('#ez')
var hardBut = document.querySelector('#hard')
var resetBut = document.querySelector('#reset')
var diffButtons = document.querySelectorAll('.diff')


setUpButtons()//adds all the difficulty levels
gameMech()//controls game mechanics 
reset()//lets the player reset the game 


function setUpButtons(){
	for(var i =0;i< diffButtons.length; i++){
	diffButtons[i].addEventListener('click',function(){
		diffButtons[0].classList.remove('slec')//removes 'slec' class so that only button can appear to be selected
		diffButtons[1].classList.remove('slec')
		diffButtons[2].classList.remove('slec')
		diffButtons[3].classList.remove('slec')
		this.classList.add('slec')//adds 'slec' so the user knows what button is selected
		if(this.textContent == 'Easy'){
			numSquares =3;
		}else if(this.textContent == 'Hard'){
			numSquares=6;
		}else if(this.textContent == 'Expert'){
			numSquares=9;
		}else{
			numSquares=12;
		}
		reset();//reset game 
	})
	}
}

function gameMech(){ 
	for(var i=0; i<squares.length; i++){

	squares[i].style.backgroundColor = colors[i] //colors the squares
	squares[i].addEventListener('click',function(){
		if(this.style.backgroundColor === selectedColor){ //victory conditions
			message.textContent = 'Correct'
			correctAni()
			resetBut.textContent = 'New Colors'
		}else{ //loss effects
			this.style.backgroundColor = '#232323';
			message.textContent = 'Try again'
		}
	})
	
	}
}

function reset(){
	message.textContent = ''//gets rid of message
	colors = randColors(numSquares);//makes a randomized array with colors
	selectedColor = colors[pickColor()]//sets the winning the color
	document.querySelector('#color2pick').textContent = selectedColor
	document.querySelector('h1').style.backgroundColor = '#428BCA'

	for(var i =0;i<squares.length; i++){//sets up the board 
		if(colors[i]){
		squares[i].style.display = 'initial'
		squares[i].style.backgroundColor = colors[i]
	}else{
		squares[i].style.display = 'none'
	}
	
}
}

resetBut.addEventListener('click',function(){ //reset button
	reset()
})

function correctAni() {//effects that happen when player wins
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = selectedColor
		document.querySelector('h1').style.backgroundColor = selectedColor

	}
	
}

function pickColor() {//returns a random number based on length of 'colors' array
	return Math.floor(Math.random() * colors.length)
}

function randColor(){//returns a random color
	var a = Math.floor(Math.random() * 256)
	var b = Math.floor(Math.random() * 256)
	var c = Math.floor(Math.random() * 256)
	return 'rgb(' + String(a) +', ' + String(b) + ', ' + String(c) + ')'
	
}

function randColors(x){//returns an array with random colors
	var col = []
	for(i =0;i<x;i++){
		if(i < x){
		col.push(randColor());
	}

}
	return col
}

