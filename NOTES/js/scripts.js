const boxes = document.querySelectorAll(".box");
const xmark = document.querySelector(".box .more-options .fa-xmark");
const copy = document.querySelector(".box .more-options .fa-copy");

boxes.forEach(box => {
    const xmark = box.querySelector(".more-options .fa-xmark");
    const copy = box.querySelector(".more-options .fa-copy");

    box.addEventListener("mouseover", () => {
        xmark.style.opacity = "0.5";
        copy.style.opacity = "0.5";
    });

    box.addEventListener("mouseout", () => {
        xmark.style.opacity = "0";
        copy.style.opacity = "0";
    });

    xmark.addEventListener("mouseover", (e) => {
        e.stopPropagation();
        xmark.style.opacity = "1";
        copy.style.opacity = "0.5";
    });

    copy.addEventListener("mouseover", (e) => {
        e.stopPropagation();
        copy.style.opacity = "1";
        xmark.style.opacity = "0.5";
    });

    xmark.addEventListener("mouseout", (e) => {
        e.stopPropagation();
        xmark.style.opacity = "0.5";
    });

    copy.addEventListener("mouseout", (e) => {
        e.stopPropagation();
        copy.style.opacity = "0.5";
    });
});