var mongoose = require('mongoose');

var Item = new mongoose.Schema({
    time: Date,
    content: String
});

var _Plan = new mongoose.Schema({
    createtime: Date,
    content: String,
    progress: Number,
    process: [Item]
});

module.exports = mongoose.model('Plan', _Plan);