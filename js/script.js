const hamburger = document.querySelector('.hamburger');
const hamburger_icon = hamburger.querySelector('span');
const mobile_menu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
    hamburger_icon.innerText = hamburger_icon.innerText === 'menu' ? 'close' : 'menu';

    mobile_menu.classList.toggle('is-open');
})


//IMAGE SLIDESHOW
// var slideIndex = 0;
// showSlides();

// function showSlides() {
//     var i;
//     var slides = document.getElementsByClassName("image-container");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) { slideIndex = 1 }
//     slides[slideIndex - 1].style.display = "block";
//     setTimeout(showSlides, 2000); // Change image every 2 seconds
// }

// var slideIndex = 0;
// var slideGroups = document.getElementsByClassName("image-container");
// for (var i = 0; i < slideGroups.length; i++) {
//     showSlides(slideGroups[i]);
// }

// function showSlides(slideGroups) {
//     var i;
//     var slides = slideGroups.getElementsByClassName("mySlides");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) { slideIndex = 1 }
//     slides[slideIndex - 1].style.display = "block";
// }

// let slideIndex = 0;
// showSlides();

// function showSlides() {
//     let i;
//     let slides = document.getElementsByClassName("image-container");

//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) { slideIndex = 1 }

//     slides[slideIndex - 1].style.display = "block";
//     setTimeout(showSlides, 6000);
// }

// 

var slideIndex = 0;
var slideGroups = document.getElementsByClassName("image-container");
for (var i = 0; i < slideGroups.length; i++) {
    var slideGroup = slideGroups[i];
    var slideInterval = slideGroup.getAttribute("data-interval") || 6000; // set default interval to 2s
    setInterval(function() {
        showSlides(slideGroups);
    }, slideInterval);
}

function showSlides(slideGroups) {
    var i;
    var slides = slideGroups.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
}