const sliderContainer = document.querySelector('.slider__container');
const sliderElements = document.querySelectorAll('.slider__items');
const wallapaperMain = document.querySelector('#motion');
const listService = document.querySelectorAll('.services__list a');
const buttons = document.querySelectorAll('.buttons__items');
const serviceList = document.querySelectorAll('.list__services a');
let index = 1;
let porcentaje;
// Eventos
document.addEventListener("DOMContentLoaded", iniciarApp);
buttons.forEach((btn) => {
    btn.addEventListener('click', ()=> {
        if(btn.id === 'button1') {
            document.querySelector('#button2').classList.remove('active');
            btn.classList.add('active');
            index = 0;
            porcentaje = index * -100;
            if (porcentaje === -0) {
               
                // document.querySelector('.title_one').classList.remove('active');
                // document.querySelector('.silder__subtitle').classList.remove('active');
                // document.querySelector('.typeo').classList.remove('active');
                serviceList.forEach((serivice) => {
                    serivice.classList.remove('active');
                })
                setTimeout(()=> {
                    document.querySelector('.title_one').classList.add('active');
                }, 500);

                setTimeout(()=> {
                    document.querySelector('.silder__subtitle').classList.add('active');
                }, 1000);
                setTimeout(()=> {
                    document.querySelector('.button-video a').classList.add('active');
                }, 2000);
            } 
            

        } else if(btn.id === 'button2') {
            document.querySelector('#button1').classList.remove('active');
            
            document.querySelector('.title_one').classList.remove('active');
            document.querySelector('.silder__subtitle').classList.remove('active');
            document.querySelector('.typeo').classList.remove('active');
            document.querySelector('.button-video a').classList.remove('active');

            btn.classList.add('active');
            index = 1;
            porcentaje = index * -100;

            if(porcentaje === -100) {
                document.querySelector('.services__text h3').classList.remove('active');

                setTimeout(()=> {
                    document.querySelector('.services__text h3').classList.add('active');
                }, 500);

                setTimeout(()=> {
                    serviceList.forEach((serivice) => {
                        serivice.classList.add('active');
                    })
                }, 1000);
            }
            

        }
        sliderContainer.style.transform = "translateX("+ porcentaje +"%)";
    })
    
})
// Funciones

function iniciarApp() {
    document.querySelector('.info__wallpaper').classList.add('transport');
    setTimeout(()=> {
        document.querySelector('.title_one').classList.add('active');
    }, 600);
    setTimeout(()=> {
        document.querySelector('.silder__subtitle').classList.add('active');
    }, 1200);

    setTimeout(()=> {
        typed_one();
    }, 1300);
  
    setTimeout(()=> {
        document.querySelector('.button-video a').classList.add('active');
    }, 19000);
}


setInterval(()=> {

    let porcentaje = index * -100;
    console.log(porcentaje)
    if (porcentaje === -0) {

        document.querySelector('#button2').classList.remove('active');
        document.querySelector('#button1').classList.add('active');


        // document.querySelector('.title_one').classList.remove('active');
        // document.querySelector('.silder__subtitle').classList.remove('active');
        document.querySelector('.services__text h3').classList.remove('active');
        serviceList.forEach((serivice) => {
            serivice.classList.remove('active');
        })

        setTimeout(()=> {
            document.querySelector('.title_one').classList.add('active');
        }, 500);

        setTimeout(()=> {
            document.querySelector('.silder__subtitle').classList.add('active');
        }, 1000);

        setTimeout(()=> {
            document.querySelector('.typeo').classList.add('active');
        }, 1500);
        setTimeout(()=> {
            document.querySelector('.button-video a').classList.add('active');
        }, 2000);

    } else if( porcentaje === -100) {
        document.querySelector('#button1').classList.remove('active');
        document.querySelector('#button2').classList.add('active');
        document.querySelector('.button-video a').classList.remove('active');
        document.querySelector('.title_one').classList.remove('active');
        document.querySelector('.silder__subtitle').classList.remove('active');
        document.querySelector('.typeo').classList.remove('active');
        

        setTimeout(()=> {
            document.querySelector('.services__text h3').classList.add('active');
        }, 500);

        setTimeout(()=> {
            serviceList.forEach((serivice) => {
                serivice.classList.add('active');
            });
        }, 1000)
        
    }
    sliderContainer.style.transform = "translateX("+ porcentaje +"%)";
    
    index++;
    if ( index > (sliderElements.length - 1)) {
        index = 0;
    } else {
    }
}, 22000);



setInterval(() => {
    wallapaperMain.classList.toggle('active');
    document.querySelector('.services__wallpaper img').classList.toggle('active');
}, 1200);

// setInterval(()=> {
//    
//     listService.forEach((element)=> {
//         element.classList.toggle('active');
//     })
// }, 2000);


