const {connect_to_mongodb} = require("./mongo-repository-base");
const {updateEmployee} = require("./mongo-repository-hr");

connect_to_mongodb().then(response => {
    console.log(`Connected to the mongodb running at ${process.env.HOST}:${process.env.PORT}`);
    const kate = {
        _id: "47147426522",
        "salary": 400_000,
        "iban": "TR520006212952522956217321",
        "department": "Sales",
        "fulltime": "false",
        "birthYear": 1990,
        "email": "kate.austen@gmail.com"
    }
    updateEmployee(kate).then(console.log);
})
