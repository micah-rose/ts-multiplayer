"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var http_1 = __importDefault(require("http"));
var socket_io_1 = require("socket.io");
var port = 3000;
var App = /** @class */ (function () {
    function App(port) {
        this.port = port;
        this.server = new http_1["default"].Server();
        //const io: socketIO.Server = socketIO(this.server);
        var io = new socket_io_1.Server(this.server);
    }
    App.prototype.Start = function () {
        this.server.listen(this.port);
        console.log("Server listening on port " + this.port);
    };
    return App;
}());
new App(port).Start();
