const btnMenu = document.querySelector('.menu');
const menuHeader = document.querySelector('.trolley-nav');
const btncarrito = document.querySelector('.icon-trolley');
const carrito = document.querySelector('.shopping_cart');



btnMenu.addEventListener('click', ()=> {
    menuHeader.classList.toggle('active');
})
btncarrito.addEventListener('click', ()=> {
    carrito.classList.toggle('active');
})