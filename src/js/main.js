
document.addEventListener("DOMContentLoaded",startJs);
function startJs(){
  //whrite your code here
    window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

    window.addEventListener("scroll", brandBorderAnimate);
    var brandBorder = document.getElementById("border");
    var pathLength = 1666;
    var countDash = 1666;
    var dashId;
    var percentageTimeDraw = (pathLength / (500 / 16));

    function drawBorder() {
        if (countDash <= 0) {
            brandBorder.style.strokeDashoffset = 0;
            cancelAnimationFrame(dashId);
        } else {
            countDash -= percentageTimeDraw;
            brandBorder.style.strokeDashoffset = countDash;
            dashId = requestAnimationFrame(drawBorder);
        }
    }

    setTimeout(function () {
        dashId = requestAnimationFrame(drawBorder);
    }, 1000);

    function brandBorderAnimate() {

        var scrollValue = document.body.scrollTop || document.documentElement.scrollTop;
        // Get percentage scrolling
        var percentageComplete = (scrollValue / (document.body.offsetHeight - window.innerHeight)) * 100;
        var value = percentageComplete * 84;

        if (value >= pathLength) {
            brandBorder.style.strokeDashoffset = pathLength;
        } else {
            brandBorder.style.strokeDashoffset = value;
        }

    }
}
