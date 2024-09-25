const {getCountryModel} = require("./world-domain");

const CountryModel = getCountryModel();
const getAllCountriesByContinent = (continent, pageNo = 0, pageSize = 10) => {
    const skip = pageNo * pageSize;
    const limit = pageSize;
    return CountryModel.find({continent}, {"cities": false}, {skip, limit});
}

exports.getAllCountriesByContinent = getAllCountriesByContinent;
