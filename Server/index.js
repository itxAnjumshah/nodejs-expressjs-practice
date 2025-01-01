// const http = require("http");

// const myserver = http.createServer((req, res) => {
//     console.log(req)
//     res.end("Hello from fdgg r ")
// });

// myserver.listen(5000, () => {
//     console.log("server started");
// });

// this  code  is techzeen
const http = require("http");

http
  .createServer((request, respose) => {
    respose.writeHead(200,{'content-type':'text/html'})

    respose.write("<h1>hello form t jhhhe  server  which is  created by  techzeenb</h1> ");
    respose.end();
  }).listen(8000);
  
// agr  ap na html use  karni ha to ya  lekhna  lazmi ha //respose.writeHead(200,{'content-type':'text/html'})//fr ya likho  respose.write("<h1>hello form t jhhhe  server  which is  created by  techzeenb</h1> ");
