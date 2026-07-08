/* ==========================================================
    APP.JS

    Archivo principal de la aplicación.

    Desde aquí se inicializan todos los módulos
    cuando la página termina de cargar.

    Autor: Tú 😄
========================================================== */

/* ==========================================================
    IMPORTACIONES
========================================================== */

import { iniciarLoader } from "./loader.js";
import { iniciarNavbar } from "./navbar.js";
import { iniciarMaquinaEscribir } from "./typing.js";
import { iniciarFrases } from "./quotes.js";
import { iniciarMusica } from "./music.js";
import { iniciarScrollReveal } from "./scroll.js";
import { iniciarEstrellas } from "./stars.js";
import { iniciarConstelacion } from "./constellation.js";
import { iniciarGaleria } from "./gallery.js";

/* ==========================================================
    INICIO DE LA APLICACIÓN
========================================================== */

window.addEventListener("DOMContentLoaded", () => {

    console.log("✨ Starlit iniciado correctamente.");

    iniciarGaleria();

    iniciarLoader();

    iniciarNavbar();

    iniciarMaquinaEscribir();

    iniciarFrases();

    iniciarMusica();

    iniciarScrollReveal();

    iniciarEstrellas();

    iniciarConstelacion();

});

/* ==========================================================
    EFECTO DE APARICIÓN DEL BODY
========================================================== */

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    document.body.style.transition = "opacity .8s ease";

    requestAnimationFrame(() => {

        document.body.style.opacity = "1";

    });

});

const audio = document.getElementById("welcomeAudio");

const boton = document.getElementById("playWelcome");

boton.addEventListener("click",()=>{

    audio.currentTime=0;

    audio.play();

});

audio.addEventListener("ended",()=>{

    boton.innerHTML="❤️ Gracias por escucharme";

});

