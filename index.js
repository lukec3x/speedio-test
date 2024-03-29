const amqp = require('amqplib/callback_api')
const User = require('./models/user')

amqp.connect('amqp://localhost:5672', function (err, conn) {
// amqp.connect('amqp://xxypubma:Wn-dt1JagVPLaqaxRbz4Remvlf6acIeJ@llama.rmq.cloudamqp.com/xxypubma', function (err, conn) {

    conn.createChannel(function (err, ch) {
        var ex = 'pub_sub_meetup28'

        ch.assertExchange(ex, 'fanout', { durable: false })

        ch.assertQueue('', { exclusive: true }, function (err, q) {
            console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q.queue)
            ch.bindQueue(q.queue, ex, '')

            ch.consume(q.queue, async (msg) => {
                
                const msgFn = JSON.parse(msg.content)[0]
                console.log(msgFn)

                const user = await User.create(msgFn)
                console.log(user)
                console.log(await User.find())

            }, { noAck: true })
        })
    })
})