/* ==========================================================
    UTILS.JS

    Funciones reutilizables para todo el proyecto.

    Cualquier módulo puede importarlas.

========================================================== */


/* ==========================================================
    BUSCAR UN ELEMENTO

    $("#id")
    $(".clase")
========================================================== */

export function $(selector) {

    return document.querySelector(selector);

}


/* ==========================================================
    BUSCAR VARIOS ELEMENTOS
========================================================== */

export function $$(selector) {

    return document.querySelectorAll(selector);

}


/* ==========================================================
    ESPERAR

    await sleep(1000);

========================================================== */

export function sleep(ms) {

    return new Promise(resolve => setTimeout(resolve, ms));

}


/* ==========================================================
    NÚMERO ALEATORIO

    random(0,100)

========================================================== */

export function random(min, max) {

    return Math.random() * (max - min) + min;

}


/* ==========================================================
    ENTERO ALEATORIO
========================================================== */

export function randomInt(min, max) {

    return Math.floor(random(min, max + 1));

}


/* ==========================================================
    CREAR ELEMENTOS HTML

========================================================== */

export function crearElemento(tag, clase = "") {

    const elemento = document.createElement(tag);

    if (clase !== "") {

        elemento.className = clase;

    }

    return elemento;

}


/* ==========================================================
    AGREGAR CLASE
========================================================== */

export function agregarClase(elemento, clase) {

    elemento.classList.add(clase);

}


/* ==========================================================
    QUITAR CLASE
========================================================== */

export function quitarClase(elemento, clase) {

    elemento.classList.remove(clase);

}


/* ==========================================================
    TOGGLE
========================================================== */

export function alternarClase(elemento, clase) {

    elemento.classList.toggle(clase);

}


/* ==========================================================
    SABER SI EXISTE
========================================================== */

export function existe(selector) {

    return document.querySelector(selector) !== null;

}


/* ==========================================================
    SCROLL SUAVE
========================================================== */

export function scrollA(selector) {

    const elemento = $(selector);

    if (!elemento) return;

    elemento.scrollIntoView({

        behavior: "smooth"

    });

}


/* ==========================================================
    FORMATEAR NÚMEROS

    3 -> 03

========================================================== */

export function dosDigitos(numero) {

    return numero.toString().padStart(2, "0");

}


/* ==========================================================
    LIMITAR VALORES
========================================================== */

export function clamp(valor, minimo, maximo) {

    return Math.min(Math.max(valor, minimo), maximo);

}


/* ==========================================================
    MAPEAR VALORES
========================================================== */

export function map(valor, inMin, inMax, outMin, outMax) {

    return (valor - inMin)

        * (outMax - outMin)

        / (inMax - inMin)

        + outMin;

}


/* ==========================================================
    OBTENER POSICIÓN DEL MOUSE
========================================================== */

export function posicionMouse(evento) {

    return {

        x: evento.clientX,

        y: evento.clientY

    };

}