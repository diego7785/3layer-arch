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
        ch.assertQueue("", { exclusive: true }, function (err2, q) {
            if (err2) {
                throw err2;
            }
            console.log("Waiting for messages in %s. To exit press CTRL+C");
            ch.bindQueue(q.queue, exchange, "topic.news");
            ch.consume(q.queue, function (msg) {
                if (msg !== null) {
                    console.log(" [x] %s: '%s'", msg.fields.routingKey, msg.content.toString());
                }
            }, { noAck: true });
            // ch.bindQueue(q.queue, exchange, "topic.news2");
            // ch.consume(q.queue, function (msg: any) {
            //   if (msg !== null) {
            //     console.log(" [x] %s: '%s'", msg.fields.routingKey, msg.content.toString());
            //   }
            // }, { noAck: true });
        });
        // const queue = 'hello';
        // ch.assertQueue(queue, {
        //   durable: false,
        // });
        // console.log('waiting for messages...');
        // ch.consume(queue, function (msg: any) {
        //   console.log(" [x] Received %s", msg.content.toString());
        // }),
        //   { noAck: true }
    });
    // setTimeout(function () {
    //     conn.close();
    //     process.exit(0);
    // }, 500);
});
//# sourceMappingURL=index.js.map