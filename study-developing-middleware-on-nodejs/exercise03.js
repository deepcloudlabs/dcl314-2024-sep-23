const {connect_to_mongodb} = require("./mongo-repository-base");
const {updateEmployee, groupEmployeesByDepartment} = require("./mongo-repository-hr");

connect_to_mongodb().then(response => {
    console.log(`Connected to the mongodb running at ${process.env.HOST}:${process.env.PORT}`);
    groupEmployeesByDepartment().then(console.log);
})
