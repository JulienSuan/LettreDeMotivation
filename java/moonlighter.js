$(document).ready(function(){
    
    $('.owl-carousel').owlCarousel({
        loop:true,
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
                items:2
            },
            1400:{
                items:3
            }
        }
    });
    $('.transi').parallaxie({
        speed: 0.6,
        offset: 0,
    });
    $('.transigif').parallaxie({
        speed: 0.6,
        offset: 0,
    });
    $(".minilogo").click(function(){

        $("html,body").animate({
            scrollTop: $("#logoo").offset().top
        },
            "slow")

    })
});

