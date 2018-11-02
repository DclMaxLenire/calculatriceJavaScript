//  // Limité le nombre de caractère //
// var caracrt = 4;
// // Récupérer le premier nombre choisis //
// var chiffreSelection1 = document.getElementById("chiffre");
// // Choisir l'opérateur //
// var operateur = document.getElementById("option").value;
// console.log(operateur);
// // Récupérer le deuxième nombre choisis
// var chiffreSelection2 = document.getElementById("chiffre2");

// Vérifier si les caractères sont des chiffres //
function verificationNombre(event)
    {
    // La zone à vérifier //
    var source = document.getElementById("chiffre"); 
    // La valeur de la zone a vérifier //
    var value = source.value; 
    // Si ce n'est pas un nombre //
    if (isNaN(parseFloat(value)))  
    {   // Si ce n'est pas un nombre le backgroundColor devient rouge //
        document.getElementById("chiffreSelection").style.backgroundColor="red";
        // Si c'est un nombre le backgroundColor devient ou redevient blanc //
    } else {
        document.getElementById("chiffreSelection").style.backgroundColor="white";
    }}


// Enregistrer le premier nombre saisie //
// Choisir l'opérateur //
// Enregistrer le deuxième nombre saisie //
// Faire le calcule //
// Donner le résultat //





