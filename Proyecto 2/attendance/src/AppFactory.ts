import express from "express";

export default class AppFactory {
  app: express.Application;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  startServer(host: String, port: String) {
    this.app.listen(port, () => {
      console.log(`Server running at http://${host}:${port}`);
    });
  }

  useRoute(route: string, router: express.Router) {
    this.app.use(route, router);
  }
}
