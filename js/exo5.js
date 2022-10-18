/* jshint esversion: 6 */

function exo5() {
    "use strict";
    var parent = {
        name: "objet parent",
        genObjFun: function() {
            var obj = {
                name: "objFun",
                functionMethod: function (text) {
                    window.console.log(this.name + " " + text);
                }
            };
            return obj;
        },
        genObjArrow: function() {
            var obj = {
                name: "objArrow",
                arrowMethod: text => {
                    window.console.log(this.name + " " + text);
                }
            };
            return obj;
        }
    };
    var other = {
        name: "autre objet"
    };
    var function1 = parent.genObjFun();
    var function2 = parent.genObjArrow();

    /* TESTS */
    function1.functionMethod("Ceci est un test"); // this sera scopé sur le contexte de objFun
    function2.arrowMethod("Ceci est un test"); // this sera scopé sur le contexte de parent parce que =>

    function1.functionMethod.call(other, "Ceci est un autre test"); // this sera scopé sur le contexte de other
    function2.arrowMethod.call(other, "Ceci est un autre test"); // this sera scopé sur le contexte de parent parce que =>

    function1.functionMethod.apply(other, ["Ceci est un autre test"]); // this sera scopé sur le contexte de other
    function2.arrowMethod.apply(other, ["Ceci est un autre test"]); // this sera scopé sur le contexte de parent parce que =>

    var bind1 = function1.functionMethod.bind(other); // this sera scopé sur le contexte de other
    var bind2 = function2.arrowMethod.bind(other); // this sera scopé sur le contexte de parent parce que =>

    bind1("Ceci est un dernier test");
    bind2("Ceci est un dernier test");
}
