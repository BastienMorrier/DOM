// Sélectionner la balise <ol> dans la première section
const orderedList = document.querySelector('section ol');

// Sélectionner le dernier enfant de la liste
const lastChild = orderedList.lastElementChild;

// Déplacer le dernier enfant au début de la liste
orderedList.prepend(lastChild);


// Sélectionner les titres <h2> des deux sections
const secondSectionH2 = document.querySelectorAll('section')[1].querySelector('h2');
const thirdSectionH2 = document.querySelectorAll('section')[2].querySelector('h2');

// Sauvegarder les titres dans des variables
const secondSectionTitle = secondSectionH2.innerHTML;
const thirdSectionTitle = thirdSectionH2.innerHTML;

// Échanger les titres
secondSectionH2.innerHTML = thirdSectionTitle;
thirdSectionH2.innerHTML = secondSectionTitle;


const lastSection = document.querySelector('main').lastElementChild;
console.log("last",lastSection);
lastSection.style.display ="none";
