"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class AppFactory {
    constructor() {
        this.app = (0, express_1.default)();
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    startServer(host, port) {
        this.app.listen(port, () => {
            console.log(`Server running at http://${host}:${port}`);
        });
    }
    useRoute(route, router) {
        this.app.use(route, router);
    }
}
exports.default = AppFactory;
//# sourceMappingURL=AppFactory.js.map