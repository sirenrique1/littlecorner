/* ==========================================================
    MUSIC.JS

    Control de la música de fondo.

    Funciones:

    ✔ Play / Pause
    ✔ Fade In
    ✔ Fade Out
    ✔ Guardar estado
    ✔ Recordar estado
    ✔ Cambiar icono
========================================================== */

import { $ } from "./utils.js";

/* ==========================================================
    ELEMENTOS
========================================================== */

const audio = $("#music");
const boton = $("#musicButton");

/* ==========================================================
    CONFIGURACIÓN
========================================================== */

const VOLUMEN_MAXIMO = 0.35;

const VELOCIDAD_FADE = 0.02;

let reproduciendo = false;

/* ==========================================================
    FUNCIÓN PRINCIPAL
========================================================== */

export function iniciarMusica() {

    if (!audio || !boton) return;

    audio.loop = true;

    audio.volume = 0;

    restaurarEstado();

    boton.addEventListener("click", alternarMusica);

}

/* ==========================================================
    PLAY / PAUSE
========================================================== */

function alternarMusica() {

    if (reproduciendo) {

        fadeOut();

    }

    else {

        fadeIn();

    }

}

/* ==========================================================
    FADE IN
========================================================== */

function fadeIn() {

    audio.play();

    reproduciendo = true;

    guardarEstado(true);

    actualizarIcono();

    let volumen = 0;

    const intervalo = setInterval(() => {

        volumen += VELOCIDAD_FADE;

        if (volumen >= VOLUMEN_MAXIMO) {

            volumen = VOLUMEN_MAXIMO;

            clearInterval(intervalo);

        }

        audio.volume = volumen;

    }, 60);

}

/* ==========================================================
    FADE OUT
========================================================== */

function fadeOut() {

    let volumen = audio.volume;

    const intervalo = setInterval(() => {

        volumen -= VELOCIDAD_FADE;

        if (volumen <= 0) {

            volumen = 0;

            clearInterval(intervalo);

            audio.pause();

        }

        audio.volume = volumen;

    }, 60);

    reproduciendo = false;

    guardarEstado(false);

    actualizarIcono();

}

/* ==========================================================
    ICONO
========================================================== */

function actualizarIcono() {

    if (!boton) return;

    if (reproduciendo) {

        boton.innerHTML =

            '<i class="fa-solid fa-pause"></i>';

    }

    else {

        boton.innerHTML =

            '<i class="fa-solid fa-music"></i>';

    }

}

/* ==========================================================
    LOCAL STORAGE
========================================================== */

function guardarEstado(estado) {

    localStorage.setItem(

        "music",

        estado ? "playing" : "paused"

    );

}

/* ==========================================================
    RESTAURAR ESTADO
========================================================== */

function restaurarEstado() {

    const estado = localStorage.getItem("music");

    if (estado === "playing") {

        fadeIn();

    }

}

/* ==========================================================
    CAMBIAR VOLUMEN
========================================================== */

export function establecerVolumen(valor) {

    if (!audio) return;

    audio.volume = valor;

}

/* ==========================================================
    DETENER MÚSICA
========================================================== */

export function detenerMusica() {

    if (!audio) return;

    fadeOut();

}

/* ==========================================================
    REPRODUCIR MÚSICA
========================================================== */

export function reproducirMusica() {

    if (!audio) return;

    if (!reproduciendo) {

        fadeIn();

    }

}

