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

    exo5();
}

//////////////////////////////////////////////////////////////////////

// Exercice 1
function exo1(limit) {
    "use strict";
    window.console.log("Exercice 1");

    // TODO copier votre exercice nombre parfait du cours
    var list = [];
    for(var i = 1; i < limit; i++) {
        var sum = 0;
        for(var j = 1; j < i; j++) {
            if(i%j === 0) {
                sum += j;
            }
        }
        if(sum === i) {
            list.push(i);
        }
    }

    window.console.log(list);
}

//////////////////////////////////////////////////////////////////////

// Exercice 2
function exo2_1() {
    "use strict";
    window.console.log("Exercice 2.1");

    // TODO regarder le résultat des calculs de nombres
    window.console.log(Number("A"));    // NaN
    window.console.log(2+"12");               // 212
    window.console.log(2+(+"12"));            // 14
    window.console.log(+"A");                 // NaN
    window.console.log(2*"12");               // 24
    window.console.log(2*"A");                // NaN
    window.console.log(1/0);                  // Infinity
    window.console.log(1/-0);                 // -Infinity
}

function exo2_2() {
    "use strict";
    window.console.log("Exercice 2.2");

    // TODO regarder le résultat des opérations avec NaN
    // 2 :
    // Nan peut etre produit par : Number(string); +string; int*string
    window.console.log(NaN === NaN); // false
    window.console.log(NaN !== NaN); // true
    window.console.log(isNaN(NaN));  // true
}

function exo2_3() {
    "use strict";
    window.console.log("Exercice 2.3");

    // TODO regarder la valeur d'une variable non initialisée
    // 3 :
    var test;
    window.console.log(test);        // undefined
}

function exo2_4() {
    "use strict";

    window.console.log("Exercice 2.4");

    // TODO regarder la différence entre null et undefined
    // 4 :
    window.console.log(null === 1);                 // false
    window.console.log(undefined === 1);            // false
    window.console.log(null === null);              // true
    window.console.log(undefined === undefined);    // true
    window.console.log(null === undefined);         // false
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

    var elem = document.getElementById("text").innerHTML;
    elem = "";

    var res;

    appendText("Exercice 3");
    var list = [1, 2, 4];
    // TODO camlListOfArray
    res = camlListOfArray(list);
    window.console.log(list + " devient : " + res);

    var palindromes = ["", "a", "BB", "BOB", "ESOPERESTEICIETSEREPOSE"];
    var nonPalindromes = ["Bob", "BABA"];
    // TODO estPalindrome
    for(var i in palindromes) {
        res = estPalindrome(palindromes[i]);
        window.console.log(palindromes[i] + " est palindrome (true) : " + res);
    }
    for(var i in nonPalindromes) {
        res = estPalindrome(nonPalindromes[i]);
        window.console.log(nonPalindromes[i] + " est palindrome (false) : " + res);
    }

    var esop = "ESOPERESTEICIETSEREPOSE"
    // TODO listeOccurrences
    res = listeOccurrences("E", esop);
    window.console.log(esop + " liste des occurences :" + res);

    var testsEmail = ["a@b.fr", "john.doe@firm.co.uk", "somebody@domain"];
    // TODO estEmail
    for(var i in testsEmail) {
        res = estEmail(testsEmail[i]) !== null;
        window.console.log(testsEmail[i] + " est mail : " + res);
    }

    appendText("TODO : ajoutez le résulat de chaque opération");
}

function camlListOfArray(tableau) {
    "use strict";
    // TODO
    return tableau.toString().replace(",", ";");
}

function estPalindrome(texte) {
    "use strict";
    // TODO
    var bool = true;
    var i = 0;
    var len = texte.length;
    while(bool && i < len) {
        bool = texte.charAt(i) === texte.charAt(len - i -1);
        i++;
    }
    return bool;
}

function listeOccurrences(search, texte) {
    "use strict";
    // TODO
    var res = [];
    var i = texte.indexOf(search);
    window.console.log(i);
    var sum = i;

    while(i !== -1) {
        res.push(sum);
        texte = texte.substring(i+1);
        i = texte.indexOf(search);
        sum = sum + i + 1;
    }
    return res;
}

function estEmail(texte) {
    "use strict";
    // TODO
    var re = new RegExp("([a-z]+[A-Z])*@([a-z]+[A-Z])*.([a-z]+[A-Z])*");

    return re.exec(texte);
}

//////////////////////////////////////////////////////////////////////

function Robot(nom) {
    "use strict";
    this.nom = nom;
    this.equals = function(robot) {
        return robot.name === this.name;
    }
}

function Robot2(nom) {
    const _nom = nom;

    const my = {};
    my.equals = function(robot) {
        return _nom === robot.nom;
    }
    my.getNom = function() {
        return _nom;
    }
    return my;
}

// Exercice 4
function exo4() {
    "use strict";
    appendText("Exercice 4");
    let robot1 = new Robot("bipboop");
    let robot2 = new Robot("bipboop");
    console.log("robot1 === robot2 : " + (robot1 === robot2));
    console.log("robot1.equals(robot2) : " + robot1.equals(robot2));

    let robot3 = Robot2("boop");
    console.log("robot3._nom : " + robot3._nom);
    console.log("robot3.nom : " + robot3.nom);
    console.log("robot3.getNom() : " + robot3.getNom());
    appendText("TODO : ajoutez le résulat de chaque opération")
}


