const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;
const instructions = document.querySelector('.instructions');
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', `display: block; top:${(e.pageY) - 160}px; left:${(e.pageX) - 360}px;`);
});


function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
};


function randomHole(holes) {

    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];

    if (hole === lastHole) {
        console.log("same mole! Let's bring another one");
        return randomHole(holes);
    }

    lastHole = hole;

    return hole;
};


function peep() {
    const time = randomTime(400, 1000);
    const hole = randomHole(holes);

    hole.classList.add('up');

    setTimeout(() => {

        hole.classList.remove('up');

        if (!timeUp) peep();

    }, time);
};


function startGame() {

    instructions.classList.add('transparent');
    setTimeout(() => instructions.classList.contains('transparent') && instructions.classList.add('dissapear'), 150);

    setTimeout(() => {

        score = 0;
        scoreBoard.textContent = 0;
        timeUp = false;

        peep();

        setTimeout(() => {
            timeUp = true

            instructions.classList.remove('transparent');
            setTimeout(() => !instructions.classList.contains('transparent') && instructions.classList.remove('dissapear'), 150);
            instructions.querySelector('h1').innerText = 'Great job';
            instructions.querySelector('p').innerText = `Your final score: ${score} ${score === 1 ? 'point' : 'points'}`;
            instructions.querySelector('button').innerText = 'Play again?';
        }, 10000);

    }, 2000);

};


function bonk(e) {

    if (!e.isTrusted) return;

    score++;

    this.classList.remove('up');

    scoreBoard.textContent = score;
};

moles.forEach(mole => mole.addEventListener('click', bonk));