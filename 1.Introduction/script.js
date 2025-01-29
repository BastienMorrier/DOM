/*
*/

let test = document.querySelector("h1");
test.innerHTML = "TEST"; // On modifie le contenu après
console.log(test.textContent); 

document.title = "Modifying the DOM";

console.log(document.title);


const a = Math.floor(Math.random()*255+1);
const b = Math.floor(Math.random()*255+1);
const c = Math.floor(Math.random()*255+1);

document.body.style.backgroundColor = `rgb(${a} ${b} ${c})`;


// Sélectionne le deuxième enfant de <body> (qui est <main>)
let secondChild = document.body.children[1];

for(child of secondChild.children){
    console.log(child);
}