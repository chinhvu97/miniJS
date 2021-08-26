// using selectors inside the element
// traversing the dom

questions = document.querySelectorAll(".question");
questions.forEach((question) => {
    const btn = question.querySelector('.question-btn');
    btn.addEventListener('click', () => {

        questions.forEach((e) => {
            if (e !== question) {
                e.classList.remove('show-text');
            }
        });

        question.classList.toggle('show-text');
    })
})



/*
questions = document.querySelectorAll('.question');
btns = document.querySelectorAll('.question-btn');
btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const question_div = e.currentTarget.parentElement.parentElement;
        if (question_div.classList.contains('show-text')) {
            question_div.classList.remove('show-text');
        } else {
            questions.forEach((question) => {
                question.classList.remove('show-text');
            })
            question_div.classList.add('show-text');
        }
    })
})*/
