const countries = require('../resources/countries.json');
let continentCountryCounts =
    countries.map(country => country.continent)
        .reduce((continentCountryCounts, continent) => {
            continentCountryCounts[continent] = continentCountryCounts[continent] ? continentCountryCounts[continent]+1 : 1;
            return continentCountryCounts;
        }, {})
for (let continent in continentCountryCounts) {
    console.log(`${continent}: ${continentCountryCounts[continent]}`);
}
