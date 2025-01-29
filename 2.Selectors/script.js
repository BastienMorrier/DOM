/*
*/

// EX1
let a = document.querySelectorAll(".important");

for (let element of a){
    element.setAttribute("title", "This is an important item");
}


// Ex2
let img = document.querySelectorAll("img");

for (let element of img){
    // element.setAttribute("title", "This is an important item");
    if(!element.classList.contains("important")){
        element.style.display = "none";
    }
}

// Ex3
let pargaraphe = document.querySelectorAll("p");
for(let para of pargaraphe){
    console.log(para.textContent);

    if(para.classList.length>0){
        console.log(para.className);
    }
}

// Ex4
function color(){
    let a = Math.floor(Math.random()*255+1);
    let b = Math.floor(Math.random()*255+1);
    let c = Math.floor(Math.random()*255+1);
    return [a, b, c];
}

let paragpraph = document.querySelectorAll("p");
for(let p of paragpraph){
    if(p.classList.length===0){
        let [r, g, b] = color();
        p.style.color = `rgb(${r}, ${g}, ${b})`;
    }
}