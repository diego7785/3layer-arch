import amqp = require("amqplib/callback_api");

amqp.connect(
  {
    protocol: "amqp",
    hostname: "localhost",
    port: 5672,
    username: "admin",
    password: "123456",
  },
  function (err: any, conn: any) {
    if (err) {
      throw err;
    }

    conn.createChannel(function (err1: any, ch: any) {
      if (err1) {
        throw err1;
      }

      const exchange = "topic_logs";

      ch.assertExchange(exchange, "topic", { durable: false });

      ch.assertQueue("", { exclusive: true }, function (err2: any, q: any) {
        if(err2){
        throw err2 
      }

      console.log("Waiting for messages in %s. To exit press CTRL+C");
      ch.bindQueue(q.queue, exchange, "topic.news");

      ch.consume(q.queue, function (msg: any) {
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
  }
);
