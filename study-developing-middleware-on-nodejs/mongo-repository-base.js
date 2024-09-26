const {connect} = require("mongoose");
const connect_to_mongodb = () => {
    let connectionUrl = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`;
    console.log(connectionUrl);
    return connect(connectionUrl,JSON.parse(process.env.MONGO_OPTIONS));
}

exports.connect_to_mongodb = connect_to_mongodb;
