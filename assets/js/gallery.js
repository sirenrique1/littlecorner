/* ==========================================================
    GALLERY.JS

    Lightbox profesional

========================================================== */

import { $, $$ } from "./utils.js";

let indiceActual = 0;

let imagenes = [];

/* ==========================================================
    FUNCIÓN PRINCIPAL
========================================================== */

export function iniciarGaleria(){

    imagenes = [...$$(".gallery-item img")];

    if(imagenes.length===0) return;

    imagenes.forEach((imagen,indice)=>{

        imagen.style.cursor="pointer";

        imagen.addEventListener("click",()=>{

            abrir(indice);

        });

    });

    $("#lightboxClose")?.addEventListener(

        "click",

        cerrar

    );

    $("#lightboxNext")?.addEventListener(

        "click",

        siguiente

    );

    $("#lightboxPrev")?.addEventListener(

        "click",

        anterior

    );

    $("#lightbox")?.addEventListener(

        "click",

        (e)=>{

            if(e.target.id==="lightbox"){

                cerrar();

            }

        }

    );

    document.addEventListener(

        "keydown",

        teclado

    );

}

/* ==========================================================
    ABRIR
========================================================== */

function abrir(indice){

    indiceActual=indice;

    actualizarImagen();

    $("#lightbox").classList.add("show");

}

/* ==========================================================
    CERRAR
========================================================== */

function cerrar(){

    $("#lightbox").classList.remove("show");

}

/* ==========================================================
    SIGUIENTE
========================================================== */

function siguiente(){

    indiceActual++;

    if(indiceActual>=imagenes.length){

        indiceActual=0;

    }

    actualizarImagen();

}

/* ==========================================================
    ANTERIOR
========================================================== */

function anterior(){

    indiceActual--;

    if(indiceActual<0){

        indiceActual=imagenes.length-1;

    }

    actualizarImagen();

}

/* ==========================================================
    ACTUALIZAR
========================================================== */

function actualizarImagen(){

    $("#lightboxImage").src=

        imagenes[indiceActual].src;

}

/* ==========================================================
    TECLADO
========================================================== */

function teclado(e){

    const abierto=

    $("#lightbox").classList.contains("show");

    if(!abierto) return;

    switch(e.key){

        case"Escape":

            cerrar();

            break;

        case"ArrowRight":

            siguiente();

            break;

        case"ArrowLeft":

            anterior();

            break;

    }

}