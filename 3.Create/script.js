function color() {    
    let a = Math.floor(Math.random() * 255);    
    let b = Math.floor(Math.random() * 255);    
    let c = Math.floor(Math.random() * 255);    
    
	return [a, b, c];
}

function checkColor(r,g,b){
    return 0.2126 * r + 0.7152 *g + 0.0722 * b;
}

// Liste des apprenants
const learners = ["Alice", "Bob", "Charlie", "David", "Eve"];

// Sélection de l'élément <article>
const article = document.querySelector("article");

for(let learner of learners){
    // Créer un élément <section>
    const section = document.createElement("section");     
	let [r, g, b] = color(); 
    section.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;   

    const test = checkColor(r,g,b);


    // Créer un <p> avec le nom de l'apprenant
    const paragraph = document.createElement("p");
    paragraph.textContent = learner;
    paragraph.style.color = test < 128 ? 'white' : 'black';

    // Ajouter le <p> dans le <section>
    section.appendChild(paragraph);

    // Ajouter le <section> dans l'<article>
    article.appendChild(section);

}