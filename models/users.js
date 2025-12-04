const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    title: String,
    name: String,
    favoriteFood: String,
    isInstructor: Boolean,
    class: String,
    Date: String
});

module.exports = mongoose.model('Users', usersSchema);