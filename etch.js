//create Grid and use Black as fill method
// add listeners to the 3 buttons
makeGrid(16);
addClass(changeBackgroundBlack);
document.querySelector("#btn").addEventListener("click", clearandNew);
document.querySelector("#btn1").addEventListener("click", clearandRainbow);
document.querySelector("#btn2").addEventListener("click", clearandGradient);

function clearandNew(){
	clear();
	addClass(changeBackgroundBlack);	
}

function clearandRainbow(){
	clear();
	addClass(changeBackgroundRainbow);	
}

function clearandGradient(){
	clear();
	i=0;
	addClass(changeBackgroundGradient);	
}

//clears the grid and asks user how the new grid should be defined
function clear(){
	const clear=document.querySelectorAll(".grid-item");
	for (i=0; i<clear.length; i++){
		clear[i].remove();
}
	input=window.prompt("How many Squares per side do you want?");
	if (input>100 || isNaN(input)){
		alert("ERROR!");
	}
	else {
		makeGrid(input);
	}
}
//adds class with the corresponding filling color on mouseover
function addClass(param1){
	const hoverover= document.querySelectorAll(".grid-item");
	hoverover.forEach(hoverover => hoverover.addEventListener ("mouseover",function() {param1(hoverover)}));
}

function changeBackgroundBlack(x){
	x.classList.add("hover");
}
function changeBackgroundRainbow(x){
	let randomColor = Math.floor(Math.random()*16777215).toString(16);
	x.style.setProperty("--color", randomColor);
	x.classList.add("rainbow");
}
function changeBackgroundGradient(x){
	let gradientBlack;
	gradientBlack=(1+i)*0.1; 
	x.style.setProperty("--gradientBlack", gradientBlack);
	x.classList.add("gradient");
	i++;
	return i;
}
//creates the grid with the squares the user wants
function makeGrid(input) {
	const container= document.querySelector("#container");
	container.style.setProperty('--rows', input);
  	container.style.setProperty('--columns', input);
  	for (c = 0; c < (input * input); c++) {
    		let cell = document.createElement("div");
    		cell.innerText = " ";
    		container.appendChild(cell).className = "grid-item";
    		
	}
}
