const express = require("express");

const api = express();

const logger = require("morgan");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");

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

exports.getApi = getApi;
exports.createApi = createApi;
