

function xx(colorRGBA, colorMacbethWavelet) {

    var defaults = {
        //Boolean - If we show the scale above the chart data           
        scaleOverlay : false,
        
        //Boolean - If we want to override with a hard coded scale
        scaleOverride : false,
        
        //** Required if scaleOverride is true **
        //Number - The number of steps in a hard coded scale
        scaleSteps : null,
        //Number - The value jump in the hard coded scale
        scaleStepWidth : null,
        //Number - The scale starting value
        scaleStartValue : null,

        //String - Colour of the scale line 
        scaleLineColor : "rgba(0,0,0,.1)",
        
        //Number - Pixel width of the scale line    
        scaleLineWidth : 1,

        //Boolean - Whether to show labels on the scale 
        scaleShowLabels : false,
        
        //Interpolated JS string - can access value
        scaleLabel : "<%=value%>",
        
        //String - Scale label font declaration for the scale label
        scaleFontFamily : "'Arial'",
        
        //Number - Scale label font size in pixels  
        scaleFontSize : 1,
        
        //String - Scale label font weight style    
        scaleFontStyle : "normal",
        
        //String - Scale label font colour  
        scaleFontColor : "#666",    
        
        ///Boolean - Whether grid lines are shown across the chart
        scaleShowGridLines : true,
        
        //String - Colour of the grid lines
        scaleGridLineColor : "rgba(0,0,0,.05)",
        
        //Number - Width of the grid lines
        scaleGridLineWidth : 1, 
        
        //Boolean - Whether the line is curved between points
        bezierCurve : true,
        
        //Boolean - Whether to show a dot for each point
        pointDot : true,
        
        //Number - Radius of each point dot in pixels
        pointDotRadius : 2,
        
        //Number - Pixel width of point dot stroke
        pointDotStrokeWidth : 1,
        
        //Boolean - Whether to show a stroke for datasets
        datasetStroke : true,
        
        //Number - Pixel width of dataset stroke
        datasetStrokeWidth : 2,
        
        //Boolean - Whether to fill the dataset with a colour
        datasetFill : true,
        
        //Boolean - Whether to animate the chart
        animation : true,

        //Number - Number of animation steps
        animationSteps : 60,
        
        //String - Animation easing effect
        animationEasing : "easeOutQuart",

        //Function - Fires when the animation is complete
        onAnimationComplete : null
        
    };

    var lineChartData = {
        labels : [380,385,390,395,400,405,410,415,420,425,430,435,440,445,450,455,460,465,470,475,480,485,490,495,500,505,510,515,520,525,530,535,540,545,550,555,560,565,570,575,580,585,590,595,600,605,610,615,620,625,630,635,640,645,650,655,660,665,670,675,680,685,690,695,700,705,710,715,720,725,730,735,740,745,750,755,760,765,770,775,780],
        datasets : [
            {
                fillColor : colorRGBA,
                strokeColor : "rgba(220,220,220,1)",
                pointColor : "rgba(220,220,220,1)",
                pointStrokeColor : "#fff",
                data : colorMacbethWavelet
            }
        ]
    }

    var myLine = new Chart(document.getElementById("canvas").getContext("2d")).Line(lineChartData, defaults);
}

window.onload = function() {

    var el = document.getElementById("btn-runner");

    // el.addEventListener("click", function(){

        console.log(22);
        var illuminant = document.getElementById("illuminant").value;

        for(var i = 0; i < 24; i++) {
            var canvas = document.getElementById('canvas' + i);

            var colorxyz = xyz_from_wavelength(COLOR[i], illuminant);
            var colorRGB = corCIEXYZtosRGB(colorxyz);
            var colorRGBA= "rgba(" +
                            Math.floor(colorRGB.R) + "," +
                            Math.floor(colorRGB.G) + "," +
                            Math.floor(colorRGB.B) + ", 1)";

            // debugger;
            canvas.style.backgroundColor = colorRGBA;
        }

        xx(colorRGBA, COLOR[2]);
    // }, false);
};