
function fill(input){
	const container= document.querySelector("#container");
	for (i=0;i<input;i++){
		const content1 = document.createElement("div");
		content1.classList.add("container1");
		container.appendChild(content1);
	}

	for (i=0;i<input;i++){
		const container1= document.querySelectorAll(".container1");
		for (x=0;x<input;x++){
		const content2= document.createElement("div");
		content2.textContent=" ";
		content2.classList.add("content");
		content2.style.width = "${(1/input)*100}%"
		container1[i].appendChild(content2);
		}
		}
		help();
}

fill(16);

function help(){
const hoverover= document.querySelectorAll(".content");
hoverover.forEach(hoverover => hoverover.addEventListener ("mouseover",function() {changeBackground(hoverover)}));

function changeBackground(x){
x.classList.add("hover");

};
}


document.querySelector("#btn").addEventListener("click", clearandNew);

function clearandNew(){
	const clear=document.querySelectorAll(".container1");
	for (i=0; i<clear.length; i++){
		clear[i].remove();
}
	input=window.prompt("How many Squares per side do you want?");
	fill(input);
 	
}


