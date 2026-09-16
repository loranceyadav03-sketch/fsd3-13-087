import http, { createServer } from "http"

const server = createServer((req,res)=>{

    // req method => GET, POST, PUT, DELETE, PATCH
    console.log('method:', req.method);
    console.log("URL:", req.url);

    // Browser can send only Get request to the server
    //

});


