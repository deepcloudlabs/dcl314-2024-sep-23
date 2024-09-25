const {mongoose, Schema, model} = require('mongoose');

const CitySchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    population: {
        type: Number,
        required: true
    }
});

const CountrySchema = new Schema({
    _id: {
        type: String,
        required: true,
        regexp: "^[A-Z]{3}$"
    },
    name: {
        type: String,
        required: true
    },
    continent: {
        type: String,
        required: true,
        enum: ['Africa', 'Antarctica', 'Asia', 'Europe', 'North America', 'Oceania', 'South America']
    },
    gnp: {
        type: Number,
        default: Number.NaN
    },
    governmentForm: {
        type: String,
        required: true
    },
    headOfState: {
        type: String,
        required: true
    },
    indepYear: {
        type: Number,
        required: true
    },
    lifeExpectancy: {
        type: Number,
        required: true
    },
    localName: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    population: {
        type: Number,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    surfaceArea: {
        type: Number,
        required: true
    },
    capital: {
        type: Number,
        required: false
    },
    cities: [CitySchema]
});


const CountryModel = model('countries1', CountrySchema);

const getCountryModel = () => {
    return CountryModel;
}

const updatePopulationByCode = (countryCode,newPopulation) => {
    console.log(countryCode, newPopulation);
    return CountryModel.findOneAndUpdate(
        {_id: countryCode},
        {$set: {population: newPopulation}}
    );
}
exports.getCountryModel = getCountryModel;
exports.updatePopulationByCode = updatePopulationByCode;
