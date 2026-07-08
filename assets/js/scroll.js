/* ==========================================================
    SCROLL.JS

    Animaciones al hacer scroll

    Funciones:

    ✔ Reveal de secciones
    ✔ Reveal de tarjetas
    ✔ Reveal de imágenes
    ✔ Animaciones escalonadas
    ✔ Solo se anima una vez
========================================================== */

import { $$ } from "./utils.js";

/* ==========================================================
    FUNCIÓN PRINCIPAL
========================================================== */

export function iniciarScrollReveal() {

    prepararElementos();

    crearObserver();

}

/* ==========================================================
    OBSERVER
========================================================== */

let observer;

/* ==========================================================
    PREPARAR ELEMENTOS
========================================================== */

function prepararElementos() {

    const elementos = $$(
        `
        .intro,
        .letter,
        .cards,
        .timeline,
        .quotes,
        .gallery,
        .constellation,
        .ending,
        .card,
        .timeline-item,
        .gallery-item
        `
    );

    elementos.forEach((elemento, indice) => {

        elemento.classList.add("reveal");

        elemento.style.transitionDelay =

            `${indice * 80}ms`;

    });

}

/* ==========================================================
    CREAR OBSERVER
========================================================== */

function crearObserver() {

    observer = new IntersectionObserver(

        revelar,

        {
            threshold:0.15
        }

    );

    document

        .querySelectorAll(".reveal")

        .forEach(elemento=>{

            observer.observe(elemento);

        });

}

/* ==========================================================
    CALLBACK
========================================================== */

function revelar(entries){

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

        }

    });

}

/* ==========================================================
    REVELAR MANUALMENTE
========================================================== */

export function revelarElemento(elemento){

    elemento.classList.add("visible");

}

/* ==========================================================
    REINICIAR ANIMACIONES
========================================================== */

export function reiniciarReveal(){

    document

        .querySelectorAll(".reveal")

        .forEach(elemento=>{

            elemento.classList.remove("visible");

            observer.observe(elemento);

        });

}

