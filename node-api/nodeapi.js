const http =require("http");
const { json } = require("stream/consumers");


http.createServer((req ,resp)=>{
    resp.writeHead(200,{"content-type":"application/json"})
   resp.write(JSON.stringify({name:"anjum",contact:"999999",email:"anjumshah402@gmail.com"}))
resp.end();

}).listen(2000);