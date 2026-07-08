/* ==========================================================
    CONSTELLATION.JS

    Canvas interactivo

    ✔ Estrellas
    ✔ Conexiones
    ✔ Mouse interactivo
    ✔ Animación continua

========================================================== */

import { random } from "./utils.js";

/* ==========================================================
    VARIABLES
========================================================== */

let canvas;
let ctx;

const estrellas = [];

const TOTAL_ESTRELLAS = 30;

let mouse = {

    x: null,

    y: null

};

/* ==========================================================
    FUNCIÓN PRINCIPAL
========================================================== */

export function iniciarConstelacion() {

    canvas = document.getElementById("constellation");

    if (!canvas) return;

    ctx = canvas.getContext("2d");

    redimensionar();

    crearEstrellas();

    eventos();

    animar();

}

/* ==========================================================
    TAMAÑO
========================================================== */

function redimensionar() {

    canvas.width = canvas.offsetWidth;

    canvas.height = canvas.offsetHeight;

}

/* ==========================================================
    CREAR ESTRELLAS
========================================================== */

function crearEstrellas() {

    estrellas.length = 0;

    for (let i = 0; i < TOTAL_ESTRELLAS; i++) {

        estrellas.push({

            x: random(0, canvas.width),

            y: random(0, canvas.height),

            radio: random(1.5, 4),

            vx: random(-0.25, 0.25),

            vy: random(-0.25, 0.25)

        });

    }

}

/* ==========================================================
    EVENTOS
========================================================== */

function eventos() {

    window.addEventListener("resize", () => {

        redimensionar();

        crearEstrellas();

    });

    canvas.addEventListener("mousemove", (e) => {

        const rect = canvas.getBoundingClientRect();

        mouse.x = e.clientX - rect.left;

        mouse.y = e.clientY - rect.top;

    });

    canvas.addEventListener("mouseleave", () => {

        mouse.x = null;

        mouse.y = null;

    });

}

/* ==========================================================
    DIBUJAR ESTRELLAS
========================================================== */

function dibujarEstrellas() {

    estrellas.forEach(estrella => {

        ctx.beginPath();

        ctx.arc(

            estrella.x,

            estrella.y,

            estrella.radio,

            0,

            Math.PI * 2

        );

        ctx.fillStyle = "rgba(255,255,255,.9)";

        ctx.fill();

    });

}

/* ==========================================================
    MOVER ESTRELLAS
========================================================== */

function moverEstrellas() {

    estrellas.forEach(estrella => {

        estrella.x += estrella.vx;

        estrella.y += estrella.vy;

        if (

            estrella.x < 0 ||

            estrella.x > canvas.width

        ) {

            estrella.vx *= -1;

        }

        if (

            estrella.y < 0 ||

            estrella.y > canvas.height

        ) {

            estrella.vy *= -1;

        }

    });

}

/* ==========================================================
    DIBUJAR CONEXIONES
========================================================== */

function dibujarConexiones() {

    for (let i = 0; i < estrellas.length; i++) {

        for (let j = i + 1; j < estrellas.length; j++) {

            const dx = estrellas[i].x - estrellas[j].x;

            const dy = estrellas[i].y - estrellas[j].y;

            const distancia = Math.sqrt(

                dx * dx + dy * dy

            );

            if (distancia < 140) {

                ctx.beginPath();

                ctx.moveTo(

                    estrellas[i].x,

                    estrellas[i].y

                );

                ctx.lineTo(

                    estrellas[j].x,

                    estrellas[j].y

                );

                ctx.strokeStyle =

                    `rgba(96,165,250,${
                        1 - distancia / 140
                    })`;

                ctx.lineWidth = 1;

                ctx.stroke();

            }

        }

    }

}

/* ==========================================================
    CONEXIÓN CON EL MOUSE
========================================================== */

function conectarMouse() {

    if (mouse.x === null) return;

    estrellas.forEach(estrella => {

        const dx = estrella.x - mouse.x;

        const dy = estrella.y - mouse.y;

        const distancia = Math.sqrt(

            dx * dx + dy * dy

        );

        if (distancia < 150) {

            ctx.beginPath();

            ctx.moveTo(

                estrella.x,

                estrella.y

            );

            ctx.lineTo(

                mouse.x,

                mouse.y

            );

            ctx.strokeStyle =

                `rgba(255,255,255,${
                    1 - distancia / 150
                })`;

            ctx.stroke();

        }

    });

}

/* ==========================================================
    ANIMACIÓN
========================================================== */

function animar() {

    ctx.clearRect(

        0,

        0,

        canvas.width,

        canvas.height

    );

    moverEstrellas();

    dibujarConexiones();

    conectarMouse();

    dibujarEstrellas();

    requestAnimationFrame(animar);

}