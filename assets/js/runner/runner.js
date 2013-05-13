window.onload = function() {

    printColorMacbethWavelet();

    [].forEach.call( document.querySelectorAll('.color'), function(el) {
        el.addEventListener("click", function(){


            getChart(this.style.backgroundColor, COLOR[this.id.replace("canvas-", "")]);
        }, false);
    });

    document.getElementById("canvas-0").click();
};