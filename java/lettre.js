$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $(".footer-btnn").click(function(){
        $(".footer").toggleClass("footer-anim")
        $(".footer-btnn").toggleClass("btn-anim")
        $(".footer-title").toggleClass("title-anim")
        $(".icons").toggleClass("icons-anim")
        $(".num").toggleClass("num-anim")
    });
    $('.image-moi').parallaxie({
        speed: 0.2,
        size: cover,
        repeat: no-repeat,
    });
    
})
