"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppFactory_1 = __importDefault(require("./AppFactory"));
const attendance_routes_1 = __importDefault(require("./attendance/attendance.routes"));
const index_1 = require(".//database/index");
const PORT = process.env.PORT || "3001";
const HOST = process.env.HOST || "localhost";
const app = new AppFactory_1.default();
(0, index_1.connect)();
app.useRoute("/api/attendance", new attendance_routes_1.default().routes());
app.startServer(HOST, PORT);
//# sourceMappingURL=index.js.map