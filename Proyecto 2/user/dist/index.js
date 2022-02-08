"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppFactory_1 = __importDefault(require("./AppFactory"));
const user_routes_1 = __importDefault(require("./user/user.routes"));
require("reflect-metadata");
const PORT = process.env.PORT || "3000";
const HOST = process.env.HOST || "localhost";
const app = new AppFactory_1.default();
app.useRoute("/api/user", new user_routes_1.default().routes());
app.startServer(HOST, PORT);
//# sourceMappingURL=index.js.map