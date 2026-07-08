/* ==========================================================
    NAVBAR.JS

    Controla:

    ✔ Navbar transparente
    ✔ Navbar al hacer scroll
    ✔ Scroll suave
    ✔ Botón volver arriba
    ✔ Sección activa
    ✔ Mostrar/Ocultar Navbar

========================================================== */

import { $, $$, scrollA } from "./utils.js";

/* ==========================================================
    VARIABLES
========================================================== */

let ultimoScroll = 0;

const header = $("header");

const backToTop = $("#backToTop");

const links = $$("nav a");

const secciones = $$("section");

/* ==========================================================
    FUNCIÓN PRINCIPAL
========================================================== */

export function iniciarNavbar() {

    cambiarColorNavbar();

    detectarScroll();

    detectarSeccion();

    iniciarBackToTop();

    activarScrollSuave();

}

/* ==========================================================
    CAMBIAR COLOR
========================================================== */

function cambiarColorNavbar() {

    window.addEventListener("scroll", () => {

        if (!header) return;

        if (window.scrollY > 60) {

            header.style.background =

                "rgba(2,6,23,.85)";

            header.style.backdropFilter =

                "blur(18px)";

            header.style.boxShadow =

                "0 10px 35px rgba(0,0,0,.25)";

        }

        else {

            header.style.background =

                "rgba(2,6,23,.25)";

            header.style.boxShadow =

                "none";

        }

    });

}

/* ==========================================================
    OCULTAR Y MOSTRAR NAVBAR
========================================================== */

function detectarScroll() {

    window.addEventListener("scroll", () => {

        if (!header) return;

        const actual = window.pageYOffset;

        if (actual > ultimoScroll && actual > 120) {

            header.style.transform =

                "translateY(-100%)";

        }

        else {

            header.style.transform =

                "translateY(0)";

        }

        ultimoScroll = actual;

    });

}

/* ==========================================================
    SCROLL SUAVE
========================================================== */

function activarScrollSuave() {

    links.forEach(link => {

        link.addEventListener("click", (evento) => {

            evento.preventDefault();

            const destino =

                link.getAttribute("href");

            scrollA(destino);

        });

    });

}

/* ==========================================================
    BOTÓN VOLVER ARRIBA
========================================================== */

function iniciarBackToTop() {

    if (!backToTop) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        }

        else {

            backToTop.classList.remove("show");

        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/* ==========================================================
    SECCIÓN ACTIVA
========================================================== */

function detectarSeccion() {

    window.addEventListener("scroll", () => {

        let actual = "";

        secciones.forEach(seccion => {

            const top =

                seccion.offsetTop - 180;

            const alto =

                seccion.offsetHeight;

            if (

                window.scrollY >= top &&

                window.scrollY < top + alto

            ) {

                actual = seccion.id;

            }

        });

        links.forEach(link => {

            link.classList.remove("active");

            if (

                link.getAttribute("href") ===

                "#" + actual

            ) {

                link.classList.add("active");

            }

        });

    });

}

/* ==========================================================
    ABRIR MENÚ MÓVIL

    (Se implementará más adelante)

========================================================== */

export function abrirMenu() {

    console.log("Abrir menú");

}

/* ==========================================================
    CERRAR MENÚ MÓVIL

========================================================== */

export function cerrarMenu() {

    console.log("Cerrar menú");

}