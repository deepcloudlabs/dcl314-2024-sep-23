const http = require('http');
const server = http.createServer((req, res) => {

});
let sessions = [];
const io = require("socket.io")(server, {
    "cors": "*",
    "methods": ["GET", "POST", "PUT", "DELETE", "PATCH"],
});
io.on("connect", session => {
    console.log(`New connection is created for the session[${session.id}]`);
    sessions.push(session);
    io.on("disconnect", () => {
        console.log(`Connection is closed from the session[${session.id}]`);
        sessions = sessions.filter(_session => _session.id !== session.id);
    })
})
server.listen(5500,()=>{
    console.log("Application is running at port 5500");
});

setInterval(()=>{
    console.log("Sending the message to the topic : 'events'...")
    io.emit("events", {message: "Hello Mars!", timestamp: new Date()});
}, 5_000)

const WebSocket = require('ws');
const ws = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");
ws.on("open", async () => {
   console.log("Connected to the binance server!");
   ws.on("message", (trade) => {
       let parsedTrade = JSON.parse(trade);
       let enrichedTrade = {
           symbol: parsedTrade.s,
           price: Number(parsedTrade.p),
           quantity: Number(parsedTrade.q),
           timestamp: new Date(parsedTrade.T)
       }
       enrichedTrade.volume = enrichedTrade.price * enrichedTrade.quantity;
       if (enrichedTrade.volume > 50_000)
          io.emit("high-trades", enrichedTrade );
       else
          io.emit("trades", enrichedTrade );
   });
});
