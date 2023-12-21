'use strict'


//A a partir del array ages=[15, 50, 45] agregue su edad. Usando un for con un if, muestre en pantalla  solo las edades mayores a 25

let edades = [15, 50, 45,];
for (let i = 0; i < edades.length; i++) {
    alert(` ${i + 1} ${edades[i]} `)
}
function edadesMayores(edad) {
    if (edad >= 25) {
        return true;
    } else {
        return false;
    };
};
alert("edadesMayores: " + edades.filter(edadesMayores).join(", "));

edades.shift























