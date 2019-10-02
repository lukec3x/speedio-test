const amqp = require('amqplib/callback_api')
const User = require('./models/user')

amqp.connect('amqp://localhost:5672', function (err, conn) {

    conn.createChannel(function (err, ch) {
        var ex = 'pub_sub_meetup28'

        ch.assertExchange(ex, 'fanout', { durable: false })

        ch.assertQueue('', { exclusive: true }, function (err, q) {
            console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q.queue)
            ch.bindQueue(q.queue, ex, '')

            ch.consume(q.queue, function async (msg) {
                console.log(" [x] %s", msg.content.toString())
                console.log(msg)

                const user = await User.create(msg.content)

            }, { noAck: true })
        })
    })
})