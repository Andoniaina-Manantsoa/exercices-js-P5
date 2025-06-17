// votre code ici
function checkAge(int) {
    ageMajeur = 18;
    ageSenior = 65;
    if (int < ageMajeur) {
        console.log("Vous ête mineur.")
    }

    if (int >= ageMajeur, int <= ageSenior) {
        console.log("Vous êtes majeur.")
    }

    else {
        console.log("Vous êtes senior.")
    }
}

export default checkAge;
