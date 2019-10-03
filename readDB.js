const User = require('./models/user')



const users = async () => {

  console.log(await User.find())

}

users()