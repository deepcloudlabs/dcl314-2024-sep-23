const express = require("express");

const api = express();

const logger = require("morgan");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const {getAllEmployees, getEmployeeById} = require("./mongo-repository-hr");

const createApi = (callback) => {
    api.use(bodyParser.json({limit: "5mb"}));
    api.use(logger("dev"));
    const contract = require("./swagger-hr-api.json");
    api.use("/api-docs",swaggerUi.serve, swaggerUi.setup(contract));
    api.listen(process.env.API_PORT || 8100, callback);
}

const getApi = () => {
     return api;
}

//region Query Methods
api.get("/hr/api/v1/employees", (req,res) => {
   const pageNo = Number(req.query.page || 0);
   const pageSize = Number(req.query.size || 20);
   getAllEmployees(pageNo,pageSize)
   .then((employees) => {
       res.set("Content-Type", "application/json");
       res.status(200).send(employees);
   })
   .catch(error => {
       res.status(400).send({error});
   })
});

api.get("/hr/api/v1/employees/:identity", (req,res) => {
    const identity = req.params.identity;
    getEmployeeById(identity)
        .then((employee) => {
            res.set("Content-Type", "application/json");
            res.status(200).send(employee);
        })
        .catch(error => {
            res.status(400).send({error});
        })
});

//endregion

//region Command Methods

//endregion

exports.getApi = getApi;
exports.createApi = createApi;
