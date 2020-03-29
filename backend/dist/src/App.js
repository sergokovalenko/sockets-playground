"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
class App {
    constructor() {
        this.express = express();
        this.mountRoutes();
        this.shareStaticResources();
    }
    mountRoutes() {
        const router = express.Router();
        router.get('/', (req, res) => {
            res.sendFile(__dirname + '/../index.html');
        });
        this.express.use('/', router);
    }
    shareStaticResources() {
        this.express.use('/frontend', express.static(path.join(__dirname, 'frontend')));
    }
}
exports.default = new App().express;
