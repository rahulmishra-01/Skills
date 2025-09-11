const parentContainer = document.getElementById("container");
const pasteBtn = document.getElementById("pasteBtn");
const textValue = document.getElementById("text");

parentContainer.addEventListener("click", async (e) => {
    if(e.target.className === "copyButton"){
        const text = e.target.previousElementSibling;
        await navigator.clipboard.writeText(text.textContent);
        console.log("Text Copied");
    }
})

pasteBtn.addEventListener("click", async() => {
    try {
        const text = await navigator.clipboard.readText();
        textValue.textContent = text
        console.log(text)
    } catch (error) {
        console.log(`Error ${error}`);
    }
})