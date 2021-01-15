// ## Array Cardio Day 2

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?

// const older = people.some( individual => {
//   const currentYear = (new Date()).getFullYear();
//   return currentYear - individual.year >= 19;
// });

const isOlder = people.some(individual => (new Date()).getFullYear() - individual.year >= 19);
console.log(`Is someone older than 19? ${isOlder}`);

// Array.prototype.every() // is everyone 19 or older?

const allOlder = people.every(individual => (new Date()).getFullYear() - individual.year >= 19);
console.log(`Is everyone older than 19? ${allOlder}`);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

const findById = comments.find(posts => posts.id === 823423);
console.log(`This is the text requested: "${findById.text}"`);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

const findByIndex = comments.findIndex(entries => entries.id === 823423);
console.log(`This is the index requested: "${findByIndex}"`);

comments.splice(findByIndex, 1);
console.table(comments);

//otro método
// const newComments = [
//   ...comments.slice(0, index),
//   ...comments.slice(index + 1)
// ];