
    if (window.matchMedia("(min-width: 680px)").matches) {
        console.log("Screen width is at least 500px");
        document.querySelector('.footer__number span').innerHTML = 'Helpline Number -';
    } else {
        console.log("Screen less than 500px");
        document.querySelector('.footer__number span').innerHTML = 'Helpline Number';
    }
window.addEventListener("resize", function() {
    if (window.matchMedia("(min-width: 680px)").matches) {
        document.querySelector('.footer__number span').innerHTML = 'Helpline Number -';
    } else {
        document.querySelector('.footer__number span').innerHTML = 'Helpline Number';
    }
});