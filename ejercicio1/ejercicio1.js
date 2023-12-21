'use strict'

//Crear una función constructora para crear un Estudiante con las siguientes propiedades:

//nombre, 
//correo
//promedio.
//Una Funcion validarPromedio Que devuelva "Aprobado" si el promedio es mayor a 70 y "Reprobado" si es menor.
//Una Función obtenerUsuario que devuelva únicamente el nombre de usuario del email
//Crear un objeto a partir de la función anterior y comprobar funciones 
let estudiante1 = new Estudiante("Jonny", "jonny@gmail.com");
alert(estudiante1.validarPromedio());
alert(estudiante1.obtenerNombreUsuario());

function Estudiante(nombre, correo) {
    this.nombre = nombre;
    this.correo = correo;
    this.promedio = 56;
    this.validarPromedio = function () {
        if (this.promedio > 70) return "Aprobado";
        else return "Reprobado";
    };
    this.obtenerNombreUsuario = function () {
        let inicioCorreo = this.correo.indexOf('@');
        return this.correo.slice(0, inicioCorreo);
    }
}




















