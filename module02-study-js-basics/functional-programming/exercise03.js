const countries = require('../resources/countries.json');
const totalPopulationOfAsianCountries =
    countries.filter(country => country.continent === 'Asia')
        .map(country => country.population)
        .reduce((acc, population) => acc + population, 0)
console.log(totalPopulationOfAsianCountries)
