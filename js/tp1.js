// TP1 Front
//////////////////////////////////////////////////////////////////////
// fonction principale,
// qui dépend d'autres fonctions définies plus loin dans ce fichier...

function runFunction() {
    "use strict";

    exo1(10000);

    exo2_1();
    exo2_2();
    exo2_3();
    exo2_4();

    exo3();

    exo4();
}

//////////////////////////////////////////////////////////////////////

// Exercice 1
function exo1(limit) {
    "use strict";
    window.console.log("Exercice 1");

    // TODO copier votre exercice nombre parfait du cours
}

//////////////////////////////////////////////////////////////////////

// Exercice 2
function exo2_1() {
    "use strict";
    window.console.log("Exercice 2.1");

    // TODO regarder le résultat des calculs de nombres
}

function exo2_2() {
    "use strict";
    window.console.log("Exercice 2.2");

    // TODO regarder le résultat des opérations avec NaN
}

function exo2_3() {
    "use strict";
    window.console.log("Exercice 2.3");

    // TODO regarder la valeur d'une variable non initialisée
}

function exo2_4() {
    "use strict";

    window.console.log("Exercice 2.4");

    // TODO regarder la différence entre null et undefined
}

//////////////////////////////////////////////////////////////////////

// Exercice 3

function escapeText(s){ "use strict"; var p = document.createElement('p'); p.textContent = s; return p.innerHTML; }

function appendText(text) {
    "use strict";
    document.getElementById("text").innerHTML += escapeText(text) + "<br>";
}

function exo3() {
    "use strict";

    document.getElementById("text").innerHTML = "";

    appendText("Exercice 3");
    var list = [1, 2, 4];
    // TODO camlListOfArray

    var palindromes = ["", "a", "BB", "BOB", "ESOPERESTEICIETSEREPOSE"];
    var nonPalindromes = ["Bob", "BABA"];
    // TODO estPalindrome

    var esop = "ESOPERESTEICIETSEREPOSE"
    // TODO listeOccurrences

    var testsEmail = ["a@b.fr", "john.doe@firm.co.uk", "somebody@domain"];
    // TODO estEmail

    appendText("TODO : ajoutez le résulat de chaque opération");
}

function camlListOfArray(tableau) {
    "use strict";
    // TODO
    return "TODO";
}

function estPalindrome(texte) {
    "use strict";
    // TODO
    return true;
}

function listeOccurrences(search, texte) {
    "use strict";
    // TODO
    return [];
}

function estEmail(texte) {
    "use strict";
    // TODO
    return true;
}

//////////////////////////////////////////////////////////////////////

// Exercice 4
function exo4() {
    "use strict";
    appendText("Exercice 4");
    // TODO
    appendText("TODO : ajoutez le résulat de chaque opération")
}


