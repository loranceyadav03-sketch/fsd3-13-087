import http from 'http'
 const server =http.createServer((req, res)=>{
    res.write("<h1>hello clint</h1>");
    res.end();

 });
 Server.liston(4444,()=> console.log("server is running at 4444..."));

 