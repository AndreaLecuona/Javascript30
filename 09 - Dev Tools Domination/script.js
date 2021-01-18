const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}


//CSS Debugger
// Pestaña Elements >> buscar en el DOM >> click derecho sobre el elemento a debuguear >> break on.. >> attribute modifications


// Regular
console.log('Hey')


// Interpolated

//Forma inusual:
console.log('Hey, este mensaje es %s simple', 'demasiado');

//ES6:
var adjetivo = "excesivamente";
console.log(`Hey, este mensaje es ${adjetivo} simple`);


// Styled
console.log('%c Soy un mensaje con estilo', 'font-size:20px; background: pink; color:brown; text-shadow:3px 2px 0 #fff');


// warning!
console.warn('Carefull!');


// Error :|
console.error('Oh nooo!');


// Info
console.info('The oldest “your mom” joke was discovered on a 3,500 year old Babylonian tablet.');


// Testing
console.assert('2' === '5', 'Wrong number');

const p = document.querySelector('p');
console.assert(p.classList.contains('something'), 'This paragraph does not contain this class');


// Clearing
// console.clear();


// Viewing DOM Elements
console.log(p);
console.dir(p);


// Grouping together
dogs.forEach(dog => {

    console.group(`${dog.name}`);
    // console.groupCollapsed(`${dog.name}`);

    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`That is ${dog.age * 7} human years old`);

    console.groupEnd(`${dog.name}`);
});


// Counting
console.count('limón');
console.count('limón');
console.count('limón');
console.count('chocolate');
console.count('limón');
console.count('chocolate');
console.count('chocolate');
console.count('limón');
console.count('chocolate');
console.count('limón');
console.count('limón');
console.count('chocolate');


// Timing
console.time('fetching data');

fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {

        console.timeEnd('fetching data');
        console.log(data);

    });


// Tables
console.table(dogs);
//it works assuming that the arrays has the same properties in each internal object