
const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100;

function shadow(e) {

    const { offsetWidth: width, offsetHeight: heigth } = hero;

    let { offsetX: x, offsetY: y } = e;

    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    };

    const xWalk = Math.round((x / width * walk) - (walk / 2));

    const yWalk = Math.round((y / width * walk) - (walk / 2));

    text.style.textShadow = `
      ${xWalk}px ${yWalk}px 0 #e92efb,
      ${xWalk * -1}px ${yWalk}px 0 #FF2079,
      ${xWalk}px ${yWalk * -1}px 0 #04005E,
      ${yWalk * -1}px ${xWalk}px 0 #FFD900,
      ${yWalk}px ${xWalk * -1}px 0 #440BD4
    `;
};

hero.addEventListener('mousemove', shadow);