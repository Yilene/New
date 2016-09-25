var mongoose = require('mongoose');

var Item = new mongoose.Schema({
    time: Date,
    content: String
});

var _Plan = new mongoose.Schema({
    createTime: Date,
    content: String,
    progress: Number,
    finish: Boolean,
    process: [Item]
});

module.exports = mongoose.model('Plan', _Plan);