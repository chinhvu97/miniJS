let counter = 0;
const btns = document.querySelectorAll('.btn');
const value_span = document.getElementById('value');
btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.classList.contains('decrease')) {
            counter--;
        } else if (btn.classList.contains('increase')) {
            counter++;
        } else counter = 0;
        value_span.textContent = counter;
        if (counter > 0) {
            value_span.style.color = "#33B679";
        } else if (counter < 0) {
            value_span.style.color = "#E67C73";
        } else value_span.style.color = "#222";
    })
})