let handler = require("./requestHandlers")
function router (req, res){
     //route the request
     let resource = req.url;
    if (resource === "/login") {
        //Call the login handler function
         handler.login(res);
    } else if (resource === "/aboutUs") {
        //Call the about handler function
         handler.aboutUs(res);
    } else if (resource === "/" || resource === "/home") {
        //Call the home handler function
        handler.home(res);
    } else {
        //Error -no such page
        handler.fourOwfour(res);
    }
}
exports.router = router;