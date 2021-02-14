let countdown;

const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

const displayElement = document.querySelector('.display');

function timer(seconds) {

    clearInterval(countdown);
    displayElement.removeChild(displayElement.lastChild);
    timerDisplay.classList.remove('vibrate');

    const now = Date.now();
    const then = now + seconds * 1000;

    displayTimeLeft(seconds);

    displayEndTime(then);

    countdown = setInterval( () => {
        
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        
        if(secondsLeft < 0){
            clearInterval(countdown);
            animateZeros();
            endTime.textContent = "Time's up!";
            displayElement.querySelector('.cancel').innerText = "clear";
            return;
        };

        displayTimeLeft(secondsLeft)
    }, 1000);
};

function animateZeros(){
    timerDisplay.classList.add('vibrate');
}


function displayTimeLeft(seconds) {

    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    timerDisplay.textContent = display; 
    document.title = display;

};


function displayEndTime(timestamp){
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();

    endTime.textContent = `Be back at ${hour}:${minutes < 10 ? '0' : ''}${minutes}`;


    const cancelBtn = document.createElement('button');
    cancelBtn.classList = 'cancel';
    cancelBtn.innerText = 'or CANCEL';
    displayElement.appendChild(cancelBtn);

};

function cancelTimer(e) {

    if(e.target.className === 'cancel'){
        clearInterval(countdown);
        endTime.textContent = '';
        timerDisplay.textContent = '';
        e.target.textContent = '';
        timerDisplay.classList.remove('vibrate');
    }
}

displayElement.addEventListener('click', cancelTimer);


function startTimer() {

    const seconds = parseInt(this.dataset.time);
    timer(seconds);

};

buttons.forEach(button => button.addEventListener('click', startTimer));


document.customForm.addEventListener('submit', function(e){
    e.preventDefault();

    const mins = this.minutes.value;
    timer(mins * 60);

    this.reset();
});
