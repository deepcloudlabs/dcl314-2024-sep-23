const {connect} = require("mongoose");
console.log(JSON.stringify(process.env))
const connect_to_mongodb = () => {
    let connectionUrl = `mongodb://${process.env.HOST}:${process.env.PORT}/${process.env.DATABASE}`;
    console.log(connectionUrl);
    return connect(connectionUrl,JSON.parse(process.env.OPTIONS));
}

exports.connect_to_mongodb = connect_to_mongodb;
