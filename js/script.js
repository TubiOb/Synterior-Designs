// HAMBURGER MENU
const hamburger = document.querySelector('.hamburger');
const hamburger_icon = hamburger.querySelector('span');
const mobile_menu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
    hamburger_icon.innerText = hamburger_icon.innerText === 'menu' ? 'close' : 'menu';

    mobile_menu.classList.toggle('is-open');
})


//IMAGE SLIDESHOW
var slideIndex = 0;
var slideGroups = document.getElementsByClassName("image-container");
for (var i = 0; i < slideGroups.length; i++) {
    var slideGroup = slideGroups[i];
    var slideInterval = slideGroup.getAttribute("data-interval") || 6000;
    setInterval(function() {
        showSlides(slideGroup);
    }, slideInterval);
}

function showSlides(slideGroup) {
    var i;
    var slides = slideGroup.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
}