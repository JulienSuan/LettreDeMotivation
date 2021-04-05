$(document).ready(function(){

    $(".main").parallaxie({
        speed: 0.8,
    });
    $(".transi-img").parallaxie({
        speed: 0.8,
    });
    $(".projet").parallaxie({
        speed: 0.8,
    });

    window.onscroll = function () {
        if (document.documentElement.scrollTop > 140) {
            $(".nav").addClass("nav-move")
            $(".menu").addClass("menu-move")
        } 
        else {
            $(".nav").removeClass("nav-move")
            $(".menu").removeClass("menu-move")
        }
        if (document.documentElement.scrollTop > 1070) {
            $(".menu").addClass("menu-move2")
            $(".nav").addClass("nav-move2")
        } else {
            $(".menu").removeClass("menu-move2")
            $(".nav").removeClass("nav-move2")
        }
        if (document.documentElement.scrollTop > 400) {
            $(".motivation-title").addClass("motivation-title2")
        } else {
            $(".motivation-title").removeClass("motivation-title2")
        }
        if (document.documentElement.scrollTop > 600) {
            $(".motivation-text").addClass("motivation-text2")
        } else {
            $(".motivation-text").removeClass("motivation-text2")
        }
        if (document.documentElement.scrollTop > 700) {
            $(".img2").addClass("img2-show")
        } else {
            $(".img2").removeClass("img2-show")
        }
        if (document.documentElement.scrollTop > 1800) {
            $(".interets-title").addClass("interets-title2")
        } else {
            $(".interets-title").removeClass("interets-title2")
        }
        if (document.documentElement.scrollTop > 2000) {
            $(".inter").addClass("inter-anim")
        } else {
            $(".inter").removeClass("inter-anim")
        }
        if (document.documentElement.scrollTop > 3200) {
            $(".projet-title1").addClass("projet-title1-anim");
        } else {
            $(".projet-title1").removeClass("projet-title1-anim");
        }
        if (document.documentElement.scrollTop > 3200) {
            $(".projet-title2").addClass("projet-title2-anim");
        } else {
            $(".projet-title2").removeClass("projet-title2-anim");
        }
        if (document.documentElement.scrollTop > 3200) {
            $(".projet-title").addClass(".projet-title-anim");
        } else {
            $(".projet-title").removeClass(".projet-title-anim");
        }    
    }
    $(".menu:nth(0)").click(function(){

        $("html,body").animate({
            scrollTop: $("#motivation").offset().top
        },
            "slow")

    })
    $(".menu:nth(1)").click(function(){

        $("html,body").animate({
            scrollTop: $("#interets").offset().top
        },
            "slow")

    })
    $(".menu:nth(2)").click(function(){

        $("html,body").animate({
            scrollTop: $(".projet").offset().top
        },
            "slow")

    })
    TweenMax.to(".nav", 2, {
        opacity: 1,
        y: 0,
        ease: Expo.easeInOut
    })
    TweenMax.to(".img", 1, {
        delay: 0.5,
        opacity: 1,
        ease: Expo.easeInOut,
    })

})
