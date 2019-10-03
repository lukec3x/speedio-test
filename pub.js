const amqp = require('amqplib/callback_api')

amqp.connect('amqp://localhost:5672', function (err, conn) {
// amqp.connect('amqp://xxypubma:Wn-dt1JagVPLaqaxRbz4Remvlf6acIeJ@llama.rmq.cloudamqp.com/xxypubma', function (err, conn) {

    conn.createChannel(function (err, ch) {
        var ex = 'pub_sub_meetup28'

        var msg = [{ name: 'José' }]

        ch.assertExchange(ex, 'fanout', { durable: false })
        ch.publish(ex, '', Buffer.from(JSON.stringify(msg)))
        console.log(" [x] Sent %s", msg)
    })

    setTimeout(function () {
      conn.close()
      process.exit(0)
    }, 500)


})