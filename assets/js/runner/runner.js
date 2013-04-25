window.onload = function() {

    var el = document.getElementById("btn-runner");

    el.addEventListener("click", function(){

        console.log(22);
        var illuminant = document.getElementById("illuminant").value;

        for(var i = 0; i < 24; i++) {
            var canvas = document.getElementById('canvas' + i);

            var colorxyz = xyz_from_wavelength(COLOR[i], illuminant);
            var colorRGB = corCIEXYZtosRGB(colorxyz);

            // debugger;
            canvas.style.backgroundColor = "rgba(" +
                                            Math.floor(colorRGB.R) + "," +
                                            Math.floor(colorRGB.G) + "," +
                                            Math.floor(colorRGB.B) + ", 1)";
        }
    }, false);
};