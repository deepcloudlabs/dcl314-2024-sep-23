// Chrome -> v8: JS Engine -> C -> libuv -> UV_THREADPOOL_SIZE
const http = require("http");
const countries = require("./resources/countries.json");

const server = http.createServer(async (req, res) => {
    if (req.method === "GET") {
        res.end(JSON.stringify(countries));
    }
});

const port = 9100;

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})
