document.addEventListener("DOMContentLoaded", function() {
    const Scroll = document.querySelector(".content-a");
    const left = document.querySelector(".scroll-left");
    const right = document.querySelector(".scroll-right");

    const ScrollAmount = 300;

    left.addEventListener("click", () => {
        Scroll.scrollLeft -= ScrollAmount;
    });

    right.addEventListener("click", () => {
        Scroll.scrollLeft += ScrollAmount;
    });
});