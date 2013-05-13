window.onload = function() {

    [].forEach.call( document.querySelectorAll('.color'), function(el) {
        el.addEventListener("click", function(){
            getChart(this.style.backgroundColor, COLOR[this.id.replace("canvas-", "")]);
        }, false);
    });

    document.getElementById('illuminant').addEventListener("change", function(){
        printColorMacbethWavelet (this.value);
        document.getElementById("canvas-0").click();
    }, false);

    printColorMacbethWavelet (document.getElementById('illuminant').value);
    document.getElementById("canvas-0").click();
};