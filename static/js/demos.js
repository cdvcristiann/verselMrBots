const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Obtén la cantidad de tarjetas que caben en el carrusel a la vez
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Inserte copias de las últimas tarjetas al comienzo del carrusel para un desplazamiento infinito
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Inserte copias de las primeras tarjetas hasta el final del carrusel para un desplazamiento infinito
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Desplácese por el carrusel hasta la posición adecuada para ocultar las primeras tarjetas duplicadas en Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Agregue detectores de eventos para los botones de flecha para desplazar el carrusel hacia la izquierda y hacia la derecha
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Registra el cursor inicial y la posición de desplazamiento del carrusel.
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; // si isDragging es falso regresa desde aqu
    // Actualiza la posición de desplazamiento del carrusel según el movimiento del cursor
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    // Si el carrusel está al principio, desplázate hasta el final.
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // Si el carrusel está al final, desplázate hasta el principio
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    // Borre el tiempo de espera existente e inicie la reproducción automática si el mouse no está sobre el carrusel
    clearTimeout(timeoutId);
    // if(!wrapper.matches(":hover")) autoPlay();
}

// const autoPlay = () => {
//     if(window.innerWidth < 800 || !isAutoPlay) return; // // Devuelve si la ventana es menor que 800 o isAutoPlay es falso
//     // Reproducción automática del carrusel cada 2500 ms
//     timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
// }
// autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
// carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
// wrapper.addEventListener("mouseleave", autoPlay);