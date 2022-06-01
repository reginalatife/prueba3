/*!
* Start Bootstrap - Stylish Portfolio v6.0.5 (https://startbootstrap.com/theme/stylish-portfolio)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-stylish-portfolio/blob/master/LICENSE)
*/
const datos = [
    {
        picsum: "https://picsum.photos/id/1031/900/600?grayscale",
        title: "Trabajos Arquitectónicos",
        text: "El diseño arquitectónico se encarga del diseño de edificios y otros espacios durante el proceso de construcción. Este tiene su origen en una representación mental, o bien concreta o bien abstracta, sobre cómo debe quedar construida una estructura de un edificio. Eso sí, tiene que ser atractivo estéticamente, además de por supuesto tener sentido en cuanto a arquitectura.",
    },
    {
        picsum: "https://picsum.photos/id/20/900/600?grayscale",
        title: "Trabajos Gráfico",
        text: "Tiene como finalidad la creación de comunicaciones e imágenes visuales, tanto estáticas (dibujos) como dinámicas (vídeos). Es uno de los tipos de diseño considerado una especialización del diseño gráfico. Se ocupa del diseño de libros, periódicos y revistas. Pero también de todo tipo de publicaciones, tanto periódicas como ocasionales. Entre ellas, los manuales, los folletos informativos o los fanzines.",
    },
    {
        picsum: "https://picsum.photos/id/119/900/600?grayscale",
        title: "Trabajos Web",
        text: "Se encarga de todo el proceso de diseño y creación de una página web. Pero también del de planificación de su implementación, de su desarrollo y de su mantenimiento posterior a su publicación.  Podemos incluir, en esta categoría, el diseño de experiencia de usuario. Se trata de una especialización imprescindible para garantizar la buena experiencia del cliente al navegar por una página web.",
    },
    {
        picsum: "https://picsum.photos/id/117/900/600?grayscale",
        title: "Trabajos Iluminación",
        text: "Esta modalidad se encarga del diseño de las escenografías y otros elementos relacionados con el proceso de producción cinematográfico. Su proceso de creatividad tendrá varias fases. Fundamentalmente, son tres: la inspiración, que en muchos casos se equipara con la investigación; la identificación del tipo de público al que vas a dirigir la obra para adecuar a él los diseños; y el proceso de creación y creatividad, con el que se da vida al diseño.",
    },
    {
        picsum: "https://picsum.photos/id/122/900/600?grayscale",
        title: "Trabajos Industrial",
        text: "Este tipo de diseño es el que engloba a todo lo relacionado con el diseño de objetos en tres dimensiones. Este tipo de diseño abarca y engloba diversas disciplinas, además de distintas áreas de conocimiento. Entre ellos está el diseño de productos y la ingeniería de todo tipo de diseño de componentes. Incluso de vehículos. Pero también el diseño de estructuras. ",
    },
    {
        picsum: "https://picsum.photos/id/1079/900/600?grayscale",
        title: "Trabajos Fotografía",
        text: "El Diseño Fotográfico resulta ser un juego visual compuesto de técnicas, ideas, conceptos, pero principalmente, imágenes. Imágenes fotográficas que nos invitan a reflexionar, a detenernos unos instantes para apreciar nuestro tiempo, nuestro entorno y la manera como nos desenvolvemos en él.",
    },

];
datos.forEach((d, i) => {
    if (i % 2 == 0) {
        // par
        document.getElementById("trabajos").innerHTML +=
            '<div class="row g-0"><div class="col-md-6 order-md-2 text-white showcase-img" style="background-image: url(' +
            d.picsum +
            ')"></div><div class="col-md-6 order-md-1 my-auto showcase-text"><h2>' +
            d.title +
            '</h2><p class="lead mb-0">' +
            d.text +
            "</p></div></div>";
    } else {
        // impar
        document.querySelector("#trabajos").innerHTML +=
            '<div class="row g-0"><div class="col-md-6 text-white showcase-img" style="background-image: url(' +
            d.picsum +
            ')"></div><div class="col-md-6  my-auto showcase-text"><h2>' +
            d.title +
            '</h2><p class="lead mb-0">' +
            d.text +
            "</p></div></div>";
    }
});


window.addEventListener('DOMContentLoaded', event => {

    const sidebarWrapper = document.getElementById('sidebar-wrapper');
    let scrollToTopVisible = false;
    // Closes the sidebar menu
    const menuToggle = document.body.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', event => {
        event.preventDefault();
        sidebarWrapper.classList.toggle('active');
        _toggleMenuIcon();
        menuToggle.classList.toggle('active');
    })

    // Closes responsive menu when a scroll trigger link is clicked
    var scrollTriggerList = [].slice.call(document.querySelectorAll('#sidebar-wrapper .js-scroll-trigger'));
    scrollTriggerList.map(scrollTrigger => {
        scrollTrigger.addEventListener('click', () => {
            sidebarWrapper.classList.remove('active');
            menuToggle.classList.remove('active');
            _toggleMenuIcon();
        })
    });

    function _toggleMenuIcon() {
        const menuToggleBars = document.body.querySelector('.menu-toggle > .fa-bars');
        const menuToggleTimes = document.body.querySelector('.menu-toggle > .fa-xmark');
        if (menuToggleBars) {
            menuToggleBars.classList.remove('fa-bars');
            menuToggleBars.classList.add('fa-xmark');
        }
        if (menuToggleTimes) {
            menuToggleTimes.classList.remove('fa-xmark');
            menuToggleTimes.classList.add('fa-bars');
        }
    }

    // Scroll to top button appear
    document.addEventListener('scroll', () => {
        const scrollToTop = document.body.querySelector('.scroll-to-top');
        if (document.documentElement.scrollTop > 100) {
            if (!scrollToTopVisible) {
                fadeIn(scrollToTop);
                scrollToTopVisible = true;
            }
        } else {
            if (scrollToTopVisible) {
                fadeOut(scrollToTop);
                scrollToTopVisible = false;
            }
        }
    })
})

function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};
