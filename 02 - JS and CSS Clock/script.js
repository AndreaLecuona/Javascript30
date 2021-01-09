const segundero = document.querySelector('.second-hand');

const minutero = document.querySelector('.min-hand');

const horario = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date()
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    segundero.style.transform = `rotate(${secondsDegrees}deg)`;
    console.log(seconds);


    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minutero.style.transform = `rotate(${minutesDegrees}deg)`;


    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    horario.style.transform = `rotate(${hoursDegrees}deg)`;


    if (secondsDegrees === 90) { segundero.style.transition = 'all 0s'; }
    else { segundero.style.transition = 'all 0.05s'; };

    if (minutesDegrees === 90) { minutero.style.transition = 'all 0s'; }
    else { minutero.style.transition = 'all 0.5s'; };

}

setInterval(setDate, 1000);
