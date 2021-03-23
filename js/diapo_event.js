document.addEventListener("DOMContentLoaded", () => {
    console.log(200);
    let slide;
    slide = document.querySelector(".slide_show");
    slide.addEventListener("click", e => {
        e.preventDefault;
        slide.classList.toggle("slide_stop");
    });
});