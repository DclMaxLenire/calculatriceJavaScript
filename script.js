        // // Récupérer le premier nombre choisis //
var chiffreSelection1;
var chiffreSelection2;
var resultat;


        // Vérifier si les caractères sont des chiffres //
function verificationNombre(event)
    {
            // La zone à vérifier //
    var source = document.getElementById("chiffre1"); 
            // La valeur de la zone a vérifier //
    var valeur = source.value; 
            // Si ce n'est pas un nombre //
    if (isNaN(parseFloat(valeur)))  
    {       // Si ce n'est pas un nombre le backgroundColor devient rouge //
        document.getElementById("chiffreSelection").style.backgroundColor="red";
          // Si c'est un nombre le backgroundColor devient ou redevient blanc //
    } else {
        document.getElementById("chiffreSelection").style.backgroundColor="green";
    }}

function verificationNombre2(event) {
    var source2 = document.getElementById("chiffre2");
    var valeur2 = source2.value;
    if (isNaN(parseFloat(valeur2))) {
        document.getElementById("chiffreSelection2").style.backgroundColor="red";
    } else {
        document.getElementById("chiffreSelection2").style.backgroundColor="green";
    }
}

// Faire le calcule //
boutonCalcul.addEventListener("click",
function addition() {
if(document.forms["calculatrice"].elements["calculListe"].value === "addition") {
    chiffreSelection1 = parseFloa(document.forms["calculatrice"].elements["champs1"].value);
    chiffreSelection2 = parseFloat(document.forms["calculatrice"].elements["champs2"].value);
    resultat = chiffreSelection1 + chiffreSelection2;
    document.getElementById("resultat").innerHTML=(resultat);
}});

boutonCalcul.addEventListener("click",
function multiplication() {
    if(document.forms["calculatrice"].elements["calculListe"].value === "multiplication") {
        chiffreSelection1 = parseFloat(document.forms["calculatrice"].elements["champs1"].value);
        chiffreSelection2 = parseFloat(document.forms["calculatrice"].elements["champs2"].value);
        resultat = chiffreSelection1 * chiffreSelection2;
        document.getElementById("resultat").innerHTML=(resultat);
    }
});

boutonCalcul.addEventListener("click",
function soustraction() {
    if(document.forms["calculatrice"].elements["calculListe"].value === "soustraction") {
        chiffreSelection1 = parseFloat(document.forms["calculatrice"].elements["champs1"].value);
        chiffreSelection2 = parseFloat(document.forms["calculatrice"].elements["champs2"].value);
        resultat = chiffreSelection1 - chiffreSelection2;
        document.getElementById("resultat").innerHTML=(resultat);
    }
});

boutonCalcul.addEventListener("click",
function division() {
    if(document.forms["calculatrice"].elements["calculListe"].value === "division") {
        chiffreSelection1 = parseFloat(document.forms["calculatrice"].elements["champs1"].value);
        chiffreSelection2 = parseFloat(document.forms["calculatrice"].elements["champs2"].value);
        resultat = chiffreSelection1 / chiffreSelection2;
        document.getElementById("resultat").innerHTML=(resultat);
    }
});
nouveauCalcul.addEventListener("click",
    function reset() {
        location.reload();
    }
)