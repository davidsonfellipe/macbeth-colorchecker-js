window.onload = function() {

    var el = document.getElementById("btn-runner");

    el.addEventListener("click", function(){

        for(var i = 0; i < 24; i++) {
            var canvas = document.getElementById('canvas' + i);

            var colorxyz = xyz_from_wavelength(COLOR[i]);
            var colorRGB = corCIEXYZtosRGB(colorxyz);

            // debugger;
            canvas.style.backgroundColor = "rgba(" + 
                                            Math.floor(colorRGB.R) + "," +
                                            Math.floor(colorRGB.G) + "," +
                                            Math.floor(colorRGB.B) + ", 1)";
        }
    }, false);
};