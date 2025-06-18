// votre code ici
function checkAge(int) {
    const ageMajeur = 18;
    const ageSenior = 65;

    if (int < ageMajeur) {
        return "Vous êtes mineur.";
    }

    if (int >= ageMajeur && int < ageSenior) {
        return "Vous êtes majeur.";
    }

    else {
        return "Vous êtes senior.";
    }
}
let age = checkAge(30);
console.log(age);

export default checkAge;
