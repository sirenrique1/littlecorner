/* ==========================================================
    TYPING.JS

    Máquina de escribir para la carta.

========================================================== */

import { $, sleep, randomInt } from "./utils.js";

/* ==========================================================
    VARIABLES
========================================================== */

const contenedor = $("#typing-text");

let escribiendo = false;

let cursor;

/* ==========================================================
    TEXTO POR DEFECTO

    Puedes cambiarlo por el tuyo.
========================================================== */

const texto = `Si llegaste hasta aquí, gracias por regalarme un momento de tu tiempo.

Durante estos días he pensado mucho en nosotros, en lo que vivimos, en lo que hice mal y, sobre todo, en la persona que quiero llegar a ser.

Entendí que las palabras, por bonitas que sean, no pueden reparar por sí solas una confianza que fue lastimada. Eso solo pueden hacerlo el tiempo, la honestidad y las acciones.

Por eso esta página no nació así de la nada. Nació porque quería que existiera un lugar donde pudiera expresarte algo diferente: todo lo que admiro de ti.

Muchas veces me preguntabas qué veía en ti, o qué era lo que tanto me gustaba. La verdad es que nunca supe responderlo por completo.

No es una sola cosa.

Son muchos pequeños detalles.

Tu voz cuando hacemos llamada.

Tu sonrisa cuando algo te hace feliz.

La forma en que hablas.

Cómo caminas.

Cómo eliges la ropa que vas a usar.

Incluso esos cuando nos molestamos mutuamente, que terminan haciéndome sonreír.

Son esas cosas las que hicieron que te fueras convirtiendo en alguien tan especial para mí.

Y si hoy estoy aquí, escribiendo cada una de estas palabras, es porque quiero que sepas que sigo viendo todo eso en ti.

Ojalá que, mientras recorres esta página, puedas descubrir muchas de esas pequeñas razones por las que me encantas.

Si alguna vez vuelves a preguntarme qué veo en ti, espero que esta página responda una pequeña parte de esa pregunta. Porque nunca ha sido una sola razón... siempre han sido cientos de pequeños detalles que, juntos, hacen que seas tú.`;

/* ==========================================================
    FUNCIÓN PRINCIPAL
========================================================== */

export async function iniciarMaquinaEscribir() {

    if (!contenedor) return;

    if (escribiendo) return;

    escribiendo = true;

    crearCursor();

    await escribirTexto(texto);

}

/* ==========================================================
    ESCRIBIR TEXTO
========================================================== */

async function escribirTexto(texto) {

    contenedor.innerHTML = "";

    contenedor.appendChild(cursor);

    for (let i = 0; i < texto.length; i++) {

        const caracter = texto[i];

        cursor.remove();

        contenedor.innerHTML += convertirCaracter(caracter);

        contenedor.appendChild(cursor);

        await sleep(obtenerVelocidad(caracter));

    }

}

/* ==========================================================
    CONVERTIR CARACTERES
========================================================== */

function convertirCaracter(caracter) {

    if (caracter === "\n") {

        return "<br>";

    }

    return caracter;

}

/* ==========================================================
    VELOCIDAD NATURAL
========================================================== */

function obtenerVelocidad(caracter) {

    switch (caracter) {

        case ".":

        case "!":

        case "?":

            return 500;

        case ",":

        case ";":

        case ":":

            return 250;

        case " ":

            return 35;

        default:

            return randomInt(18,45);

    }

}

/* ==========================================================
    CURSOR
========================================================== */

function crearCursor() {

    cursor = document.createElement("span");

    cursor.className = "typing-cursor";

    cursor.textContent = "|";

}

/* ==========================================================
    REINICIAR
========================================================== */

export async function reiniciarMaquina() {

    if (!contenedor) return;

    escribiendo = false;

    contenedor.innerHTML = "";

    await iniciarMaquinaEscribir();

}

/* ==========================================================
    ESCRIBIR OTRO TEXTO
========================================================== */

export async function escribirNuevoTexto(nuevoTexto) {

    if (!contenedor) return;

    escribiendo = false;

    contenedor.innerHTML = "";

    crearCursor();

    escribiendo = true;

    await escribirTexto(nuevoTexto);

}

/* ==========================================================
    SABER SI TERMINÓ
========================================================== */

export function terminoDeEscribir() {

    return !escribiendo;

}