const title = document.querySelector('h2');
const subtitle = document.querySelector('p');

const pressed = [];

secretCode = 'alohomora';


window.addEventListener('keyup', (e) => {
    console.log(e.key);
    pressed.push(e.key);


    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

    if (pressed.join('').includes(secretCode)) {
        console.log('DING DING DING!');
        title.textContent = 'Very good! 10 points to Gryffindor';
        subtitle.textContent = 'Now, try it again';
        cornify_add();
    }
    console.log(pressed);
});