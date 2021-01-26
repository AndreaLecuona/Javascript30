const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');

const items = JSON.parse(localStorage.getItem('items')) || [];


function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text,
        done: false
    }
    items.push(item);
    populateList(items, itemsList);

    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
};


function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, index) => {
        return `
    <li>
      <input type="checkbox" data-index=${index} id="item${index}" ${plate.done ? 'checked' : ''}/>
      <label for="item${index}">${plate.text}</label>
    </li>
  `
    }).join('');
};


function toggleDone(e) {
    // console.log(e.target);
    if (!e.target.matches('input')) { return }

    const element = e.target;
    const elementIndex = element.dataset.index;
    items[elementIndex].done = !items[elementIndex].done
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
};


addItems.addEventListener('submit', addItem);

itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);



//EXTRAS:
const clearAllBtn = addItems.querySelector('[value="Clear all"]');
const checkAllBtn = addItems.querySelector('[value="Check all"]');
const uncheckAllBtn = addItems.querySelector('[value="Uncheck all"]');

function clearAll() {
    console.log(itemsList);
    while (itemsList.firstElementChild) {
        itemsList.firstElementChild.remove();
    }
    localStorage.clear();
};

function checkAll() {
    items.forEach(item => {
        item.done = true
    });
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
};

function uncheckAll() {
    items.forEach(item => {
        item.done = false
    });
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
};

clearAllBtn.addEventListener('click', clearAll);
checkAllBtn.addEventListener('click', checkAll);
uncheckAllBtn.addEventListener('click', uncheckAll);
