let http = require("http");
let router = require ("./router")
//let url = require ("url");

let start = function () {
    let server = http.createServer((req, res) => {
       //route the request
       router.router(req, res);
        // console.log("Received a request");
        // res.writeHead(200, {});
        // res.write("Hello World");
        // res.end();
    });
    //process.env.PORT 
    console.log("Served has started");
    server.listen(5500);
}
exports.start = start;