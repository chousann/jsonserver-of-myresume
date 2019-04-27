var jsonServer = require('json-server');

//var db = require('./generate').run();

var server = jsonServer.create();        // Express server 
server.use(jsonServer.defaults);         // Default middlewares (logger, public, cors) 
//server.use(jsonServer.router(db));       // Express router 
// server.use(jsonServer.router('db.json'));       // Express router 
server.use(jsonServer.router('info.json'));       // Express router 
var port = process.env.PORT || 3000;

server.listen(port);