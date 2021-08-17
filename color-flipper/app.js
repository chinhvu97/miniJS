const colors = ["green", "red","white", "yellow", "blue", "grey", "purple"];
const btn = document.getElementById('btn');
const color_span = document.querySelector('.color');
btn.addEventListener("click", () => {
    let color = getRandomColor();
    document.body.style.background = color;
    color_span.textContent = color;
    color_span.style.color = color;
});

function getRandomColor() {
    let index = Math.floor(Math.random() * colors.length);
    return colors[index];
}
