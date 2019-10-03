const amqp = require('amqplib/callback_api')

amqp.connect('amqp://localhost:5672', function (err, conn) {
// amqp.connect('amqp://xxypubma:Wn-dt1JagVPLaqaxRbz4Remvlf6acIeJ@llama.rmq.cloudamqp.com/xxypubma', function (err, conn) {

    conn.createChannel(function (err, ch) {
        var ex = 'pub_sub_meetup28'
        // var msg = process.argv.slice(2).join(' ') || 'Hello World!'
        // var msg = [{ id: 0000012123, name: 'Lucas',}, { id: 0000042123, name: 'Luke' }]
        var msg = [{ name: 'Lucas',}]

        ch.assertExchange(ex, 'fanout', { durable: false })
        ch.publish(ex, '', Buffer.from(JSON.stringify(msg)))
        console.log(" [x] Sent %s", msg)
    })

    setTimeout(function () {
      conn.close()
      process.exit(0)
    }, 500)


})