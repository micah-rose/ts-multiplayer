import http from "http";
import { Server } from "socket.io";

const port: number = 3000;

class App {
    private server: http.Server;
    private port: number;

    constructor(port: number) {
        this.port = port;

        this.server = new http.Server();
        //const io: socketIO.Server = socketIO(this.server);
        const io  = new Server(this.server);
    }

    public Start() {
        this.server.listen(this.port);
        console.log(`Server listening on port ${this.port}`);
    }
}

new App(port).Start();