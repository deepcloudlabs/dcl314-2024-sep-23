const io = require("socket.io-client")

const ws_client = io("ws://localhost:5500");
ws_client.on("connect", (socket) => {
    console.log("connected to the server...");
    ws_client.on("events", (event) => {
        console.log(`received new message: ${JSON.stringify(event)} at ${JSON.stringify(new Date())}`);
    })

    ws_client.on("high-trades", (trade) => {
        console.log(`received new message: ${JSON.stringify(trade)}`);
    })
})
