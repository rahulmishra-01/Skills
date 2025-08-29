const box = document.getElementById("box");
const widthControlRange = document.getElementById("widthControlRange");

widthControlRange.addEventListener("change",(e) => {
    console.log(e.target.value)
    box.style.width = `${e.target.value}px`
})