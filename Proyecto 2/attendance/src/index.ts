import AppFactory from "./AppFactory";
import AttendanceRoutes from "./attendance/attendance.routes";
import { connect, disconnect } from ".//database/index";

const PORT = process.env.PORT || "3001";
const HOST = process.env.HOST || "localhost";

const app = new AppFactory();
connect();

app.useRoute("/api/attendance", new AttendanceRoutes().routes());

app.startServer(HOST, PORT);
