import amqp = require("amqplib");

async function consume() {
  console.log("consuming");
  const conn = await amqp.connect({
    protocol: "amqp",
    hostname: "localhost",
    port: 5672,
    username: "admin",
    password: "123456",
  });
  const ch = await conn.createChannel();
  const q = "attendances_queue";

  await conn.createChannel();
  await ch.assertQueue(q, { durable: true });
  await ch.consume(
    q,
    function (msg) {
      console.log(msg?.content.toString());
      ch.ack(msg as any);
      ch.cancel("myconsumer");
    },
    { consumerTag: "myconsumer" }
  );
  setTimeout(function () {
    ch.close();
    conn.close();
  }, 500);
}

consume();
