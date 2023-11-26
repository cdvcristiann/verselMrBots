const btnWhatsapp = document.querySelector('.whatsapp__icon-container img');
const closeWhatsapp = document.querySelector('.close_whatsapp');
const containerWhatsapp = document.querySelector('.whatsapp-contact');



btnWhatsapp.addEventListener('click', ()=> {
    containerWhatsapp.classList.add('active');
    btnWhatsapp.classList.add('active');
});

closeWhatsapp.addEventListener('click', ()=> {
    containerWhatsapp.classList.remove('active');
    btnWhatsapp.classList.remove('active');
})

