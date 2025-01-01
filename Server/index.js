const http = require("http");

const myserver = http.createServer((req, res) => {
    console.log(req)
    res.end("Hello from fdgg r ")
});

myserver.listen(5000, () => {
    console.log("server started");
});
