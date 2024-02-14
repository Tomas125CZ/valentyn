document.addEventListener("DOMContentLoaded", function() {
    var container = document.querySelector(".container");
    var karta = document.querySelector(".karta");
    var animationFrameId;

    container.addEventListener("mouseenter", function() {
        console.log("ENTER");
        cancelAnimationFrame(animationFrameId);
        animateElement(karta, -90);
    });

    container.addEventListener("mouseleave", function() {
        console.log("LEAVE");
        cancelAnimationFrame(animationFrameId);
        animateElement(karta, 0);
    });

    function animateElement(element, targetTop) {
        var currentTop = parseInt(window.getComputedStyle(element).top, 10);

        function animate() {
            var difference = targetTop - currentTop;
            var step = difference > 0 ? 1 : -1;

            if (Math.abs(difference) > 1) {
                currentTop += step;
                element.style.top = currentTop + "px";
                animationFrameId = requestAnimationFrame(animate);
            } else {
                element.style.top = targetTop + "px";
            }
        }

        animate();
    }
});