//owl carousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 4000,
        margin: 20,
        responsiveClass: true,
        responsive:{
            0:{
                items:1,
            },
            900:{
                item:3,
            }
        }
    })
});


//btn-subir
let btnSubir = document.querySelector(".btn-subir");
window.addEventListener("scroll", function(){
    if(window.pageYOffset > 500){
        btnSubir.style.display = "flex";
    } else{
        btnSubir.style.display = 'none';
    }
});

//preloader
window.addEventListener("load", function(){
    document.querySelector(".preloader").style.display = "none"
});

copyright()
//copyright
function copyright(){
    let copy = document.querySelector(".date");
    copy.textContent = new Date().getFullYear()
}
