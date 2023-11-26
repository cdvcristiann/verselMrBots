const nav = document.querySelector('.nav-main');
const btnNav = document.querySelector('.bars__menu');


btnNav.addEventListener('click', ()=> {
    nav.classList.toggle('active');
})