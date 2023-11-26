const titleModuls = document.querySelector('.functions .contenedor h2');
const modulsItems = document.querySelectorAll('.functions__items .flip-card');

const titleProyecto = document.querySelector('.demos .contenedor h2');
const proyectsItems = document.querySelectorAll('.carousel a');

const titleMember = document.querySelector('.memberships .contenedor h2');
const membersItems = document.querySelectorAll('.memberships__items');

// Eventos para los elementos de la web al hacer scroll
function verificarVisible1(entries) {
    let entry = entries[0];

    if (entry.isIntersecting) {
        // El elemento es visible
        // console.log('si es visible')
        modulsItems.forEach((modul)=> {
            modul.classList.add('margen')
        });
        titleModuls.classList.add('margen');
    } 
}
function verificarVisible2(entries) {
    let entry = entries[0];

    if (entry.isIntersecting) {
        // El elemento es visible
        proyectsItems.forEach((proyect) =>{
            proyect.classList.add('margen');
        });
        titleProyecto.classList.add('margen');
        
    } 
}

function verificarVisible3(entries) {
    let entry = entries[0];

    if (entry.isIntersecting) {
        // El elemento es visible
        membersItems.forEach((member)=> {
            member.classList.add('margen');
        });
        titleMember.classList.add('margen');
       
        
    } 
}
function verificarVisible4(entries) {
    let entry = entries[0];

    if (entry.isIntersecting) {
        // El elemento es visible
        questions.classList.add('margen');
       
        
    } 
}
let observer1 = new IntersectionObserver(verificarVisible1, {
});
let observer2 = new IntersectionObserver(verificarVisible2, {
});
let observer3 = new IntersectionObserver(verificarVisible3, {
});
let observer4 = new IntersectionObserver(verificarVisible4, {
});

// Seccion de los modulos
const moduls = document.querySelector('.functions__items');

// Seccion de los proyectos
const proyects = document.querySelector('.carousel');

// Seccion de membresias
const members = document.querySelector('.memberships');

// Seccion de preguntas frecuentes
const questions = document.querySelector('.questions');


observer1.observe(moduls);
observer2.observe(proyects);
observer3.observe(members);
observer4.observe(questions);