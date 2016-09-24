var mongoose = require('mongoose');

var Item = new mongoose.Schema({
    time: Date,
    type: String,
    finish: Boolean,
    content: String
});

var _Daily = new mongoose.Schema({
    date: { type: String, index: true },
    mood: { type: Number ,default: 0},
    record: String,
    inspire: {type: String, default: 'A new day,a new goal!'},
    todos: [Item]
});

module.exports = mongoose.model('Daily', _Daily);