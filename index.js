var images = new Array();

function preloadImages() {

    for (i = 0; i < preloadImages.arguments.length; i++) {

        images[i] = new Image();

        images[i].src = preloadImages.arguments[i];

    }

}

preloadImages("TheTwoOfUs.jpg", "html-css-js-logo.png", "ReactTransparentLogo.png", "MERNTransparentLogo.png");