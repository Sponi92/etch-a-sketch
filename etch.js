//create Grid and use Black as fill method
// add listeners to the 3 buttons
let changer=0;
window.addEventListener("load", makeGrid(16));
addClass(changeBackgroundBlack);
let input=16;

document.querySelector("#btn").addEventListener("click", clearandNew);
document.querySelector("#btn1").addEventListener("click", clearandRainbow);
document.querySelector("#btn2").addEventListener("click", clearandGradient);

function clearandNew(){
	clear(input);
	addClass(changeBackgroundBlack);
	changer=0;	
}

function clearandRainbow(){
	clear(input);
	addClass(changeBackgroundRainbow);
	changer=1;	
}

function clearandGradient(){
	clear(input);
	i=0;
	addClass(changeBackgroundGradient);	
	changer=2;
}

//clears the grid
function clear(input){
	const clear=document.querySelectorAll(".grid-item");
	for (i=0; i<clear.length; i++){
		clear[i].remove();
}
	makeGrid(input);
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
window.addEventListener("load", function(){
  var slider = document.querySelector("input[type='range']");
  slider.addEventListener("change", function(){
    input=parseInt(this.value);
    clear(input);
    if (changer===0){
    clearandNew();
    }
    else if (changer===1){
    clearandRainbow();
    }
    else{
    clearandGradient();
    }
  });
});

