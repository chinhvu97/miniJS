const close_btn = document.querySelector('.close-btn');
const sidebar_aside = document.querySelector('.sidebar');
const toggle_btn = document.querySelector('.sidebar-toggle');

toggle_btn.addEventListener('click', (e) => {
    sidebar_aside.classList.toggle('show-sidebar');
})
close_btn.addEventListener('click', () => {
    sidebar_aside.classList.remove('show-sidebar');
})