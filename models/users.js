const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    title: String,
    name: String,
    isInstructor: Boolean,
    class: String,
    Date: String,
    completed: Boolean,
    createdAt: Date,
    value: Number
});

module.exports = mongoose.model('Users', usersSchema);