const inpUtilisateur = document.querySelector('.form-groupe:nth-child(1) input');
const inpMail = document.querySelector('.form-groupe:nth-child(2) input');
const inpMdp = document.querySelector('.form-groupe:nth-child(3) input');
const inpConfirme = document.querySelector('.form-groupe:nth-child(4) input');
const allImg = document.querySelectorAll('.icone-verif');
const allSpan = document.querySelectorAll('span');
const allLigne = document.querySelectorAll('.ligne div');


// INPUT USER

inpUtilisateur.addEventListener('input', (e) => {
  
    if (e.target.value.length >= 3) {
        allImg[0].style.display = "inline";
        allImg[0].src = "ressources/check.svg"
        allSpan[0].style.display = "none";
    }

    else {
        allImg[0].style.display = "inline";
        allImg[0].src = "ressources/error.svg"
        allSpan[0].style.display = "inline";
    }
})




// INPUT MAIL

inpMail.addEventListener('input', (e) => {
    
    const regexEmail = /\S+@\S+\.\S+/;

    if (e.target.value.search(regexEmail) === 0) {    // Si ca match = 0 sinon -1
        allImg[1].style.display = "inline";
        allImg[1].src = "ressources/check.svg"
        allSpan[1].style.display = "none";
    }
    else if (e.target.value.search(regexEmail) === -1) {
        allImg[1].style.display = "inline";
        allImg[1].src = "ressources/error.svg"
        allSpan[1].style.display = "inline"; 
    }
})




// INPUT MDP

let valeurInp;

const specialCar = /[^a-zA-Z0-9]/;      // Caractère spéciaux (^)
const alphabet = /[a-z]/i               // i = insensitive (non sensible à la casse minuscule et maj)
const chiffre = /[0-9]/;                // Chiffre

let objValidation = {                      // Connaitre nombre caractères dans l'input
    symbole : 0,
    lettre : 0,
    chiffre : 0
}

inpMdp.addEventListener('input' , (e) => {
    
    valeurInp = e.target.value;

    if (valeurInp.search(specialCar) !== -1) {              // Test si la valeur d'input contient un specialCar
        objValidation.symbole = 1;                        
    }

    if (valeurInp.search(alphabet) !== -1) {
        objValidation.lettre = 1;
    }

    if (valeurInp.search(chiffre) !== -1) {
        objValidation.chiffre = 1;
    }

    // console.log(objValidation)

    if (e.inputType = 'deleteContentBackward')  {               // 'deleteContentBackward' (touche delete)
        
        if (valeurInp.search(specialCar) === -1) { 
        objValidation.symbole = 0;                        
        }

        if (valeurInp.search(alphabet) === -1) {
            objValidation.lettre = 0;
        }

        if (valeurInp.search(chiffre) === -1) {
            objValidation.chiffre = 0;
        }
    }

    // console.log(objValidation)


    let testAll = 0;

    for(const property in objValidation) {                      // Boucle qui sert à itérer dans un objet

        if (objValidation[property] > 0) {
            testAll ++;
        }
    }

    if (testAll < 3) {
        allImg[2].style.display = "inline";
        allImg[2].src = "ressources/error.svg"
        allSpan[2].style.display = "inline"; 
    }
    else {
        allImg[2].style.display = "inline";
        allImg[2].src = "ressources/check.svg"
        allSpan[2].style.display = "none"; 
    }


    // FORCE DU MDP

    if (valeurInp.length <= 6 && valeurInp.length > 0) {
        allLigne[0].style.display = "block";
        allLigne[1].style.display = "none";
        allLigne[2].style.display = "none";
    }

    else if (valeurInp.length > 6 && valeurInp.length <= 9) {
        allLigne[0].style.display = "block";
        allLigne[1].style.display = "block";
        allLigne[2].style.display = "none";
    }

    else if (valeurInp.length > 9) {
        allLigne[0].style.display = "block";
        allLigne[1].style.display = "block";
        allLigne[2].style.display = "block";
    }

    else if (valeurInp.length === 0) {
        allLigne[0].style.display = "none";
        allLigne[1].style.display = "none";
        allLigne[2].style.display = "none";
    }
})


// CONFIRMATION DU MDP 

inpConfirme.addEventListener('input', (e) => {

    if (e.target.value.length === 0) {
        allImg[3].style.display = "inline";
        allImg[3].src = "ressources/error.svg"
    }

    else if (e.target.value === valeurInp) {                     // valeurInp => portée globale
        allImg[3].style.display = "inline";
        allImg[3].src = "ressources/check.svg"
    }
    
    else {
        allImg[3].style.display = "inline";
        allImg[3].src = "ressources/error.svg"
    }
})






// NOTES

/*  if (objValidation[property])   =>   1ère itération objValidation['symbole'] > O
                                        2ème itération objValidation['lettre'] > 0
                                        3ème itération objValidation['chiffre'] > 0

        Si on a un symbole ca sera supérieur à 0 donc on incrément testAll et on fait cela pour chaque propriété

*/