(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // hint: area = pi * radius^2
            let area = Math.PI * Math.pow(circle.radius, 2);
            return area;
        },

        logInfo: function (doRounding) {
            // If doRounding is true, round the result to the nearest integer.
            if (doRounding) {
                Math.round(doRounding);
            }
            // Otherwise, output the complete value
            else {
                console.log(doRounding)
            }
            console.log("Area of a circle with radius: " + this.radius + ", is: ");
        }
    };
    // console.log('Should log area: ' + circle.getArea()); //<<< test the area function

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();