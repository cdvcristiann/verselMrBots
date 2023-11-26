const btnSwitch = document.querySelector('#switch');
const btnFloat = document.querySelectorAll('.menu-float a');
const serviceSlider = document.querySelectorAll('.list__services a');
const nosotros = document.querySelector('.content');
const funciones = document.querySelectorAll('.flip-card-back');
const membresias = document.querySelectorAll('.memberships__items');
const membresiasBtn = document.querySelectorAll('.memberships__btn');
const footer = document.querySelector('.footer-main');
const inputFooter = document.querySelectorAll('.campo-form input');
const submitFooter = document.querySelector('.btn-demo');
const headerWhatsapp = document.querySelector('.header-message');
const botonWhatsapp = document.querySelector('.btn-whatsapp');



btnSwitch.addEventListener('click', ()=> {
    btnSwitch.classList.toggle('mode');
    document.body.classList.toggle('dark');
    serviceSlider.forEach((service) => {
        service.classList.toggle('serv');
    });
    nosotros.classList.toggle('active');
    funciones.forEach((fu) => {
        fu.classList.toggle('active')
    });
    membresias.forEach((men) => {
        men.classList.toggle('active');
    });

    membresiasBtn.forEach((btn) => {
        btn.classList.toggle('active');
    });
    btnFloat.forEach((float) => {
        float.classList.toggle('fondo');
    });

    footer.classList.toggle('back');
    submitFooter.classList.toggle('dark');
    inputFooter.forEach((input)=> {
        input.classList.toggle('dark');
    })
    headerWhatsapp.classList.toggle('dark');
    botonWhatsapp.classList.toggle('dark');
    // Comprobamos si el body tiene la clase active, que seria dark
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('dark-mode', 'true');
    } else {
        localStorage.setItem('dark-mode', 'false');
    }
});


// Comprobamos el modo actual
if (localStorage.getItem('dark-mode') === 'true') {
    btnSwitch.classList.add('mode');
    document.body.classList.add('dark');
    serviceSlider.forEach((service) => {
        service.classList.add('serv');
    });
    nosotros.classList.add('active');
    funciones.forEach((fu) => {
        fu.classList.add('active')
    });
    membresias.forEach((men) => {
        men.classList.add('active');
    })

    membresiasBtn.forEach((btn) => {
        btn.classList.add('active');
    });
    btnFloat.forEach((float) => {
        float.classList.add('fondo');
    });
    footer.classList.add('back');
    submitFooter.classList.add('dark');

    inputFooter.forEach((input)=> {
        input.classList.add('dark');
    });
    headerWhatsapp.classList.add('dark');
    botonWhatsapp.classList.add('dark')
} else {
    btnSwitch.classList.remove('mode');
    document.body.classList.remove('dark');
    // Lista servicios slider
    serviceSlider.forEach((service) => {
        service.classList.remove('serv');
    });
    
    // nosotros
    nosotros.classList.remove('active');

    // funciones
    funciones.forEach((fu) => {
        fu.classList.remove('active')
    });
    // membresisas
    membresias.forEach((men) => {
        men.classList.remove('active');
    })

    // membresias btn
    membresiasBtn.forEach((btn) => {
        btn.classList.remove('active');
    })

    // btn de la navegacion flotante
    btnFloat.forEach((float) => {
        float.classList.remove('fondo');
    });
    // footer
    footer.classList.remove('back');
    submitFooter.classList.remove('dark');
    inputFooter.forEach((input)=> {
        input.classList.remove('dark');
    })

    // boton whatsapp
    headerWhatsapp.classList.remove('dark');
    botonWhatsapp.classList.remove('dark')
}



