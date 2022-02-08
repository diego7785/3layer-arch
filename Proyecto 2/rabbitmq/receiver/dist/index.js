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
Object.defineProperty(exports, "__esModule", { value: true });
const amqp = require("amqplib");
function consume() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("consuming");
        const conn = yield amqp.connect({
            protocol: "amqp",
            hostname: "localhost",
            port: 5672,
            username: "admin",
            password: "123456",
        });
        const ch = yield conn.createChannel();
        const q = "attendances_queue";
        yield conn.createChannel();
        yield ch.assertQueue(q, { durable: true });
        yield ch.consume(q, function (msg) {
            console.log(msg === null || msg === void 0 ? void 0 : msg.content.toString());
            ch.ack(msg);
            ch.cancel("myconsumer");
        }, { consumerTag: "myconsumer" });
        setTimeout(function () {
            ch.close();
            conn.close();
        }, 500);
    });
}
consume();
//# sourceMappingURL=index.js.map