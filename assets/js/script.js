//Accueil
$(document).ready(function() {

    // Parallax.js
    var targetElements = $('section, .double-images').get();
    var scenes = [];
    for (var i = 0; i < targetElements.length; i++) {
        scenes.push(new Parallax(targetElements[i]));
    }

    // Marquage de la section dans la barre de navigation
    $('main').on("scroll", function() {
        var currentScroll = $(document).scrollTop();

        $("nav a").each(function(){
            var target = $(this).attr("href");
            var positionTop = $(target).offset().top;
            var positionBottom = positionTop + $(target).height();
       
            if((currentScroll > positionTop) && (currentScroll <= positionBottom)){
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }
    })

    // Effet de lumière éteinte
    $('main').on("scroll", function() {
        $("section").css("background-color", "black");
        $("section img, section p").css("filter", "brightness(0.3)");
    
        if ($("#accueil").offset().top <= ($('#accueil').height()*0.15)
        && $("#accueil").offset().top >= -($('#accueil').height()*0.85)) {
            $("#accueil").css("background-color", "unset");
            $("#accueil img").css("filter", "drop-shadow(0 0 1em rgba(255, 255, 255, 0.5))");

            $("#accueil p").css("filter", "none");
            $("main").css("background-color", "var(--accueil)");
        }
        if ($("#artiste").offset().top <= ($('#accueil').height()*0.15)
        && $("#artiste").offset().top >= -($('#accueil').height()*0.85)) {
            $("#artiste").css("background-color", "unset");
            $("main").css("background-color", "var(--artiste)");

            $("#artiste img").css("filter", "drop-shadow(0 0 1em rgba(255, 255, 255, 0.5))");
            $("#artiste p").css("filter", "none");
        }
        if ($("#album").offset().top <= ($('#accueil').height()*0.15)
        && $("#album").offset().top >= -($('#accueil').height()*0.85)) {
            $("#album").css("background-color", "unset");
            $("main").css("background-color", "var(--album)");

            $("#album img").css("filter", "drop-shadow(0 0 1em rgba(255, 255, 255, 0.5))");
            $("#album p").css("filter", "none");
        }
        if ($("#media").offset().top <= ($('#accueil').height()*0.15)
        && $("#media").offset().top >= -($('#accueil').height()*0.85)) {
            $("#media").css("background-color", "unset");
            $("main").css("background-color", "var(--media)");
            
            $("#media img").css("filter", "drop-shadow(0 0 1em rgba(255, 255, 255, 0.5))");
            $("#media p").css("filter", "none");
        }
        if ($("#jeu-video").offset().top <= ($('#accueil').height()*0.15)
        && $("#jeu-video").offset().top >= -($('#accueil').height()*0.85)) {
            $("#jeu-video").css("background-color", "unset");
            $("main").css("background-color", "var(--jeu-video)");

            $("#jeu-video img").css("filter", "drop-shadow(0 0 1em rgba(255, 255, 255, 0.5))");
            $("#jeu-video p").css("filter", "none");
        }
        if ($("#film").offset().top <= ($('#accueil').height()*0.15)
        && $("#film").offset().top >= -($('#accueil').height()*0.85)) {
            $("#film").css("background-color", "unset");
            $("main").css("background-color", "var(--film)");

            $("#film img").css("filter", "drop-shadow(0 0 1em rgba(255, 255, 255, 0.5))");
            $("#film p").css("filter", "none");
        }
        if ($("#marque").offset().top <= ($('#accueil').height()*0.15)
        && $("#marque").offset().top >= -($('#accueil').height()*0.85)) {
            $("#marque").css("background-color", "unset");
            $("main").css("background-color", "var(--marque)");

            $("#marque img").css("filter", "drop-shadow(0 0 1em rgba(255, 255, 255, 0.5))");
            $("#marque p").css("filter", "none");
        }
        if ($("#musee").offset().top <= ($('#accueil').height()*0.15)
        && $("#musee").offset().top >= -($('#accueil').height()*0.85)) {
            $("#musee").css("background-color", "unset");
            $("main").css("background-color", "var(--musee)");

            $("#musee img").css("filter", "drop-shadow(0 0 1em rgba(255, 255, 255, 0.5))");
            $("#musee p").css("filter", "none");
        }
        if ($("#contact").offset().top <= ($('#accueil').height()*0.15)
        && $("#contact").offset().top >= -($('#accueil').height()*0.85)) {
            $("#contact").css("background-color", "unset");
            $("main").css("background-color", "var(--contact)");

            $("#contact img").css("filter", "drop-shadow(0 0 1em rgba(255, 255, 255, 0.5))");
            $("#contact p").css("filter", "none");
        }
    });
  });


});