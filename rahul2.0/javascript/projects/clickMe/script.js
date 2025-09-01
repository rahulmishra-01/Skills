const box = document.getElementById("box");
const button = document.querySelector("button");

button.addEventListener("click",() => {
    console.log(typeof box.textContent)
    // box.textContent = parseInt(box.textContent) + 1
    // box.textContent = +box.textContent + 1
    box.textContent = Number(box.textContent) + 1
})