setTimeout(girisKutuSil , 3000);

function girisKutuSil() {
    document.getElementById("sayfa-acilis-introsu").remove();

    $(function () {
        $(window).ready(function(){
            if($(document).scrollTop()>150){
                $(".header").addClass("header-fixed");
                $(".header img").attr("src" , "assets/header-logo-white.png");
            }
            else{
                $(".header").removeClass("header-fixed");
                $(".cocuk-sayfa-header img").attr("src" , "assets/header-logo-black.png");
            }
            if ($(document).scrollTop()>370) {
                $(".hakkimizda-sag-slogan").addClass("eleman-acilis");
                $(".hakkimizda-sag-yazi").addClass("eleman-acilis");
            }
            if ($(document).scrollTop()>350) {
                $(".hakkimizda-sol-kutu").addClass("hakkimizda-ozet-acilis");
                $(".hakkimizda-sol-foto").addClass("hakkimizda-foto-acilis");
            }
        });
    
        $(window).scroll(function(){
            if($(document).scrollTop()>150){
                $(".header").addClass("header-fixed");
                $(".header img").attr("src" , "assets/header-logo-white.png");
            }
            else{
                $(".header").removeClass("header-fixed");
                $(".cocuk-sayfa-header img").attr("src" , "assets/header-logo-black.png");
            }
            if ($(document).scrollTop()>370) {
                $(".hakkimizda-sag-slogan").addClass("eleman-acilis");
                $(".hakkimizda-sag-yazi").addClass("eleman-acilis");
            }
            if ($(document).scrollTop()>350) {
                $(".hakkimizda-sol-kutu").addClass("hakkimizda-ozet-acilis");
                $(".hakkimizda-sol-foto").addClass("hakkimizda-foto-acilis");
            }
        });


        $("#daha-fazlasi").mouseenter(function() {
            $(".hakkimizda-sol-foto img").removeClass("foto-kucult");
            $(".hakkimizda-sol-foto img").addClass("foto-buyut");
        });
        $("#daha-fazlasi").mouseleave(function() {
            $(".hakkimizda-sol-foto img").removeClass("foto-buyut");
            $(".hakkimizda-sol-foto img").addClass("foto-kucult");
        });
        
    })
}


