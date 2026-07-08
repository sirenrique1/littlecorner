/* ==========================================================
    STARS.JS

    Genera:

    ✔ Estrellas
    ✔ Parpadeo
    ✔ Estrellas fugaces
    ✔ Parallax

========================================================== */

import { $, random, randomInt } from "./utils.js";

/* ==========================================================
    VARIABLES
========================================================== */

const starsContainer = $("#stars");

const shootingContainer = $("#shooting-stars");

const TOTAL_ESTRELLAS = 220;

const TOTAL_FUGACES = 3;

/* ==========================================================
    FUNCIÓN PRINCIPAL
========================================================== */

export function iniciarEstrellas(){

    if(!starsContainer) return;

    crearEstrellas();

    crearFugaces();

    iniciarParallax();

}

/* ==========================================================
    CREAR ESTRELLAS
========================================================== */

function crearEstrellas(){

    for(let i=0;i<TOTAL_ESTRELLAS;i++){

        const estrella=document.createElement("div");

        estrella.className="star";

        const size=random(1,3);

        estrella.style.width=size+"px";

        estrella.style.height=size+"px";

        estrella.style.left=random(0,100)+"%";

        estrella.style.top=random(0,100)+"%";

        estrella.style.opacity=random(.3,1);

        estrella.style.animationDuration=

            random(2,7)+"s";

        estrella.style.animationDelay=

            random(0,5)+"s";

        starsContainer.appendChild(estrella);

    }

}

/* ==========================================================
    ESTRELLAS FUGACES
========================================================== */

function crearFugaces(){

    for(let i=0;i<TOTAL_FUGACES;i++){

        lanzarFugaz();

    }

}

function lanzarFugaz(){

    const estrella=document.createElement("div");

    estrella.className="shooting-star";

    estrella.style.left=random(0,100)+"vw";

    estrella.style.top=random(0,40)+"vh";

    estrella.style.animationDuration=

        random(1.5,2.5)+"s";

    shootingContainer.appendChild(estrella);

    estrella.addEventListener("animationend",()=>{

        estrella.remove();

        setTimeout(()=>{

            lanzarFugaz();

        },randomInt(4000,10000));

    });

}

/* ==========================================================
    PARALLAX
========================================================== */

function iniciarParallax(){

    document.addEventListener("mousemove",(e)=>{

        const x=

            (e.clientX/window.innerWidth-.5)*15;

        const y=

            (e.clientY/window.innerHeight-.5)*15;

        starsContainer.style.transform=

            `translate(${x}px,${y}px)`;

    });

}