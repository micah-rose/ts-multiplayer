"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const port = 3000;
class App {
    constructor(port) {
        this.port = port;
        this.server = new http_1.default.Server();
        //const io: socketIO.Server = socketIO(this.server);
        const io = new socket_io_1.Server(this.server);
    }
    Start() {
        this.server.listen(this.port);
        console.log(`Server listening on port ${this.port}`);
    }
}
new App(port).Start();
//# sourceMappingURL=server.js.map