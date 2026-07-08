/* ==========================================================
    QUOTES.JS

    Carga frases desde un archivo JSON
    y permite mostrarlas aleatoriamente.

========================================================== */

import { $, randomInt } from "./utils.js";

/* ==========================================================
    VARIABLES
========================================================== */

const quote = $("#quote");
const boton = $("#quoteButton");

let frases = [];

/* ==========================================================
    FUNCIÓN PRINCIPAL
========================================================== */

export async function iniciarFrases() {

    if (!quote) return;

    await cargarFrases();

    mostrarFrase();

    if (boton) {

        boton.addEventListener("click", () => {

            cambiarFrase();

        });

    }

}

/* ==========================================================
    CARGAR JSON
========================================================== */

async function cargarFrases() {

    try {

        const respuesta = await fetch("assets/data/quotes.json");

        frases = await respuesta.json();

    }

    catch(error){

        console.error("No se pudieron cargar las frases.");

        frases = [

            "Todo cambio empieza con una decisión.",
            "Siempre voy a pensar que tu voz tiene una forma muy bonita de darme tranquilidad.",
            "Podría escucharte hablar durante horas y seguir sintiendo que el tiempo pasó demasiado rápido.",
            "Entendí que una llamada contigo podía mejorar un día entero.",
            "Tu sonrisa tiene esa costumbre de quedarse en mi cabeza mucho tiempo después de verla.",
            "Nunca me voy a cansar de decirte lo bonita que te ves cuando sonríes.",
            "Si pudiera guardar un instante, seguramente elegiría uno donde estés sonriendo.",
            "Siempre termino fijándome en esos pequeños detalles que hacen que seas tú.",
            "Hay cosas que probablemente nadie nota, pero a mí siempre me han encantado.",
            "Mientras más te conocía, más detalles encontraba para admirar.",
            "Me encanta la forma en que eliges tu ropa. Siempre encuentro algo bonito que decirte.",
            "Me gusta cuando te arreglas, pero también cuando eres simplemente tú.",
            "Siempre encuentro una nueva razón para decirte lo bonita que eres.",
            "Tu forma de ser siempre ha sido lo primero que admiro.",
            "Escuchar tu voz sigue siendo una de mis partes favoritas del día.",
            "Siemopre sonrío cuando aparece una notificación tuya.",
            "Gracias por existir exactamente como eres.",
            "Hay personas que iluminan un lugar cuando llegan. Tú eres una de ellas."

        ];

    }

}

/* ==========================================================
    MOSTRAR PRIMERA FRASE
========================================================== */

function mostrarFrase(){

    if(frases.length===0)return;

    quote.textContent=frases[randomInt(0,frases.length-1)];

}

/* ==========================================================
    CAMBIAR FRASE
========================================================== */

function cambiarFrase(){

    if(frases.length===0)return;

    quote.style.opacity=0;

    quote.style.transform="translateY(20px)";

    setTimeout(()=>{

        quote.textContent=

        frases[randomInt(0,frases.length-1)];

        quote.style.opacity=1;

        quote.style.transform="translateY(0)";

    },300);

}