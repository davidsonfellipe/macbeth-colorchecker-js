window.onload = function() {

    var el = document.getElementById("btn-runner");

    el.addEventListener("click", function(){

        for(var i = 0; i < 24; i++) {
            var canvas1 = new Canvas(document.getElementById('canvas' + i));

            var colorxyz = xyz_from_wavelength(COLOR[i]);

            canvas1.draw(corCIEXYZtosRGB(colorxyz));
        }
    }, false);
};