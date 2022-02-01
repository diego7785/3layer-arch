import AppFactory from "./AppFactory";
import UserRoutes from "./user/user.routes";
import "reflect-metadata";

const PORT = process.env.PORT || "3000";
const HOST = process.env.HOST || "localhost";

const app = new AppFactory();

app.useRoute("/api/user", new UserRoutes().routes());

app.startServer(HOST, PORT);
