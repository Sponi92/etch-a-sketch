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
makeGrid(16);
black();

function black(){
const hoverover= document.querySelectorAll(".grid-item");
hoverover.forEach(hoverover => hoverover.addEventListener ("mouseover",function() {changeBackground(hoverover)}));

function changeBackground(x){
x.classList.add("hover");

};
}

function rainbow(){
const hoverover= document.querySelectorAll(".grid-item");
hoverover.forEach(hoverover => hoverover.addEventListener ("mouseover",function() {changeBackground(hoverover)}));

function changeBackground(x){
let randomColor = Math.floor(Math.random()*16777215).toString(16);
x.style.setProperty("--color", randomColor);
x.classList.add("rainbow");

};
}

function gradient(){
i=0;
const hoverover= document.querySelectorAll(".grid-item");
hoverover.forEach(hoverover => hoverover.addEventListener ("mouseover",function() {changeBackground(hoverover)}));

function changeBackground(x){
let gradientBlack;
gradientBlack=(1+i)*0.1; 
x.style.setProperty("--gradientBlack", gradientBlack);
x.classList.add("gradient");
i++;
return i;
};
}



document.querySelector("#btn").addEventListener("click", clearandNew);

document.querySelector("#btn1").addEventListener("click", clearandRainbow);

document.querySelector("#btn2").addEventListener("click", clearandGradient);

function clearandNew(){
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
	black();
 	
}

function clearandRainbow(){
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
	rainbow();
 	
}

function clearandGradient(){
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
	gradient();
 	
}
