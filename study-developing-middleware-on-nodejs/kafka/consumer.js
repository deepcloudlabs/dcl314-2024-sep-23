const Kafka = require("node-rdkafka");

const stream = new Kafka.createReadStream({
   "group.id": `${process.env.KAFKA_GROUP_ID}`,
   "bootstrap.servers": `${process.env.KAFKA_HOST}`,
   "enable.auto.commit": true
}, {}, {topics: [`${process.env.KAFKA_TOPIC}`]});

stream
.on("data", payload => {
  console.log(`${payload.value.toString()} @ ${JSON.stringify(new Date())}`);
}).on("error", console.error);
