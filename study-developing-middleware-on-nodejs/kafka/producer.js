const {Producer} = require("node-rdkafka");

const producer = new Producer({
    "bootstrap.servers": `${process.env.KAFKA_HOST}`
});

const createProducer = () => {
    return new Promise((resolve, reject) => {
        producer
            .on("ready", () => {
                resolve(producer);
            })
            .on("delivery-report", () => {

            })
            .on("event.error", (error) => {
                reject(error);
            });
        producer.connect();
    });
};

const WebSocket = require('ws');
const ws = new WebSocket(`${process.env.BINANCE_WS_URL}`);
ws.on("open", async () => {
    console.log("Connected to the binance server!");
    const tradeProducer = await createProducer();
    ws.on("message", (trade) => {
        let parsedTrade = JSON.parse(trade);
        let enrichedTrade = {
            symbol: parsedTrade.s,
            price: Number(parsedTrade.p),
            quantity: Number(parsedTrade.q),
            timestamp: new Date(parsedTrade.T),
            createdAt: new Date()
        }
        enrichedTrade.volume = enrichedTrade.price * enrichedTrade.quantity;
        tradeProducer.produce(`${process.env.KAFKA_TOPIC}`, null, Buffer.from(JSON.stringify(enrichedTrade)), enrichedTrade.symbol);
    });
});
