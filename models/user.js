const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/speedio-test', {useNewUrlParser: true, useUnifiedTopology: true}).catch(function(err){
    console.log(`Erro na conexão com o MongoDB \n\n${err}`)
}) 

// mongoose.Promise = global.Promise

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

const User = mongoose.model('User', UserSchema)

module.exports = User