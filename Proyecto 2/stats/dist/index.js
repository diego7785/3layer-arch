"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const amqp = require("amqplib");
const config_1 = __importDefault(require("./config"));
const user_service_1 = require("./services/user.service");
function connect() {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield amqp.connect({
            protocol: "amqp",
            hostname: config_1.default.hostname,
            port: config_1.default.port,
            username: config_1.default.username,
            password: config_1.default.password,
        });
        return conn;
    });
}
function configRabbit(conn) {
    return __awaiter(this, void 0, void 0, function* () {
        const ch = yield conn.createChannel();
        const q = config_1.default.queue;
        yield conn.createChannel();
        yield ch.assertQueue(q, { durable: true });
        return { ch, q };
    });
}
function synchronizeAttendances(msg) {
    const attendanceString = msg === null || msg === void 0 ? void 0 : msg.content.toString();
    const attendance = JSON.parse(attendanceString);
    (0, user_service_1.getUserById)(attendance.idUser).then((user) => __awaiter(this, void 0, void 0, function* () {
        const assitanceAmount = user.data.assistanceAmount + 1;
        yield (0, user_service_1.updateAttendanceAmount)(attendance.idUser, assitanceAmount);
    }));
}
function consume() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("consuming");
        const conn = yield connect();
        const { ch, q } = yield configRabbit(conn);
        yield ch.consume(q, function (msg) {
            ch.ack(msg);
            synchronizeAttendances(msg);
        });
    });
}
consume();
//# sourceMappingURL=index.js.map