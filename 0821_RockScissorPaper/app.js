let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const rock_div = document.querySelector('.r');
const paper_div = document.querySelector('.p');
const scissors_div = document.querySelector('.s');

const result = document.querySelector('.result > p');

function compMove() {
    let moves = ['r', 'p', 's'];
    let random = Math.floor(Math.random() * 3);
    return moves[random];
}

function convertToWord(letter) {
    if (letter === 'r') return 'Rock';
    if (letter === 'p') return 'Paper';
    return 'Scissors';
}

function setTimeOut() {

}

function win(userChoice, compChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();

    result.innerHTML = `${convertToWord(userChoice) + smallUserWord} beats ${convertToWord(compChoice) + smallCompWord}, You won!`;
    userScore++;
    userScore_span.innerHTML = userScore;
    const userChoice_div = document.querySelector(`.${userChoice}`);
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 400);
}

function lose(userChoice, compChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();

    result.innerHTML = `${convertToWord(userChoice) + smallUserWord} loses ${convertToWord(compChoice) + smallCompWord}, You lost :poop !`;
    compScore++;
    compScore_span.innerHTML = compScore;
    const userChoice_div = document.querySelector(`.${userChoice}`);
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 400);
}

function draw(userChoice, compChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();

    result.innerHTML = `${convertToWord(userChoice) + smallUserWord} draws ${convertToWord(compChoice) + smallCompWord}, Its a draw :|`;
    const userChoice_div = document.querySelector(`.${userChoice}`);
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 400);
}

function game(userChoice, compChoice) {
    compChoice = compMove();
    switch (userChoice + compChoice) {
        case 'sp':
        case 'pr':
        case 'rs':
            win(userChoice, compChoice);
            break;
        case 'sr':
        case 'rp':
        case 'ps':
            lose(userChoice, compChoice);
            break;
        default:
            draw(userChoice, compChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click',() => game('r'));
    paper_div.addEventListener('click',() => game('p'));
    scissors_div.addEventListener('click',() => game('s'));
}

main();

