import * as express from 'express'
import * as path from 'path';

class App {
    public express;

    constructor() {
        this.express = express();
        this.mountRoutes();
        this.shareStaticResources();
    }

    private mountRoutes(): void {
        const router = express.Router();

        router.get('/', (req, res) => {
            res.sendFile(__dirname + '/../index.html');
        });

        this.express.use('/', router);
    }

    private shareStaticResources(): void {
        this.express.use('/frontend', express.static(path.join(__dirname, 'frontend')));
    }
}

export default new App().express;
