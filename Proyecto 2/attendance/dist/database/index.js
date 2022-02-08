"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.disconnect = exports.connect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("../config"));
function connect() {
    mongoose_1.default.connect(`mongodb://${config_1.default.host}:${config_1.default.port}/${config_1.default.name}`);
}
exports.connect = connect;
function disconnect() {
    mongoose_1.default.disconnect();
}
exports.disconnect = disconnect;
//# sourceMappingURL=index.js.map