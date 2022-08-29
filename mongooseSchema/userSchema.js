const mongoose = require('mongoose')

const userSchema = new User.Schema({

    firstname: { type: String, required: true },
    lastname: { type: String, required: true }, 
    email: { type: String, required: true },
    password: { type: String, required: true },
    birthday: { type: String, required: true },
    occupation: { type: String, required: true }

})

const User = mongoose.model("User", userSchema)
module.exports = User