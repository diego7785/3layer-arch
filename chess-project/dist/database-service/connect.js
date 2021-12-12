"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.disconnect = exports.connect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
function connect() {
    return mongoose_1.default.connect("mongodb://localhost:27017/chess-game");
}
exports.connect = connect;
function disconnect() {
    return mongoose_1.default.disconnect();
}
exports.disconnect = disconnect;
//# sourceMappingURL=connect.js.map