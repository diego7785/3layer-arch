import amqp = require("amqplib");
import config from "./config";
import { getUserById, updateAttendanceAmount } from "./services/user.service";

async function connect() {
  const conn = await amqp.connect({
    protocol: "amqp",
    hostname: config.hostname,
    port: config.port,
    username: config.username,
    password: config.password,
  });
  return conn;
}

async function configRabbit(conn: any) {
  const ch = await conn.createChannel();
  const q = config.queue;

  await conn.createChannel();
  await ch.assertQueue(q, { durable: true });

  return { ch, q };
}

function synchronizeAttendances(msg: any) {
  const attendanceString = msg?.content.toString();
  const attendance = JSON.parse(attendanceString as string);
  getUserById(attendance.idUser).then(async (user) => {
    const assitanceAmount = user.data.assistanceAmount + 1;
    await updateAttendanceAmount(attendance.idUser, assitanceAmount)
    });
}

async function consume() {
  console.log("consuming");
  const conn = await connect();
  const { ch, q } = await configRabbit(conn);

  await ch.consume(q, function (msg: any) {
    ch.ack(msg);
    synchronizeAttendances(msg);
  });
}

consume();
