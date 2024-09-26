const amqp = require('amqplib');

amqp.connect(`amqp://${process.env.RABBITMQ_USER}:${process.env.RABBITMQ_PASSWORD}@${process.env.RABBITMQ_HOST}:${process.env.RABBITMQ_PORT}`)
    .then((connection) => {
        console.log("Connected to rabbitmq.");
        connection.createChannel().then(channel => {
            channel.consume(`${process.env.RABBITMQ_QUEUE}`, msg => {
                if (msg.content) {
                    msg = JSON.parse(msg.content);
                    console.log(`${JSON.stringify(msg)} @ ${JSON.stringify(new Date())}`);
                }
            }, {noAck: true, exclusive: false});
        }).catch(console.error);
    }).catch(console.error);
