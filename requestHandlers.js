function login (res){
    res.write("This is the login page")
    res.end();
}
let handler = require("./requestHandlers")
function home (res){
    res.write("This is the Home page")
    res.end();
}
function aboutUs (res){
    res.write("This is the aboutUs page")
    res.end();
}
function fourOwfour (res){
    res.write("Page not found")
    res.end();
}
exports.login = login;
exports.home= home;
exports.aboutUs = aboutUs;
exports.fourOwfour = fourOwfour;