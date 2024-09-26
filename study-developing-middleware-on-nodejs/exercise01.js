const {connect_to_mongodb} = require("./mongo-repository-base");
const {saveEmployee} = require("./mongo-repository-hr");

connect_to_mongodb().then( response => {
    console.log(`Connected to the mongodb running at ${process.env.HOST}:${process.env.PORT}`);
    const jack = {
        _id: "47147426522",
        "fullname": "kate austen",
        "salary": 200_000,
        "iban": "TR960006222387826941815331",
        "department": "IT",
        "fulltime": "true",
        "birthYear": 1986,
        "email": "kate.austen@mail.com"
    }
    saveEmployee(jack).then( console.log );
})
