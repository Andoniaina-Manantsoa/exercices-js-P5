//votre code ici
function printNumbers(n) {
    let chaine = "";
    for (let i = 0; i <= n; i++) {
        chaine += i + " ";
    }
    return chaine.trim();
}
let chaine = printNumbers(5);

//Afficher le resultat dans mon site
document.getElementById("resultat").textContent = chaine;

export default printNumbers
