let http = require("http");
let start = function () {
    let server = http.createServer((req, res) => {
        console.log("Received a request");
        console.log(req);
        console.log(res);
        res.writeHead(200, {});
        res.write("Hello World");
        res.end();
    });
    //process.env.PORT 
    console.log("Served has started");
    server.listen(8000);
}
exports.start = start;