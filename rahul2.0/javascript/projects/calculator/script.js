const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;
        if (value === "C") {
            display.textContent = "0";
        } else if (value === "=") {
            try {
                display.textContent = eval(display.textContent);
            } catch (error) {
                display.textContent = "Error";
            }
        } else {
            display.textContent += value;
        }
    });
});