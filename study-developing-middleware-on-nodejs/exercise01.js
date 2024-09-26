const {connect_to_mongodb} = require("./mongo-repository-base");
const {saveEmployee} = require("./mongo-repository-hr");

connect_to_mongodb().then( response => {
    console.log(`Connected to the mongodb running at ${process.env.HOST}:${process.env.PORT}`);
    const jack = {
        _id: "93698012592",
        "fullname": "james",
        "salary": 300_000,
        "iban": "TR740006287686283876385934",
        "department": "IT",
        "fulltime": "true",
        "birthYear": 1986,
        "email": "james.sawyer@mail.com"
    }
    saveEmployee(jack).then( console.log );
})
