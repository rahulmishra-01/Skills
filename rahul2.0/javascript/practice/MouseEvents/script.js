const offsetXvalue = document.getElementById("offsetXvalue");
const offsetYvalue = document.getElementById("offsetYvalue");
const box = document.getElementById("box");


document.addEventListener("mousemove",(e) => {
    // offsetXvalue.textContent = e.offsetX;
    // offsetYvalue.textContent = e.offsetY;
    box.style.left = e.offsetX + "px";
    box.style.top = e.offsetY + "px";
})
