const container= document.querySelector("#container");
for (i=0;i<16;i++){
	const content1 = document.createElement("div");
	content1.classList.add("container1");
	container.appendChild(content1);
}

for (i=0;i<16;i++){
	const container1= document.querySelectorAll(".container1");
	for (x=0;x<16;x++){
	const content2= document.createElement("div");
	content2.textContent=" ";
	content2.classList.add("content");
	container1[i].appendChild(content2);
	}
	}



const hoverover= document.querySelectorAll(".content");
hoverover.forEach(hoverover => {hoverover.onmouseover = function(){changeBackground(hoverover)}});

function changeBackground(x){

x.classList.add("hover");

};

document.querySelector("#btn").addEventListener("click", clearandNew);

function clearandNew(){
const clear=document.querySelectorAll(".content");
for (i=0; i<clear.length; i++){
clear[i].classList.remove("hover");
}
input=window.prompt("How many Squares per side do you want?");
}


