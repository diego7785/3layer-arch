import express from 'express';

export default class AppFactory {

    app: express.Application;

    constructor() {
        this.app = express();
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    startServer(host: String, port: String): void {
        this.app.listen(port, () => {
            console.log(`Server listening on http://${host}:${port}`);
        });
    }

    useRoute(route: string, router: express.Router): void {
        this.app.use(route, router);
    }
}