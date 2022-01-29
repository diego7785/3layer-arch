"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const amqp = require("amqplib/callback_api");
amqp.connect({
    protocol: "amqp",
    hostname: "localhost",
    port: 5672,
    username: "admin",
    password: "123456",
}, function (err, conn) {
    if (err) {
        throw err;
    }
    conn.createChannel(function (err1, ch) {
        if (err1) {
            throw err1;
        }
        const exchange = "topic_logs";
        ch.assertExchange(exchange, "topic", { durable: false });
        ch.publish(exchange, "topic.*", Buffer.from("Hello World! topic"));
        console.log(" [x] Sent 'Hello World!' to the topic.news");
        // ch.publish(exchange, "topic.news2", Buffer.from("Hello World! topic 2"));
        // console.log(" [x] Sent 'Hello World!' to the topic.news2");
        // const queue = "hello";
        // const message = "Hola";
        // ch.assertQueue(queue, { durable: false });
        // ch.sendToQueue(queue, Buffer.from(message));
        // console.log(" [x] Sent %s", message);
    });
    setTimeout(function () {
        conn.close();
        process.exit(0);
    }, 500);
});
//# sourceMappingURL=index.js.map