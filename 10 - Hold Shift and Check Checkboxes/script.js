const boxes = document.querySelectorAll('.inbox input[type=checkbox]');
console.log(boxes);


let lastChecked;

function handleCheck(e) {

    let inBetween = false;

    if (e.shiftKey && this.checked) {

        boxes.forEach(box => {

            if (box === this || box === lastChecked) {
                inBetween = !inBetween;
            }

            if (inBetween) {
                box.checked = true;
            }

        });

    };

    lastChecked = this;
}


boxes.forEach(box => {
    box.addEventListener('click', handleCheck);
});


//EXTRA
const unselectAll = document.querySelector('.btn');

unselectAll.addEventListener('click', () => {
    boxes.forEach(box => box.checked = false)
});