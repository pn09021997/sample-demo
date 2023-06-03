//Icon bar toggle 
const iconBarToggle = document.querySelector('.toggle');
const iconBarListItem = document.querySelector('.icon-bar__list-item');

iconBarToggle.addEventListener('click', () => {
    if (iconBarListItem.classList.contains('icon-bar-hide')) {
        iconBarListItem.classList.replace('icon-bar-hide', 'icon-bar-show');
    } else {
        iconBarListItem.classList.replace('icon-bar-show', 'icon-bar-hide');
    }
});


//Accordion
const accordionToggleArr = document.querySelectorAll('.accordion__toggle');

accordionToggleArr.forEach(accToggle => {
    accToggle.addEventListener('click', () => {
        accToggle.classList.toggle('active');
        const accPanel = accToggle.nextElementSibling;
        if (accPanel.style.maxHeight) {
            accPanel.style.maxHeight = null;
        } else {
            accPanel.style.maxHeight = accPanel.scrollHeight + "px";
        }
    });
});