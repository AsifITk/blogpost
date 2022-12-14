const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    name1: {
        type: String,
        required: true
    },
    author_name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now(),
    }
});




module.exports = mongoose.model('Article', articleSchema);
