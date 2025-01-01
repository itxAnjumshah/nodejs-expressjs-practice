const  http =require("http")

http.createServer((req,resp)=>{
    resp.writeHead(200,{"content-type":"application/json"})
    resp.write(JSON.stringify({name:"anjum shah",email:"koi nai"}))
    resp.end();

}).listen(1000)