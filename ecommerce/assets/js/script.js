


// Elementos del hero
const titleContent = document.querySelector('.texto h1');
const textContent = document.querySelector('.texto p');
const btnContent = document.querySelector('.texto a');


// Elementos que tendran eventos al hacer scroll
const productLista1 = document.querySelectorAll('#product1 .card');
const productLista2 = document.querySelectorAll('#product2 .card');
const productLista3 = document.querySelectorAll('#product3 .card');
// Eventos

document.addEventListener('DOMContentLoaded', ()=> {

    setTimeout(()=> {
        titleContent.classList.add('active');
    }, 100);


    setTimeout(()=> {
        textContent.classList.add('active');
    }, 500);

    setTimeout(()=> {
        btnContent.classList.add('active');
    }, 1000);
});



// Eventos al hacer scroll

function verificarElement1(entries) {
    let entry = entries[0]

    if (entry.isIntersecting) {
        productLista1.forEach((product)=>{
            product.classList.add('active');
        })
    }
}

function verificarElement2(entries) {
    let entry = entries[0]

    if (entry.isIntersecting) {
        productLista2.forEach((product)=>{
            product.classList.add('active');
        })
    }
}

function verificarElement3(entries) {
    let entry = entries[0]

    if (entry.isIntersecting) {
        productLista3.forEach((product)=>{
            product.classList.add('active');
        })
    }
}
let observer1 = new IntersectionObserver(verificarElement1,{
}) ;
let observer2 = new IntersectionObserver(verificarElement2,{
}) ;
let observer3 = new IntersectionObserver(verificarElement3,{
}) ;

const productList1 = document.querySelector('#product1');
const productList2 = document.querySelector('#product2');
const productList3 = document.querySelector('#product3');

observer1.observe(productList1)
observer2.observe(productList2)
observer3.observe(productList3)
