const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const display = document.getElementById("main");

openBtn.addEventListener("click", () => {
    display.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    display.classList.remove("active");
});