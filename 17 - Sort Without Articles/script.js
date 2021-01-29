const movies = ["The King's Speech", "Pulp fiction", "The Devil Wears Prada", "Back to the future", "Star Wars", "The girl with the dragon tatoo", "Memento", "Singin' in the Rain", "A Beautiful Mind", "Catch Me If You Can", "An American in Paris", "Wall-e", "Léon: The Professional", "Inception", "Whiplash"];
const container = document.querySelector('#movies');


function removeArticles(movieName) {
  return movieName.replace(/\b(?:The |An |A )\b/gi, '').trim();
};

const sortedMovies = movies.sort((a, b) => removeArticles(a) > removeArticles(b) ? 1 : -1);

container.innerHTML = sortedMovies.map( movie => `<li>${ movie }</li>`).join('');
