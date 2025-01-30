const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

function color() {        
	let a = Math.floor(Math.random() * 255);        
	let b = Math.floor(Math.random() * 255);        
	let c = Math.floor(Math.random() * 255); 
	           
	return [a, b, c];
}

const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
  let wrapper = document.getElementsByClassName("displayedsquare-wrapper")[0]; // body element
  let newDiv = document.createElement("div");
  newDiv.classList.add("displayedsquare")
  newDiv.classList.add(e.target.classList[1])
  // append to body
  wrapper.appendChild(newDiv);

  // create under the log
  let ul = document.querySelector("ul"); // body element
  console.log(`Voici ul: ${ul}`)
  let testLi = document.createElement("li");
  testLi.textContent = `[${getElapsedTime()}] Created a new line ${e.target.classList[1]}`;
  // const time = getElapsedTime();

  // append to body
  ul.appendChild(testLi);

  // alert(`Created a new square ${e.target.classList[1]}`);
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}

document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    
    let body = document.querySelector("body");

     
		let [r, g, b] = color();
    body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    console.log(`Voici la couleur ! rgb(${r}, ${g}, ${b})`);
  }

  
  if (event.key === "i") {
    let ul = document.querySelector("ul");
    ul.innerHTML = "";
    console.log("IIIIII");
  }

  if (event.code  === "KeyS") {
    console.log("SSSSS");

    let sectionDisplaySquare = document.getElementsByClassName("displayedsquare-wrapper");

    let divSquareWrapper = sectionDisplaySquare[0].querySelectorAll("div");

    for(let element of divSquareWrapper) {
      element.remove(); // Suppression de chaque div
    }
  }
});


// const clickOnNewSquare = (e) => {
//   alert(e.target.classList[1]);
// }

// const actionNewSquares = document.querySelectorAll('.displayedsquare-wrapper');
// for (let actionSquares of actionNewSquares) {
//   actionSquares.addEventListener('click', clickOnNewSquare);
// }

for (let actionSquares of document.querySelectorAll('.displayedsquare-wrapper')) {
  actionSquares.addEventListener('click', function(e){
    alert(e.target.classList[1]);
  });
}


// https://stackoverflow.com/questions/3942878/how-to-decide-font-color-in-white-or-black-depending-on-background-color