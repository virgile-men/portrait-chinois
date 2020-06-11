//Accueil
$(document).ready(function() {

    // Parallax
    var targetElements = $('section, .double-images').get();

    var scenes = [];
    for (var i = 0; i < targetElements.length; i++) {
        scenes.push(new Parallax(targetElements[i]));
    }

});