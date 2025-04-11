const colors = ["#FFADAD", "#FFD6A5", "#FDFFB6", "#CAFFBF", "#A0C4FF", "#BDB2FF", "#FFC6FF", "#D0F4DE"];
const changeColorBtn = document.getElementById("change-color-btn");
const currentColor = document.getElementById("current-color");

changeColorBtn.addEventListener("click", () => {
    let randomColor = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomColor];
    currentColor.textContent = `Current Colour: ${colors[randomColor]}`;
});