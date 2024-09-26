const WebSocket = require('ws');
const amqp = require('amqplib');

const binanceWssUrl = `${process.env.BINANCE_WS_URL}`;
const ws = new WebSocket(binanceWssUrl);

amqp.connect(`amqp://${process.env.RABBITMQ_USER}:${process.env.RABBITMQ_PASSWORD}@${process.env.RABBITMQ_HOST}:${process.env.RABBITMQ_PORT}`)
    .then((connection) => {
        console.log("Connected to rabbitmq.")
        connection.createChannel().then((channel) => {
            console.log("Channel is created.")
            ws.on('message', (frame) => {
                let trade = JSON.parse(frame);
                trade.volume = Number(trade.p) * Number(trade.q);
                trade.timestamp = new Date(trade.T);
                trade.received = new Date();
                console.log(JSON.stringify(trade))
                channel.publish(`${process.env.RABBITMQ_EXCHANGE}`, '', Buffer.from(JSON.stringify(trade)));
            });
        }).catch(console.error);
    });
