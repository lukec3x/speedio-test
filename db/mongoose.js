const mongoose = require('mongoose')

const url = 'mongodb://deploy:deploy123@cluster0-shard-00-00-3jugl.mongodb.net:27017,cluster0-shard-00-01-3jugl.mongodb.net:27017,cluster0-shard-00-02-3jugl.mongodb.net:27017/admin?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority'

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}).catch(function (err) {
// mongoose.connect('mongodb://localhost/speedio-test', {useNewUrlParser: true, useUnifiedTopology: true}).catch(function(err){
    console.log(`Erro na conexão com o MongoDB \n\n${err}`)
})

mongoose.Promise = global.Promise

module.exports = mongoose