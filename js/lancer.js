function rollTheDice() {
    setTimeout(function () {
        var randomNumber = Math.floor(Math.random() * 6) + 1;

//source -> class im1 -> image du dès + numéro du 6 + png       
        document.querySelector(".img1").setAttribute("src",
            "dice" + randomNumber + ".png");

    })
}