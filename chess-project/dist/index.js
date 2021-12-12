"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config"));
const board_1 = __importDefault(require("./routes/board"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
const PORT = config_1.default.port;
const HOST = config_1.default.host;
app.use('/', board_1.default);
app.listen(PORT, () => {
    console.log(`Server listening on  http://${HOST}:${PORT}`);
});
//# sourceMappingURL=index.js.map