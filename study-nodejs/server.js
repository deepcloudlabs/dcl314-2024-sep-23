// Chrome -> v8: JS Engine -> C -> libuv -> UV_THREADPOOL_SIZE
const http = require("http");
const countries = require("./resources/countries.json");

const server = http.createServer(async (req, res) => {
    if (req.method === "GET") {
        res.end(JSON.stringify(countries));
    }
});

console.log(`UV_THREADPOOL_SIZE: ${process.env.UV_THREADPOOL_SIZE}`);
console.log(`PID: ${process.pid}`);

const port = 9100;

server.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
})
