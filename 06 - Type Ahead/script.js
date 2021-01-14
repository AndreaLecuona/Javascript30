const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
//el endpoint devuelve una lista de objetos:
// [
//   {
//       "city": "New York", 
//       "growth_from_2000_to_2013": "4.8%", 
//       "latitude": 40.7127837, 
//       "longitude": -74.0059413, 
//       "population": "8405837", 
//       "rank": "1", 
//       "state": "New York"
//   }, 
//   {...}
//   ...
// ]


const cities = [];

fetch(endpoint)
    .then(response => response.json())
    .then(data => cities.push(...data));

function findMatches(wordToMatch, cities) {
    return cities.filter(eachPlace => {

        const searchRegex = new RegExp(wordToMatch, 'gi');
        return eachPlace.city.match(searchRegex) || eachPlace.state.match(searchRegex)
    })
};


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}


function displayMatches() {

    const matchArray = findMatches(this.value, cities);


    const html = matchArray.map(place => {

        const regexForHighlight = new RegExp(this.value, 'gi')
        const cityName = place.city.replace(regexForHighlight, `<span class="hl">${this.value}</span>`)
        const stateName = place.state.replace(regexForHighlight, `<span class="hl">${this.value}</span>`)
        return (
            `<li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>`)
    }).join('');

    suggestions.innerHTML = html;

};


const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');


searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches); 