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
const config_1 = __importDefault(require("../config"));
const amqp = require("amqplib");
function connect() {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield amqp.connect({
            protocol: "amqp",
            hostname: config_1.default.ampq.host,
            port: Number(config_1.default.ampq.host),
            username: config_1.default.ampq.username,
            password: config_1.default.ampq.password,
        });
        return conn;
    });
}
function configRabbit(conn) {
    return __awaiter(this, void 0, void 0, function* () {
        const ch = yield conn.createChannel();
        const exch = config_1.default.ampq.exchange;
        const q = config_1.default.ampq.queue;
        const rkey = config_1.default.ampq.route;
        yield ch
            .assertExchange(exch, "direct", { durable: true })
            .catch(console.error);
        yield ch.assertQueue(q, { durable: true });
        yield ch.bindQueue(q, exch, rkey);
        return { ch, exch, rkey };
    });
}
function publish(attendance, identifier) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield connect();
            const { ch, exch, rkey } = yield configRabbit(conn);
            yield ch.publish(exch, rkey, Buffer.from(JSON.stringify({ identifier, attendance })));
            setTimeout(function () {
                ch.close();
                conn.close();
            }, 500);
            return true;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    });
}
exports.default = publish;
//# sourceMappingURL=amqp.service.js.map