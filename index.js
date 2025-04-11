const colors = ["#FFADAD", "#FFD6A5", "#FDFFB6", "#CAFFBF", "#A0C4FF", "#BDB2FF", "#FFC6FF", "#D0F4DE"];
const changeColorBtn = document.getElementById("change-color-btn");
const currentColor = document.getElementById("current-color");

let lastIndex = -1;

changeColorBtn.addEventListener("click", () => {
    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * colors.length);
    } while (randomIndex === lastIndex);

    document.body.style.backgroundColor = colors[randomIndex];
    currentColor.textContent = `Current Colour: ${colors[randomIndex]}`;
});