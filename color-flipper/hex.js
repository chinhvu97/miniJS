const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color_span = document.querySelector('.color');
btn.addEventListener("click", () => {
    let color = getHexColor();
    document.body.style.background = color;
    color_span.textContent = color;
    color_span.style.color = color;
});

function getRandomCha() {
    let index = Math.floor(Math.random() * hex.length);
    return hex[index];
}

function getHexColor() {
    let color = "#";
    while (color.length <= 6) {
        color += getRandomCha();
    }
    return color;
}