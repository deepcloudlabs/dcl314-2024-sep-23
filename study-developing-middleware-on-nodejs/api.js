const express = require("express");

const api = express();

const logger = require("morgan");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const {
    getAllEmployees,
    getEmployeeById,
    createEmployee,
    updateEmployee,
    removeEmployee
} = require("./mongo-repository-hr");

let sessions = [];

const createApi = (callback) => {
    api.use(bodyParser.json({limit: "5mb"}));
    api.use(logger("dev"));
//region CORS FILTER
    api.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "HEAD,OPTIONS,POST,PUT,PATCH,DELETE,GET");
        res.header("Access-Control-Allow-Headers", "Origin,Content-Type,Accept");
        next();
    });
//endregion
    const contract = require("./swagger-hr-api.json");
    api.use("/api-docs", swaggerUi.serve, swaggerUi.setup(contract));

//region Query Methods: IDEMPOTENT -> CACHEABLE
//region GET /hr/api/v1/employees
    api.get("/hr/api/v1/employees", (req, res) => {
        const pageNo = Number(req.query.page || 0);
        const pageSize = Number(req.query.size || 20);
        getAllEmployees(pageNo, pageSize)
            .then((employees) => {
                res.set("Content-Type", "application/json");
                res.status(200).send(employees);
            })
            .catch(error => {
                res.status(400).send({error});
            })
    });
//endregion

//region GET /hr/api/v1/employees/:identity
    api.get("/hr/api/v1/employees/:identity", (req, res) => {
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
//endregion

//region Command Methods
//region POST /hr/api/v1/employees
    api.post("/hr/api/v1/employees", (req, res) => {
        const employee = req.body;
        createEmployee(employee).then(
            insertedEmployee => {
                res.set("Content-Type", "application/json");
                res.status(200).send(insertedEmployee);
                sessions.forEach( session => {
                    io.emit("hr-events",{
                        eventType: "EMPLOYEE_HIRED",
                        identityNo: insertedEmployee._id
                    })
                })
            }
        ).catch(error => {
            res.set("Content-Type", "application/json");
            res.status(400).send({error});
        })
    });
//endregion
//region PUT /hr/api/v1/employees/:identity
    api.put("/hr/api/v1/employees/:identity", (req, res) => {
        const employee = req.body;
        updateEmployee(employee).then(
            updatedEmployee => {
                res.set("Content-Type", "application/json");
                res.status(200).send(updatedEmployee);
                sessions.forEach( session => {
                    io.emit("hr-events",{
                        eventType: "EMPLOYEE_UPDATED",
                        identityNo: updatedEmployee._id
                    })
                })
            }
        ).catch(error => {
            res.set("Content-Type", "application/json");
            res.status(400).send({error});
        })
    });
//endregion
//region DELETE /hr/api/v1/employees/:identity
    api.delete("/hr/api/v1/employees/:identity", (req, res) => {
        const identity = req.params.identity;
        removeEmployee(identity).then(
            removedEmployee => {
                res.set("Content-Type", "application/json");
                res.status(200).send(removedEmployee);
                sessions.forEach( session => {
                    io.emit("hr-events",{
                        eventType: "EMPLOYEE_FIRED",
                        identityNo: removedEmployee._id
                    })
                });
            }
        ).catch(error => {
            res.set("Content-Type", "application/json");
            res.status(400).send({error});
        })
    });
//endregion
//endregion

    const server = api.listen(process.env.API_PORT || 8100, callback);
    const io = require("socket.io")(server,{
        "cors": "*",
        "methods": ["GET", "POST", "PUT", "DELETE", "PATCH"],
    });
    io.on("connect", session => {
        console.log(`New connection is created for the session[${session.id}]`);
        sessions.push(session);
        io.on("disconnect", () => {
            console.log(`Connection is closed from the session[${session.id}]`);
            sessions = sessions.filter( _session => _session.id !== session.id);
        })
    })
}

const getApi = () => {
    return api;
}

exports.getApi = getApi;
exports.createApi = createApi;
