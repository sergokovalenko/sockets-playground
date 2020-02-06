import * as express from 'express'

class App {
    public express;

    constructor() {
        this.express = express();
        this.mountRoutes();
    }

    private mountRoutes(): void {
        const router = express.Router();

        router.get('/', (req, res) => {
            res.sendFile(__dirname + '/index.html');
        });

        this.express.use('/', router);
    }
}

export default new App().express;
