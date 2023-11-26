const itemsHeader = document.querySelectorAll('.accordion-item-header');

itemsHeader.forEach((accordion) => {
    accordion.addEventListener('click', collapseAcordion);

    function collapseAcordion() {
        const activateAccordition = document.querySelector('.active');
        if (activateAccordition && activateAccordition !== accordion) {

            activateAccordition.classList.toggle('active');

        }
        
        accordion.classList.toggle('active');
        const accordionItemBody = accordion.nextElementSibling;


        if (accordion.classList.contains('active')) {

            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';

        } else {
            accordionItemBody.style.maxHeight = 0;
        }
    }
});


