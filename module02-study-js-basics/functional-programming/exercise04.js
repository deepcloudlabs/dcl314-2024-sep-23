const countries = require('../resources/countries.json');
let continents =
    countries.map(country => country.continent)
        .reduce((continents, continent) => {
            continents.add(continent);
            return continents;
        }, new Set())
sorted_continents = [];
for (let continent of continents) {
    sorted_continents.push(continent);
}
sorted_continents.sort()
console.log(sorted_continents)
