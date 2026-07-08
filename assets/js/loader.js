/* ==========================================================
    LOADER.JS

    Controla la pantalla de carga.

========================================================== */

import { $, sleep } from "./utils.js";


/* ==========================================================
    FUNCIÓN PRINCIPAL
========================================================== */

export async function iniciarLoader() {

    const loader = $("#loader");

    if (!loader) return;

    // Espera un poco para que se vea el loader

    await sleep(1200);

    ocultarLoader(loader);

}


/* ==========================================================
    OCULTAR LOADER
========================================================== */

function ocultarLoader(loader) {

    loader.style.transition =

        "opacity .8s ease";

    loader.style.opacity = "0";

    loader.style.pointerEvents = "none";

    setTimeout(() => {

        loader.remove();

    }, 800);

}


/* ==========================================================
    MOSTRAR LOADER

    (Por si en el futuro lo quieres reutilizar)

========================================================== */

export function mostrarLoader() {

    const loader = $("#loader");

    if (!loader) return;

    loader.style.display = "flex";

    loader.style.opacity = "1";

}


/* ==========================================================
    CAMBIAR TEXTO DEL LOADER
========================================================== */

export function cambiarTexto(texto) {

    const parrafo = $("#loader p");

    if (!parrafo) return;

    parrafo.textContent = texto;

}