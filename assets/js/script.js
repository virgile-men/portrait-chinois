//Accueil
$(document).ready(function() {

    // Parallax.js
    var targetElements = $('section, .double-images').get();
    var scenes = [];
    for (var i = 0; i < targetElements.length; i++) {
        scenes.push(new Parallax(targetElements[i]));
    }

    $('main').on("scroll", function() {


        // Marquage de la section dans la barre de navigation
        var currentScroll = $(document).scrollTop();

        $("nav a").each(function(){
            var target = $(this).attr("href");
            var positionTop = $(target).offset().top;
            var positionBottom = positionTop + $(target).height();
       
            if((currentScroll > positionTop) && (currentScroll <= positionBottom)){
                $(this).addClass("nav-active");
            } else {
                $(this).removeClass("nav-active");
            }

            
        // Effet de lumière éteinte
    
        if ($("#accueil").offset().top <= ($('#accueil').height()*0.15)
        && $("#accueil").offset().top >= -($('#accueil').height()*0.85)) {
            sectionActive("#accueil","#accueil img","#accueil p","var(--accueil)");
        }
        if ($("#artiste").offset().top <= ($('#accueil').height()*0.15)
        && $("#artiste").offset().top >= -($('#accueil').height()*0.85)) {
            sectionActive("#artiste","#artiste img","#artiste p","var(--artiste)");
        }
        if ($("#album").offset().top <= ($('#accueil').height()*0.15)
        && $("#album").offset().top >= -($('#accueil').height()*0.85)) {
            sectionActive("#album","#album img","#album p","var(--album)");
        }
        if ($("#media").offset().top <= ($('#accueil').height()*0.15)
        && $("#media").offset().top >= -($('#accueil').height()*0.85)) {
            sectionActive("#media","#media img","#media p","var(--media)");
        }
        if ($("#jeu-video").offset().top <= ($('#accueil').height()*0.15)
        && $("#jeu-video").offset().top >= -($('#accueil').height()*0.85)) {
            sectionActive("#jeu-video","#jeu-video img","#jeu-video p","var(--jeu-video)");
        }
        if ($("#film").offset().top <= ($('#accueil').height()*0.15)
        && $("#film").offset().top >= -($('#accueil').height()*0.85)) {
            sectionActive("#film","#film img","#film p","var(--film)");
        }
        if ($("#marque").offset().top <= ($('#accueil').height()*0.15)
        && $("#marque").offset().top >= -($('#accueil').height()*0.85)) {
            sectionActive("#marque","#marque img","#marque p","var(--marque)");
        }
        if ($("#musee").offset().top <= ($('#accueil').height()*0.15)
        && $("#musee").offset().top >= -($('#accueil').height()*0.85)) {
            sectionActive("#musee","#musee img","#musee p","var(--musee)");
        }
        if ($("#contact").offset().top <= ($('#accueil').height()*0.15)
        && $("#contact").offset().top >= -($('#accueil').height()*0.85)) {
            sectionActive("#contact","#contact img","#contact p","var(--contact)");
        }
    });
  });

        function sectionActive(section,sectionImg,sectionP,mainColor) {
            $("section").removeClass("section-active");
            $("section img").removeClass("img-active");
            $("section p").removeClass("p-active");
            $(section).addClass("section-active");
            $(sectionImg).addClass("img-active");
            $(sectionP).addClass("p-active");
            $("main").css("background-color", mainColor);
        }

        


});