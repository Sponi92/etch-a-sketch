function makeGrid(input) {
	const container= document.querySelector("#container");
	container.style.setProperty('--rows', input);
  	container.style.setProperty('--columns', input);
  	for (c = 0; c < (input * input); c++) {
    		let cell = document.createElement("div");
    		cell.innerText = " ";
    		container.appendChild(cell).className = "grid-item";
    		help();
}
}
makeGrid(16);

function help(){
const hoverover= document.querySelectorAll(".grid-item");
hoverover.forEach(hoverover => hoverover.addEventListener ("mouseover",function() {changeBackground(hoverover)}));

function changeBackground(x){
x.classList.add("hover");

};
}


document.querySelector("#btn").addEventListener("click", clearandNew);

function clearandNew(){
	const clear=document.querySelectorAll(".grid-item");
	for (i=0; i<clear.length; i++){
		clear[i].remove();
}
	input=window.prompt("How many Squares per side do you want?");
	if (input>29 || isNaN(input)){
	alert("ERROR!");
	}
	else {
	makeGrid(input);
	}
 	
}

