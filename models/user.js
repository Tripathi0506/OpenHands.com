const mongoose = require('mongoose');
const schema = mongoose.Schema
const Users = schema({
    Amount: Number,
    firstName: String,
    lastName: String,
    email: String,
    phone: Number,
    address: String,
    note: String
})

module.exports = mongoose.model('Users',Users)