window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new webkitSpeechRecognition();
recognition.interimResults = true;
// recognition.lang = 'es-AR';

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);


recognition.addEventListener('result', (e) => {

    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

    p.textContent = transcript;

    if (e.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
    }

    if (transcript.includes("Christmas")) {
        console.log('🎄🎁🎅✨');
    };

});


recognition.addEventListener('end', recognition.start);

recognition.start();